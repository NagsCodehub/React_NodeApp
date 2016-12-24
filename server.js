import config from './config';
import apiRouter from './api';
import express from 'express';

import sassMiddleWare from 'node-sass-middleware';
import path from 'path';
const server = express();


server.use(sassMiddleWare({
    src:path.join(__dirname,'sass'),
    dest:path.join(__dirname,'public')
}));

server.set('view engine','ejs');

import serverRender from './serverRender';


//server.get('/',(req,res) =>{
//res.send('Hello Express');
//});

// server.get('/',(req,res) => {
//    res.render('index');
// });

server.get('/',(req,res) => {    
    serverRender()
    .then( content =>{
        res.render('index',
        {
            content
        });
    })
    .catch(console.error);

});

//server.get('/about.html',(req,res) =>{
//res.send('The about page');
//});
server.use('/api',apiRouter);
server.use(express.static('public'));

server.listen(config.port,config.host, () => {
    console.info('Express listening on port ', config.port);
});