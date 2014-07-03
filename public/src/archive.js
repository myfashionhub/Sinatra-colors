function savedPalettes(data) {
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
