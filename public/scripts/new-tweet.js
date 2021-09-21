$(document).ready(function() {

  $("#tweet-button button").hover(function() {
    $(this).css({"border-color": "#545149"})
  }, function() {
      $(this).css({"border-color": "#f4f1ec", "background-color": "#4056A1"})
  }).mousedown(function() {
    $(this).css({"background-color": "#545149"})
  }).mouseup(function() {
    $(this).css({"background-color": "#4056A1"})
  })

  $(".new-tweet form").submit(function(event) {
    event.preventDefault();
    let text = $("#tweet-text").val();
    if (text === "" || text === null) {
      $("#error-message p").text('Input cannot be empty or null');
      $("#error-message").slideDown();
    } else if (text.length > 140) {
      $("#error-message p").text('Input length cannot exceed 140');
      $("#error-message").slideDown();
    } else {
      let data = $( this ).serialize();
    $.post( "/tweets/", data, function() {
      })
        .done(function() {
          newPost();
        })
        .fail(function(xhr, status, error) {
          alert(status + ":" + error)
        })
        .always(function() {
          $("#tweet-text").val('').css("height", "56px");
          $(".counter").val(140).css("color", "#545149");
          $("#error-message").slideUp();
        });
    }

  function newPost() {
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
          <p class="tweet-article-content" id=${tweet.created_at}></p>
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
    let lastTweet = tweets[tweets.length - 1];
    const $tweet = createTweetElement(lastTweet);
    $(".tweet-article").prepend($tweet);
    $(`#${lastTweet.created_at}`).text(lastTweet.content.text);
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
  }
  })
})