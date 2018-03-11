$(document).ready(function() {
  var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
  $.getJSON(url, function(data) {
    let currentQuote;
    let quotes = data.hits;

    $('.read').on('click', function() {
      currentQuote = quotes[parseInt(Math.random() * quotes.length)];
      $('.articleName').html(`<a href="${currentQuote.url}">${currentQuote.title}</a>`);
      $('.quoteAuthor').text(currentQuote.author);
      $('.read').text('Show Me Another');
      $('.tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text= ' + currentQuote.title + currentQuote.author).attr('target', '_blank').attr('disabled', false);
    });
  });
});

// const showMe = document.querySelector('.btn btn-success read');
// const tweet = document.querySelector('.tweet');
//
// function displayNews() {
//   $()
// }
//
// function tweetNews() {
//   console.log('tweetNews');
// }
//
//
// showMe.addEventListener('click', displayNews);
// tweet.addEventListener('click', tweetNews);
