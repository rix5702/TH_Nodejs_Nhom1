import express from "express"
const getLoginUser = (req, res) => {
    return res.render("index", {data: { title: 'Đăng Nhập', page: 'LoginUser'}})
}
export default getLoginUser;