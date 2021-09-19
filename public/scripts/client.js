$(document).ready(function() {

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

const createTweetElement = function(tweetData) {
  const $tweet = `
  <article>
          <header>
            <div class="tweet-header-left">
              <img src=${tweetData.user.avatars}>
              <p class="tweet-header-name">${tweetData.user.name}</p>
            </div>
            <p class="tweet-header-handle">${tweetData.user.handle}</p>
          </header>
          <p class="tweet-article-content">${tweetData.content.text}</p>
          <footer>
            <div class="tweet-footer-time">${tweetData.created_at}</div>
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

const $tweet = createTweetElement(tweetData);

$('.tweet-article').append($tweet);

})



