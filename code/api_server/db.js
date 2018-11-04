// 数据库操作
const mysql = require('mysql')

let conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'user_001'
});
module.exports = conn