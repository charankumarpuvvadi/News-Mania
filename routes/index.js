const express = require('express');
const router = express.Router();
const News = require('../models/news.model');
const scrapeFoxNews = require('../scrapers/foxNewsScraper');


router.get('/', async (req, res) => {
  const foxNewsHeadlines = await scrapeFoxNews();

  const headlines = [...foxNewsHeadlines];

  await News.insertMany(headlines);

  res.redirect('/headlines');
});

router.get('/headlines', async (req, res) => {
  const headlines = await News.find();
  res.render('index', { headlines }); 
});

module.exports = router;