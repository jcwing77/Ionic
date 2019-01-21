const express =require('express');
const  bodyParser =require('body-parser');
const mysql =require('mysql');

//创建连接池
let pool = mysql.createPool({
    user:'root'
});

let  app = new express();

app.use(bodyParser.json());

app.post('/signUp',(req,res)=>{//接收请求
  // res.end('It works');
  //   处理请求
  //   let email =req.query.email;
  //   let password =req.query.password;
    // console.log('get/...');

    let email =req.body.email;
    let password =req.body.password;
    // todo MySQL
    let  sql=' SELECT * FROM db.user WHERE email = ?';
    pool.query(sql,[email],(err,results)=>{
       if(err) throw err;
       if(results.length === 1){
           res.send({"status":"exist"});
       }
    });

    sql ='INSERT INTO db.user VALUE(NULL, ?, ?)';
    pool.query(sql,[email,password],(err,results)=>{
        if(err) throw err;
       if(results.affectedRows ===1){
           res.send({"status":"ok"});//3.1返回响应
       }else {
           res.send({"status":"err"});//3.2返回响应
       }
    });
    console.log(`email:${email};password:${password}`);


});

app.post('/signIn',(req,res)=>{
    let user= req.body.user;
    let sql =  `SELECT * 
                FROM db.user
                WHERE email = ? AND password = ?`;
    pool.query(sql,[user.email,user.password],(err,results)=>{
        if(err) throw err;// Ctrl+Alt +T
        if (results.length === 1) {
            res.send({"status":"ok"});
        } else {
            res.send({"status":"err"});
        }
    })
    console.log(user);
    // todo DB

});

app.listen(3000);

// Crtl+Shift+F10