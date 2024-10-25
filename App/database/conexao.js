const sql = require('mysql');

const db = sql.createPool({
    host: 'localhost',
    user: "root",
    password: "",
    database:""
});


db.getConnection(()=>{
    console.log("Conexão com o banco rodando perfeitamente!")
})

module.exports = db;
