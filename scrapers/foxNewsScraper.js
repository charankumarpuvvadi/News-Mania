const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeFoxNews() {
    const url = 'https://www.foxnews.com';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const headlines = [];

    $('.title a').each((index, element) => {
        const title = $(element).text().trim();
        const url = $(element).attr('href');
        if (title && url) {
            headlines.push({ title, url, source: 'Fox News' });
        }
    });

    return headlines;
}

module.exports = scrapeFoxNews;