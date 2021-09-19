$(document).ready(function() {

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
  for (let i = tweets.length - 1; i >= 0; i--) {
    const $tweet = createTweetElement(tweets[i]);
    $(".tweet-article").append($tweet);
  }
}

$.get('/tweets', function(data) {

  renderTweets(data);

  $(".tweet-article article").hover(function() {
    $(this).css("box-shadow", "5px 5px rgb(142, 164, 172)");
  }, function() {
    $(this).css("box-shadow", "none");
  })

  $(".tweet-article i").hover(function() {
    $(this).css("color", "rgb(158, 117, 14)");
  }, function() {
    $(this).css("color", "rgb(45, 19, 68)");
  })

})

})
