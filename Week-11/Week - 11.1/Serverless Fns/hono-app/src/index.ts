import { Hono } from 'hono'

const app = new Hono()

//What u need in hono to make it work like express are 
//body,headers,query parameters, middlewares, connecting to datbases

//Body
//you can use postman to verify it.

app.post('/', async (c) => { 
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

//Middilewares
async function authMiddleware(c : any, next : any) {
  if (c.req.header("Authorization")) {
    // Do validation
    await next()
  } else {
    return c.text("You dont have acces");
  }
}

//app.use(authMiddleware);


app.get('/',authMiddleware, (c) => {
  return c.text('Hello Hono!')
})

export default app
