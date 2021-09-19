$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

const createTweetElement = function(tweet) {
  const $tweet = `
  <article>
          <header>
            <div class="tweet-header-left">
              <img src=${tweet.user.avatars}>
              <p class="tweet-header-name">${tweet.user.name}</p>
            </div>
            <p class="tweet-header-handle">${tweet.user.handle}</p>
          </header>
          <p class="tweet-article-content">${tweet.content.text}</p>
          <footer>
            <div class="tweet-footer-time">${timeago.format(tweet.created_at)}</div>
            <div class="tweet-footer-logo">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </article>
        `
  return $tweet;
}

const renderTweets = function (tweets) {
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $(".tweet-article").append($tweet);
  }
}

renderTweets(data);

})



