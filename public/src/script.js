function unleashColors(){
  $('.next-palette').click(function(){
    ajaxLoad('/random.json', displayError, displayPalette);
  });
}

function ajaxLoad(url, errorCallback, successCallback){
  $.ajax({
    url: url,
    dataType: 'json',
    error: errorCallback,
    success: successCallback
  })
}

function displayPalette(data) {
  $('.fill').empty();
  var title = $('<h2>').html(data[0].title);
  $('.fill-name').html(title);

  var colorArray = data[0].colors;
  for (var i = 0; i < colorArray.length; i++) {
    var color   = colorArray[i];
    var colorLi = $('<div>').html('<span>'+color+'</span>' )
                            .addClass('fill-color')
                            .css('background-color', '#'+color);
      $('.fill').append(colorLi);
  }
}

function displayError(){
  $('.fill-name').html('Cannot fetch color palette at this time');
}

$(function(){
  unleashColors();
});
