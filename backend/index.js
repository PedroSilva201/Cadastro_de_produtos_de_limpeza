const express = require("express");
const app = express();
const mysql = require('mysql2');
const cors = require("cors");

const db = mysql.createPool({
    host: '172.16.13.132',
    user: 'pedro',
    password: '11',
    database: 'produtos'
});

app.use(cors());
app.use(express.json());

app.post('/novo-produto', (req, res) => {
    const {cod, nome, valor} = req.body;

    let sql = 'INSERT INTO produto (cod, nome, valor) VALUES (?, ?, ?)';
    db.query(sql, [cod, nome, valor], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
});

app.get('/produtos', (req, res) => {
    let sql = 'SELECT * FROM produto'
    db.query(sql, (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
});

app.delete('/deletar-produto', (req, res) => {
    const { cod } = req.query;
    let sql = 'DELETE FROM produto WHERE cod = ?'
    db.query(sql, [cod], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    })
})

app.get('/produto', (req, res) => {
    const { cod } = req.query;

    let sql = 'SELECT * FROM produto WHERE cod = ?';
    db.query(sql, [cod], (err, result) => {
        if(err) console.log(err);
        else res.send(result[0]);
    })
});

app.put('/editar-produto', (req, res) => {
    const { cod } = req.query;

    const {nome, valor} = req.body;

    let sql = 'UPDATE produto SET nome =  ?, valor = ? WHERE cod = ?'
    db.query(sql, [nome, valor, cod], (err, result) => {
        if(err) console.log(err);
        else res.send(result);
    });
})


app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(4001, () => {
    console.log('Rodando servidor');
});