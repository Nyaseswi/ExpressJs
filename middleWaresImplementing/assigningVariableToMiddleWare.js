const Express = require('express')
const app = Express()
const port = 5000

const firstWareHandler = ((request,response,next) =>{
    if(10<20){
        next()
    }
})
app.get('/apple',firstWareHandler,(request,response)=>{
    response.send('Apple is red in color')
})
app.get('/home',(request,response)=>{
    response.send('This is home page')
})
app.get('/about',(request,response)=>{
    response.send('This is about page')
})
app.get('/user/:121',(request,response)=>{
    response.send('This is user page with id 121')
})
app.listen(port,()=>{
    console.log('Server created successfully')
})