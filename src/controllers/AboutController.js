import express from "express"
const aboutPage = (req, res) => {
    return res.render("about", {data: { title: 'About website', content: 'about page'}})
}
export default aboutPage