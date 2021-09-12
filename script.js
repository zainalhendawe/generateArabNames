$(document).ready(function(){
    var counter = 0;
    var count = 0;
    $('#selectName').hide();
    $('#counter').hide();
    $('#selectNameVal').hide();

    $('.select-name').click(function(){
        $('#counter').show();
        $('#selectName').hide();
        var i = setInterval(function(){
            $(".loader .loader-counter h1").html(count + "%");
            counter++;
            count++;
            if(counter == 101){
              clearInterval(i);
              $('#counter').hide();
              counter=0;
              count = 0;
              $('#selectName').show();
              var randomNameObj = names[Math.floor(Math.random() * names.length)];
              $('#selectNameVal').show();
              $('#selectNameVal').text(randomNameObj.name);
            }
          },10);
         
          });
         
          $.each(names, function(i) {
            $('.results').append('<li class="main-name"><span>' + names[i].name + ' </span><span class="mean-name">'+ names[i].mean +'</span></li>');
          });
    })


    