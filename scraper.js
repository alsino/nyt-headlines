// Import request to make HTTP requests
// Import fs to save images to disk
// Import chalk to highlight terminal output

import fs from 'fs'
import chalk from 'chalk'
import axios from 'axios';
import cheerio from 'cheerio';


console.log("hello")

// Define base URL
const baseURL = `https://www.nytimes.com/`;

getWebsiteContent(baseURL)

async function getWebsiteContent(url) {
  try {
    const response = await axios.get(url)
    const $ = cheerio.load(response.data)

  
  
    const body = $('body');
    // const content = body.find('.story-wrapper').find('>a').find('>h3').text()

    // const content = body.find('.story-wrapper').find('a').find('h3').text()

     const content = body.find('.story-wrapper').find('a').find('h3').find('.balancedHeadline').text()

  

    // const content = body.find('.story-wrapper').find('a').find('h3').find('span.balancedHeadline').find('a').find('h3').find('span.ghost').text()


  //  div.story-wrapper > a > h3 > span.balancedHeadline > a > h3 > span.ghost




    console.log(content)   
    

    // const table = $('table');
    // const tableBody = table.find('tbody');
    // const tableRow = tableBody.find('tr');

      // Scrape each row in table
      // tableRow.each((i, el) => {
      //   const item = $(el)
      //   let incidentLink = item.find('td').eq(6).find('ul').find('li').eq(0).find('a').attr('href');
      //   let incidentURL = `${baseURL}${incidentLink}`;
      //   console.log(chalk.yellow(`Getting page ${incidentURL}`));

      //   // Get URLs
      //   results.urls.push(incidentURL);
           
      // })   


  } catch (error) {
    console.error(error)
  }
}

// // Define scraping function for each image at URL
// const getImage = async (url, filename) => {
//   try {
//     request.get({
//         url: url,
//       })
//       .on("error", function (error) {
//         console.log(error);
//       })
//       .on('response', function (res) {
//         res.pipe(fs.createWriteStream(`images/${filename}.` + res.headers['content-type'].split('/')[1]));
//         console.log(chalk.yellow(`Image downloaded: ${filename}`));
//       });

//   } catch (error) {
//     console.error(error)
//     console.error(chalk.red(`Error at: ${url}`))
//   }
// }

// // Scrape images from all URLs
// for (let i = paintingNoStart; i < paintingNoEnd; i++) {
//   baseURL = `https://www.twoinchbrush.com/images/painting${paintingNoStart}.png`;
//   let filename = `image${paintingNoStart}`
//   getImage(baseURL, filename);
//   paintingNoStart++;
// }