let Parser = require('rss-parser');
let parser = new Parser();

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

export  default  async () => {
    let feed = await parser.parseURL(CORS_PROXY + 'https://medium.com/feed/@Medium');
    return feed;
};
