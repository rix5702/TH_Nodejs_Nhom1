import express from "express"
const getLoginUser = (req, res) => {
    return res.render("loginUser", {data: { title: 'Đăng Nhập', content: 'admin@abc.com.vn'}})
}
export default getLoginUser;