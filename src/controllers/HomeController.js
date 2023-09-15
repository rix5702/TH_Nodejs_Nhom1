import express from "express"
const getHomePage = (req, res) => {
    return res.render("home", {data: { title: 'Home', content: 'admin@abc.com.vn'}})
}
export default getHomePage