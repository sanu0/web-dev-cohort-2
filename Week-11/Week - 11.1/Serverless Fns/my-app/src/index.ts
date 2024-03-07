/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
}

//Here it is returning a promise of response as fetch is an async function and there may be 
//a database call and that will return promise that is why the return type is promise here.
export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		return Response.json({
			message : "Hi there",
		});
	},
};
//In package.json there is a dependecies called wrangler and what is does is that
//It brings the runtime locally and starts the code locally.
//HTTP servers and all other things are maintained by the wrangler as cloudflare does not 
//expects you to write the Express code and make the routes like you did as it handles all of these 
//by itself.

//But how will you write the code like express where you had post, get ,put nad all other mathods in cloudflare 
//env???

//The complex way of writing request and response for worker in cloudflare is given below. It shows that yeah you can write this in cloudflare env but this is not what we will use tho.

// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
// 		console.log(request.body);
// 		console.log(request.headers);
		
// 		if (request.method === "GET") {
// 			return Response.json({
// 				message: "you sent a get request"
// 			});
// 		} else {
// 			return Response.json({
// 				message: "you did not send a get request"
// 			});
// 		}
// 	},
// };

//----------------------------------------------------------------------------------------------

/**So if you want to write the clean code in cloudflare env then the first thing is that you can not
 * Also you cannot use express here as well.
 * You have to use different method to handle routes (just like you did in express) in cloudflare envrinonment.
 * 
 * we won't use this way to do routing rather we will be using a lbrary that will make our life easier
 * wrangler is the CLI that let's you do a ton of things to cloudFlare ad one of it is to push code into cloudFlare
 * for that first thing you have to do is login to your cloudFlare account.
 * 
 * Tologin in your cloudFlare account the command is : npx wrangler login
 * 
 * "npx wrangler whoami" -> this command will give you the details of your account.
 * The command to deploy is : "npm run deploy"
 */
//--------------------------------------------------------------------------------------------------
/**
 * It's unlikely you will see specifically Express on Workers due to its deep dependencies on Node.js
 * 
 * Note : 
 * If you really need to deploy a Node.js app on a serverless option then you can split your app into small components
 * and do not need to rely heavily on Node.js. CloudFlare workers are an amazing options and there are routing foir them as well.
 * 
 * So you structre your code in such a way that the routing part that uses express will only be 5% of your code and the rest
 * logic will be in a method that is saved in other file which does not uses express. Now in that way 95% of the coide won't use
 * express and you can edit the 5% code to the cloudFlare routing as we have seen above.
 * 
 * 												Hono Library 
 * ----------------------------------------------------------------------------------------------------------
 * Hono is a lightweight, simple, and ultrafast web framework designed for building applications that run on the "Edge," 
 * meaning servers located close to users for faster response times.
 * It's known for its speed, flexibility, and ability to work on various platforms.
 *  
 */