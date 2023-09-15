import pool from '../configs/connectDB'

const getAllUser = async () => {
    const [rows, fields] = await pool.execute
    ('SELECT * FROM `user`')
    return rows
}
const detailUser = async (id) =>{
    const [rows] = await pool.execute
    ('SELECT * FROM `user` WHERE id=?',[id])
    return rows[0]
}
export default {
    getAllUser,
    detailUser
}