function unleashColors(){
  $('.next').click(function(){
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
  $('.name').html(data[0].title);

  var colorArray = data[0].colors;
  for (var i = 0; i < colorArray.length; i++) {
    var color   = colorArray[i];
    var colorLi = $('<div>').html('<span>#'+color+'</span>' )
                            .addClass('fill-color')
                            .css('background-color', '#'+color);
      $('.fill').append(colorLi);
  }
}

function displayError(){
  $('.fill-name').html('Cannot fetch colors at this time');
}

function initialPalette() {
  displayPalette([{'title': 'Beach Day', 'colors': ['FFEEB3','FFB080','FF8B42','19A698', '4DFFED']}]);
}

function savePalette() {
  var title = $('h1').html();
  var colorSpans = $('.fill').find('span');
  var colors = [];
  for (var i = 0; i < colorSpans.length; i++) {
    colors.push($(colorSpans[i]).html());
  }
  console.log(colors);

  $.ajax({
    url: '/palettes',
    method: 'post',
    dataType: 'json',
    data: { title: title, colors: colors },
    success: function(data) { console.log(data) }
  });
}



$(function(){
  initialPalette();
  unleashColors();
  $('.save').click(savePalette);
});
