import mysql from 'mysql2/promise'
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'testnodejs',
    password: ''
});
export default connection