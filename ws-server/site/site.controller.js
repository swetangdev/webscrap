const express = require('express');
const router = express.Router();
const siteService = require('./site.service');

router.get('/', getPlans);

module.exports = router;

function getPlans(req, res, next) {
    siteService.performScraping()
        .then(packages => res.json(packages))
        .catch(next);
}
