const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://scale.com/'

axios(url).then( response => {
    // console.log(response.data);
    const html = response.data;
    const $ = cheerio.load(response);
    const icons = []
    $('.logo-grid_logoImg__Gk3Lt', html).each(function () {
        const name = $(this).attr('alt');
        // const name = $(this).text();
        icons.push(name)
    })
    console.log(icons)
}).catch(err => console.log(`error while scraping ${url}`))

console.log('Simple scraper running...')