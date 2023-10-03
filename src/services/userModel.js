import pool from '../configs/connect.js'

const getAllUser = async () => {
    const [rows, fields] = await pool.execute('SELECT * FROM `user`');
    return rows
}

const getUserById =  async (userStt)  => {

    let [results , fields] =  await pool.query( `SELECT * FROM user WHERE stt = ?`, [userStt] );
    let user = results && results.length > 0 ? results[0] : {};
    return user ;
}

const updateUserById = async ( hoten, account, gender, email, address, groupid ,password, stt) =>{
    let [results , fields] =  await pool.query( 
        `UPDATE user
        SET hoten = ? ,account = ?,gender = ?,email = ?,address = ?,groupid = ?, password=?
        WHERE stt = ?`,
        [hoten, account, gender, email, address, groupid,password, stt]
    );
}

const InsertUserById = async (hoten,account,gender,email,address,groupid,password) =>{
    let [results , fields] =  await pool.query( 
        `INSERT INTO user
        (hoten,account,gender,email,address,groupid,password) 
        VALUES (?,?,?,?,?,?,?)`,
        [hoten,account,gender,email,address,groupid,password]
);
}

const DeleteUserId = async (stt)=> {
    let [results , fields] =  await pool.query( 
        `DELETE FROM user WHERE stt = ?`,
        [stt]
);
}

export default  {getAllUser , getUserById , updateUserById, InsertUserById ,DeleteUserId}

// const detailUser = async (username) =>{
//     const [rows] = await pool.execute('SELECT * FROM `user` WHERE username=?',[username])
//     return rows[0]
// }