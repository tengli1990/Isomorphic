const path =require('path');
const config = {
  staticDir: path.join(__dirname,'..','assets'),
  viewDir: path.join(__dirname,'..','views')
}


if(process.env.NODE_ENV === 'development'){
   let devConfig = {
     port:3000,
     memoryFlag: false,
   }
   Object.assign(config,devConfig)
}

if(process.env.NODE_ENV === 'production'){
  let prodConfig = {
    port:3001,
    memoryFlag:true,
  }
  Object.assign(config,prodConfig)
}

module.exports = config