$(document).ready(function(){
    var counter = 0;
    var count = 0;
    $('#selectName').hide();
    $('#counter').hide();

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
            }
          },10);
         
          });
         
    })


    