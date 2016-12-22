import config from './config';
import apiRouter from './api';
import express from 'express';
const server = express();

server.set('view engine','ejs');

//server.get('/',(req,res) =>{
//res.send('Hello Express');
//});

// server.get('/',(req,res) => {
//    res.render('index');
// });

server.get('/',(req,res) => {    
res.render('index',
{
    content:'Hello express <em> EJS</em>!'
});
});

//server.get('/about.html',(req,res) =>{
//res.send('The about page');
//});
server.use('/api',apiRouter);
server.use(express.static('public'));

server.listen(config.port, () =>{
    console.info('Express listening on port ', config.port);
});