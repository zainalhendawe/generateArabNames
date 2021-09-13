$(document).ready(function(){
    var counter = 0;
    var count = 0;
    var results;
    var randomResults;
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
              if($('#boy').is(':checked')){
                results = names.filter( x => 
                  x.genderCode == 'M'  
                );
              }
              if($('#girl').is(':checked')){
                results = names.filter( x => 
                  x.genderCode == 'F'  
                );
              }
              if($('#both').is(':checked')){
                results = names.filter( x => 
                  x.genderCode == 'M' ||  x.genderCode == 'F'
                );
              }
              var randomNameObj = results[Math.floor(Math.random() * results.length)];
              $('#selectNameVal').show();
              $('#selectNameVal').text(randomNameObj.name);
            }
          },10);
          });
         
          $.each(names, function(i) {
            $('.results').append('<tr class="data-table-row"><td class="mean-name p-2">' + names[i].mean + ' </td><td class="main-name p-2">'+ names[i].name +'</td></tr>');
          });
         
          



          $('.search-button').click(function(){
            var genterCodeVal=$('input[name="gender2"]:checked').attr('data-gender');
            var periodCodeVal=$('input[name="poriod"]:checked').attr('data-period');
          //  if(genterCodeVal=='B'){
            //  results = names.filter( x => 
             //   x.genderCode == 'M' ||  x.genderCode == 'F' 
            //  );
           // }else
            results = names.filter( x => 
              x.genderCode == genterCodeVal && x.periodCode == periodCodeVal
            );
            $('.results').text('');
            $.each(results, function(i) {
              $('.results').append('<tr class="data-table-row"><td class="mean-name p-2">' + results[i].mean + ' </td><td class="main-name p-2">'+ results[i].name +'</td></tr>');
            });
          });
            

          
    })


    