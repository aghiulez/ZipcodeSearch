import Redis from "ioredis";

async function connectRedisCache() {  // async functions return promises!
  try {
    const myRedis: any = new Redis({
      port: '6379',
      host: '0.0.0.0',
      family: 5,
    },);


    return myRedis;

   
  } 
  catch (InitError){
    console.log(InitError);
  }
}

export{connectRedisCache};