import getRSS from './rss';

const root = document.getElementById('root');

const handleClickItem = (e) => {
    const link = e.target.closest('div').dataset.source;
    console.log(link);
    return link;
};

root.addEventListener('click', handleClickItem);

const newLayout = (article) => (
    `<div data-source="${article.link}" class="article">
        <h3>${article.title}</h3>
        <a href="${article.link}" target="_blank">open</a>
    </div>`
);

const renderFeed = ({items}) => {
    root.innerHTML = '';
    items.forEach(item => {
        console.log(item);
        root.innerHTML += newLayout(item);
    })
};


getRSS()
    .then((_data) => {
        renderFeed(_data);
    })
    .catch(error => console.error(error));
