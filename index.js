const http = require("http")
const jsonData=require('./jsonpkg')

const server = http.createServer((request,response)=>{
    if(request.url==='/'){
        response.write("<p>This is Home server</p>")
        response.end()
    }
    if(request.url==='/student'){
        const jsonstore=JSON.stringify(jsonData)
        response.write(jsonstore)
        response.end()
    }
    if(request.url==='/product'){
        response.write("<p>This is Product server</p>")
        response.end()
    }
})

server.listen(4040,()=>{
    console.log("server started")
})