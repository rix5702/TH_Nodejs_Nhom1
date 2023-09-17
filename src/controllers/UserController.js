import express from "express";
import userModel from "../services/userModel";


const getAllUser = async (req, res) => {
    let userList = await userModel.getAllUser()
    let trang = parseInt(req.params.trang)
    let from = (trang - 1) * 5 + 1;
    let to = trang * 5;
    console.log(from+'-'+to)
    res.render('index',{data: {title: 'Danh sách tài khoản', rows:userList, page: 'listUser'}})
}
const detailUser = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await userModel.detailUser(username);

        if (!user) {
            res.status(404).send('Người dùng không tồn tại.');
            return;
        }

        res.render('index', { data: { title: 'Xem chi tiết', rows:user, params: user.username, page: 'detailUser' } });
    } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error);
        res.status(500).send('Đã xảy ra lỗi khi lấy thông tin người dùng.');
    }
}
export default {
    getAllUser,
    detailUser
}