$(document).ready(function () {
  var counter = 0;
  var count = 0;
  var results;
  var randomResults;
  $('#selectName').hide();
  $('#counter').hide();
  $('#selectNameVal').hide();

  $('.select-name').click(function () {
    $('#counter').show();
    $('#selectName').hide();
    var i = setInterval(function () {
      $(".loader .loader-counter h1").html(count + "%");
      counter++;
      count++;
      if (counter == 101) {
        clearInterval(i);
        $('#counter').hide();
        counter = 0;
        count = 0;
        $('#selectName').show();
        var genterCodeVal = $('input[name="gender"]:checked').attr('data-gender');
        if (genterCodeVal == 'B') {
          results = names.filter(x =>
            x.genderCode == 'M' || x.genderCode == 'F'
          );
        } else {
          results = names.filter(x =>
            x.genderCode == genterCodeVal
          );
        }
        var randomNameObj = results[Math.floor(Math.random() * results.length)];
        $('#selectNameVal').show();
        $('#selectNameVal').text(randomNameObj.name);
      }
    }, 10);
  });

  $.each(names, function (i) {
    if (names[i].periodCode == 'NEW')
      $('.results').append('<tr class="data-table-row search-item"><td class="mean-name p-2">' + names[i].mean + ' </td><td class="main-name p-2">' + names[i].name + '</td></tr>');
  });

  $(".search-field").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $(".search-box .search-item").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  $('.search-button').click(function () {
    var genterCodeVal = $('input[name="gender2"]:checked').attr('data-gender');
    var periodCodeVal = $('input[name="poriod"]:checked').attr('data-period');
    //  if(genterCodeVal=='B'){
    //  results = names.filter( x => 
    //   x.genderCode == 'M' ||  x.genderCode == 'F' 
    //  );
    // }else
    results = names.filter(x =>
      x.genderCode == genterCodeVal && x.periodCode == periodCodeVal
    );
    $('.results').text('');
    $.each(results, function (i) {
      $('.results').append('<tr class="data-table-row search-item"><td class="mean-name p-2">' + results[i].mean + ' </td><td class="main-name p-2">' + results[i].name + '</td></tr>');
    });
  });


})
  //Get the button
  var topButton = document.getElementById("topButton");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  