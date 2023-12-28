const Express = require('express')
const app = Express()
const port = 5000

const firstWareHandler = ((request,response,next) =>{
    if(10<20){
        next()
    }
})
const secondWareHandler = ((request,response,next) =>{
    if(10<20){
        next()
    }
})
const thirdWareHandler = ((request,response,next) =>{
    if(10>20){
        next()
    }else{
        console.log('sorry you are not allowed ')
    }
})
app.get('/apple',(request,response)=>{
    response.send('Apple is red in color')
})
app.get('/home',firstWareHandler,(request,response)=>{
    response.send('This is home page')
})
app.get('/about',secondWareHandler,(request,response)=>{
    response.send('This is about page')
})
app.get('/user/:121',thirdWareHandler,(request,response)=>{
    response.send('This is user page with id 121')
})
app.listen(port,()=>{
    console.log('Server created successfully')
})