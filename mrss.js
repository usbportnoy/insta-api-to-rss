var RSS = require('rss');

var feed = new RSS({
    title: "Feed for IG User",
    ttl: '60',
    language: 'en',
    custom_namespaces: {
        'media': 'http://search.yahoo.com/mrss'
    }
});


var newItem = function (title, link, description, pubDate, contentUrl, contentType, height, width) {
    //this pushes a new item to the feed
    feed.item({
        title: title,
        link: link,
        description: description,
        pubDate: pubDate,
        custom_elements: [
            {'media:title': title},
            {
                'media:content': {
                    _attr: {url: contentUrl, type: contentType, height: height, width: width, duration: 5}
                }
            }
        ]

    });
};

module.exports = {feed: feed, newItem: newItem};