$(document).ready(function() {
  $(".new-tweet form").submit(function(event) {
    event.preventDefault();
    let text = $("#tweet-text").val();
    console.log(text.length)
    if (text === "" || text === null) {
      alert("Input cannot be empty or null");
    } else if (text.length > 140) {
      alert("Input length cannot exceed 140")
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
    const $tweet = createTweetElement(tweets[tweets.length - 1]);
    $(".tweet-article").prepend($tweet);
  }
        
  $.get('/tweets', function(data) {
        
    setTimeout(renderTweets(data), 10000)

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