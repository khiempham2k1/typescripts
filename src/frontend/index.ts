import express from 'express'
import path from'path'

const app = express();

app.set("view engine", "ejs");
app.set('views', 'templates');

app.use('/assets', express.static(path.join('dist/backend')));
app.use('/',express.static(path.join('public')));

app.get('/board',(req,res) =>{
    res.render('index', {})
})

app.get('/login',(req,res) =>{
    res.render('login',{})
})

app.listen(4000,()=>{
    console.log('localhost:4000')
})