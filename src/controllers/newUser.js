import express from "express"
const register = (req, res) => {
    return res.render("newUser", {data: { title: 'Tạo tài khoản',}})
}
export default register