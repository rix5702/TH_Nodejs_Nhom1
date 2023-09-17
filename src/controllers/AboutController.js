import express from "express"
const aboutPage = (req, res) => {
    return res.render("index", {data: { title: 'About website', page: 'about'}})
}
export default aboutPage