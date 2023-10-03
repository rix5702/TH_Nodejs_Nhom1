import express from "express"
const getHomePage = (req , res) => {
    return res.render("index", {data: { title: 'Trang chủ',page:'home'}})
}

export default getHomePage