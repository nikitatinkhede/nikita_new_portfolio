import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// Runs the Vercel functions in /api during `npm run dev`, so the contact form works locally.
function vercelApiDev() {
  return {
    name: 'vercel-api-dev',
    configureServer(server) {
      Object.assign(process.env, loadEnv(server.config.mode, process.cwd(), ''))

      server.middlewares.use('/api', async (req, res, next) => {
        const name = req.url.split('?')[0].replace(/^\/+|\/+$/g, '')
        if (!/^[\w-]+$/.test(name)) return next()

        let mod
        try {
          mod = await server.ssrLoadModule(`/api/${name}.js`)
        } catch {
          return next()
        }

        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        }

        // Any failure here (including an aborted request) must not crash the dev server
        try {
          let raw = ''
          for await (const chunk of req) raw += chunk
          try {
            req.body = raw ? JSON.parse(raw) : {}
          } catch {
            req.body = raw
          }
          await mod.default(req, res)
        } catch (error) {
          if (!res.headersSent && !res.destroyed) res.status(500).json({ error: error.message })
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercelApiDev()],
})
