const express = require('express');
const apiRouter = require('./server');
const { handlerError, errorLogs } = require('./middleware/error.handler');
const app = express();
const port = 3000
app.use(express.json());
apiRouter(app);
app.use(handlerError);
app.use(errorLogs);
app.get('/',(req, res)=>{
    res.send('Hola mundo desde mi ruta raiz')
})
app.listen(port,(req, res)=>{
    console.log(`Puerto escuchando en el ${port}`)
})