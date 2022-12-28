//create csv
// import axios from 'axios';

// async function getData() {
//   try {
//     const response = await axios.get(
//       'https://www.fashionnova.com/collections/dresses',
//       { timeout: 2000 }
//     );
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData();
import axios from 'axios';
import cheerio from 'cheerio';

const getPostTitles = async () => {
  try {
    const { data } = await axios.get('https://old.reddit.com/r/programming/');
    const $ = cheerio.load(data);
    const postTitles = [];

    $('div > p.title > a').each((_idx, el) => {
      const postTitle = $(el).text();
      postTitles.push(postTitle);
    });

    return postTitles;
  } catch (error) {
    throw error;
  }
};

getPostTitles().then((postTitles) => console.log(postTitles));
