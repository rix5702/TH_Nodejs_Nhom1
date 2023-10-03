import express from "express"
const register = (req, res) => {
    return res.render("index", {data: { title: 'Tạo tài khoản', page:'newUser'}})
}
export default  register 