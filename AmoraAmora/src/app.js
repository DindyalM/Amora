//create csv
import axios from 'axios';

async function getData() {
  try {
    const response = await axios.get(
      'https://www.reddit.com/r/programming.json'
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getData();
