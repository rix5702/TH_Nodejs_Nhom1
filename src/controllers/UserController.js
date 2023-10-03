import express from "express"
import pool from '../configs/connect.js'
import userModel from '../services/userModel.js'

const getAllUser = async (req, res) => {
    let userList = await userModel.getAllUser();
    return res.render("index", { data: { title: 'Danh sách tài khoản', rows: userList , page: 'listUser'} })
}

const postAddUser = async (req, res) =>{
    let hoten =req.body.hoten
    let account =req.body.account
    let gender =req.body.gender
    let email =req.body.email
    let address =req.body.address
    let groupid =req.body.groupid
    let password =req.body.password
    // console.log( ">>>>>", hoten,">>>>>",account,">>>>>",gender,">>>>>",email,">>>>>",address,">>>>>",permission // )
    await userModel.InsertUserById(hoten,account,gender,email,address,groupid,password)
    // console.log(">>> check results: ", results))
    res.redirect('/list-user')
}

const postUpdateUser = async (req, res) =>{
    let stt = req.body.stt    
    let hoten =req.body.hoten
    let account =req.body.account
    let gender =req.body.gender
    let email =req.body.email
    let address =req.body.address
    let groupid =req.body.groupid
    let password =req.body.password
    // console.log( ">>>>>", hoten,">>>>>",account,">>>>>",gender,">>>>>",email,">>>>>",address,">>>>>",permission,">::::::",stt  )
    await userModel.updateUserById(hoten,account,gender,email,address,groupid,password,stt)
    res.redirect('/list-user')
}

const getDeleteUser = async (req, res) =>{
    let stt = req.params.stt   
    console.log(">::::::",stt)
    await userModel.DeleteUserId(stt)
    res.redirect('/list-user')
}

const getUpdateUser = async (req, res) => {
   const userStt = parseInt(req.params.stt);
   let user = await userModel.getUserById(userStt)
    return res.render("index",{data: {title: "Cập Nhật tài khoản", userEdit : user, page: 'updateUser'}})
}

export default { getAllUser, postAddUser , getUpdateUser , postUpdateUser , getDeleteUser }
 
