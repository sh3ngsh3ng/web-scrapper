const express = require("express")
const axios = require("axios")
const cheerio = require("cheerio")

let app = express()


async function test() {
    let response = await axios.get("https://mothership.sg/")
    let html = response.data
    const $ = cheerio.load(html)
    let subtitles = []
    $('.subtitle', html).each(function() {
        subtitles.push($(this).text())
    })
    console.log(subtitles)
}



test()

app.listen(3000, ()=> {
    console.log("Server Started")
})