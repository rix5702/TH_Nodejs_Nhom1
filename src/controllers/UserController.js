import express from "express";
import userModel from "../services/userModel";

const getAllUser = async (req, res) => {
    let userList = await userModel.getAllUser()
    res.render('listUser',{data: {title: 'Danh sách tài khoản', rows:userList}})
}
const detailUser = async  (req, res) => {
        let id = req.params.id
        let dataUser = await userModel.detailUser(id)
        res.render('detailUser',{data:{rows:dataUser}})
}
export default {
    getAllUser,
    detailUser
}