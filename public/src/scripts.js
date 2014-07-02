
function setEventHandlers(){
  var buttonNew = $('.new-palettes')[0];
  $(buttonNew).click(function(){ 
    ajaxLoad('/palettes.json', displayError, displayPalettes);
  });

  var buttonPal = $('.button-palettes')[0];
  $(buttonPal).click(function(){ 
    ajaxLoad('/palettes.json', displayError, showPalettes);
  });

  var randPalette = $('.random-palette')[0];
  $(randPalette).click(function(){
    ajaxLoad('/random.json', displayError, fillPalette);
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

function showPalettes(colorPalettes) {
  $('.fill').css('padding-top', '100px');
  var palettes = $('.palettes')

  $.each(colorPalettes, function(index, colorPalette){
    var paletteButton = $('<button>').html(colorPalette.title);
    paletteButton.data('colors', colorPalette.colors);
    $('.fill').prepend(paletteButton);
    paletteButton.on('click', function(){
      var colors = paletteButton.data('colors');
      palettes.empty();
      $.each(colors, function(index, color){
        var colorDiv = $('<div>').css({
                                  'width': '100px',
                                  'height': '100px',
                                  'background-color': '#'+color,
                                  'display': 'inline-block',
                                  'margin': '10px'        
        })
        console.log(colorDiv);
        $('.palettes').append(colorDiv);
      })
    })
  })
}


function displayPalettes(data) {
  $('.fill').empty().css('padding-top', '100px');;
  $('.fill-name').empty();
  var resultArray = data;
  for (var i = 0; i < resultArray.length; i++) {
    var paletteLink = $('<a>').attr('href', resultArray[i].url).html(resultArray[i].title);  
    var paletteName = $('<p>').append(paletteLink);
    var colorUl = $('<ul>').addClass('color-list');
    colorUl.append(paletteName);
    $('.fill').append(colorUl); 

    var colorArray = resultArray[i].colors;    
    for (var j = 0; j < colorArray.length; j++) {
      var color = '#' + colorArray[j]; 
      var colorLi = $('<li>').html('<span>'+color+'</span>');
      colorLi.css('background-color', color);
      colorUl.append(colorLi); 
    }

    if (colorArray.length < 5) { 
      for (var n = 0; n < 5 - colorArray.length; n++) {
        var emptyLi = $('<li>').html('<span>&nbsp;</span>');
        colorUl.append(emptyLi);          
      }
    }    
  }
}

function fillPalette(data) {
  $('.fill').empty();
  var title = $('<h2>').html(data[0].title);
  $('.fill-name').html(title);
  
  var colorArray = data[0].colors;
  for (var i = 0; i < colorArray.length; i++) {
    var newLi = $('<div>').html('&nbsp;').addClass('fill-color').css('background-color', '#'+colorArray[i]);
      $('.fill').append(newLi);
  }
}

function displayError(){
  $('.fill-name').html('Cannot fetch color palettes at this time');  
}

$(function(){
  setEventHandlers();
});
