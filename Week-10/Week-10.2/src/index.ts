import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
  const res = await prisma.user.create({
    data:{
        email : username,
        password,
        firstname : firstName,
        lastName
    },
    select : {
        id : true,
        password : true,
        firstname : true,
    }
  })
  console.log(res);
}

// insertUser("admin5", "123456778", "Sunny", "Priyadarshi")

//Note -> even though some errorenous query runs, the autoincremented id will still get increment

interface UpdateParams {
    firstname: string;
    lastName: string;
}//This is how update parameters should look like.

async function updateUser(username: string, {
    firstname,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where : {email : username},
    data : {
        firstname,
        lastName
    }
  })
  console.log(res);
}
// updateUser("admin2", {
//     firstname : "Shanu",
//     lastName : "Kumar"
// })


async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
        email : username
    }
  })
  console.log(user);
}

getUser("admin1");