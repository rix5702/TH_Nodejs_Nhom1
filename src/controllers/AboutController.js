import express from "express"
const aboutPage = (req, res) => {
    return res.render("index", { data: { title: 'About website', content: 'admin@abc.com.vn',page:'about'}})
}
export default  aboutPage 