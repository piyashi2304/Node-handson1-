const http = require("http")
const jsonData=require('./jsonpkg')

const server = http.createServer((request,response)=>{
    if(request.url==='/'){
        response.write("<title>Handson1- Home server</title> <h1>What is Node Js</h1><p>Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser</p>")
        response.write("<p>Benifit of Node.js</p><ol><li>High Performance</li><li>Asynchronous and Non-blocking</li><li>Scalability</li><li>Large Ecosystem (NPM)</li>")
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