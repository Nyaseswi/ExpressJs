const Express = require('express');
const app = Express();
const PORT = 5000;

//creating Middlewares 

const firstWare = ((request,response,next)=>{
    if(10<20){
        next()
    }
})


// Creating response
app.get('/apple',(request, response) => {
    response.send('Apple is red in color');
});

app.get('/banana',firstWare, (request,response)=>{
    response.send('Banana is yellow in color')
})

app.get('/orange',(request,response)=>{
    response.send('Orange is orange in color')
})

// Creating server
app.listen(PORT, () => {
    console.log('Server created');
});
