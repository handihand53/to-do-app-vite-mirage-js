import { createServer, Response } from 'miragejs'

export function mockServer() {
  createServer({
    routes() {
      this.get('/api/example-api-endpoint', () => {
        // new Response(code, header, data)
        return new Response(200, {},  {
          code: 200,
          status: 'OK',
          data: 'hello world'
        })
      })
    }
  })
}