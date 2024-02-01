import { createServer, Response } from 'miragejs'
const toDoList = []
let id = 1
export function mockServer() {
  createServer({
    routes() {
      this.get('/example-api-endpoint', () => {
        // new Response(code, header, data)
        return new Response(200, {},  {
          code: 200,
          status: 'OK',
          data: 'hello world'
        })
      })
      this.get('/api/todo', () => {
        return new Response(200, {},  {
          code: 200,
          status: 'OK',
          data: toDoList
        })
      })
      this.post('/api/todo', (schema, request) => {
        toDoList.push({
          id: id,
          action: request.requestBody.action
        })
        id++
        return new Response(200, {},  {
          code: 200,
          status: 'OK'
        })
      })
      this.delete('/api/todo/:id', (schema, request) => {
        const id = request.params.id
        // get the index from list of to do list
        const deletedIndex = toDoList.findIndex(item => item.id === id)
        // using splice for delete choosen index
        toDoList.splice(deletedIndex, 1);
        return new Response(200, {},  {
          code: 200,
          status: 'Delete success'
        })
      })
    }
  })
}