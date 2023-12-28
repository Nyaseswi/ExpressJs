const Express = require('express')

const app = Express()

const port = 5000

app.get('/apple',(request,response)=>{
    response.send('Apple is red in color')
})

app.listen(port,()=>{
    console.log('Server created successfully')
})