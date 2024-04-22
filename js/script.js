$('#quote').click(function() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=jsonp&jsonp=?")
  .done(update)
  .fail(handleErr);
});

let i = 0;
function update(response) {

    const Text = response.quoteText
    const Author = response.quoteAuthor

    $('.quote:first-child').before(
      `<div class="quote"><div class="quote-text1">${Text}</div>${
        Author &&
        `<div class="quote-autor1">© <span>${Author}</span>`
      }</div></div>`,
    )

    i++;
    if(i == 4) {
      $('.quote').empty();
      i = 0;
    }
    if ($('.quote').length > 1) {
      $('.quote:last-child').hide()
    } 

}

function handleErr(jqxhr, textStatus, err) {
  alert("Request Failed: " + textStatus + ", " + err);
}

