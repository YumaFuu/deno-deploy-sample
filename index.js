import { Hono } from 'https://deno.land/x/hono/mod.ts'

const app = new Hono()

app.get('/', (c) => c.text('Hello Deno!'))
app.get('/:name', async (c) => c.text(`Hello ${(await c.req.param()).name}!`))

Deno.serve(app.fetch)
