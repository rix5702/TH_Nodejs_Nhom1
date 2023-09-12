import express from "express"
const getHomePage = (req, res) => {
    return res.render("Home", {data: { title: 'home', content: 'admin@abc.com.vn'}})
}
export default getHomePage