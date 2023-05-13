const axios = require('axios');
const cheerio = require('cheerio');
const common = require('../common/common');

module.exports = { performScraping };

async function performScraping() {
  const axiosResponse = await axios.request({
    method: "GET",
    url: 'https://wltest.dns-systems.net/',
    headers: {      
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36" 
    }
  });
  let packageResponse = {results: [], total: 0};
  let total = 0;
  const $ = cheerio.load(axiosResponse.data);
  $('#subscriptions').each((index, element) => {
        const subscriptionType = $(element).find('h2').text();
        let packages = [];
        
        $(element).find('.row-subscriptions').find('.package').each((index, element) => {
          const title = $(element).find('h3').text();
          $(element).find('.package-features ul').each((index, element) => {
            const packageName = $(element).find('.package-name').text();
            const description = $(element).find('.package-description').html();
            // let discount = $(element).find('.package-price p').html();
            // const price = $(element).find('.package-price').html().replace(discount, '');
            let price = '';
            let discount = '';
            $(element).find('.package-price').each((index, ele) => {
              const discEle = ele.childNodes.find(el => {
                return el && el?.name === 'p'
              });
              if(discEle) {
                discount = $(discEle).text();
              }
              const priceEle = ele.childNodes.filter(el => {
                return el && el?.name !== 'p'
              });
              if(priceEle) {
                price = $(priceEle).text().trim();
              }
            });            
            
            packages.push({
              "title" : title,
              "packageName": packageName,
              "description": description,
              "price": price,
              "discount": discount
            });
            
          });
        });
        packages.sort(common.compareByPrice);
        packageResponse.results.push({
          "subscriptionType": subscriptionType,
          packages
        })
        total++;
    });
    packageResponse.total = total;
  return packageResponse;
}