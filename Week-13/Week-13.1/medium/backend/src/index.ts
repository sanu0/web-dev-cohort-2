import { Hono } from 'hono'
import { decode, sign, verify } from 'hono/jwt'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

// const prisma = new PrismaClient({
//     datasourceUrl: env.DATABASE_URL,
// }).$extends(withAccelerate())

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    SECRET  : string
  }
}>()

app.get('/', async (c) => {
  const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup' , async (c) =>{
  const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())
  
  const body = await c.req.json();
  try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password
			}
		});
    
		const token = await sign(user , c.env?.SECRET);

	} catch(e) {
		return c.status(403);
	}
});

app.post('/api/v1/user/signin' , (c) =>{
  return c.text("signin");
});

app.post('/api/v1/blog' , (c) =>{
  return c.text("blog");
});

app.put('/api/v1/blog' , (c) =>{
  return c.text("put");
});

app.get('/api/v1/blog:id' , (c) =>{
  return c.text("blog : id");
});

app.get('/api/v1/blog/bulk' , (c) =>{
  return c.text("blog/bulk");
});

export default app
