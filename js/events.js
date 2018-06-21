//define functions here
function getIt() {
  $('p').on('click', function() {
    alert('Hey!');
  });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $('input').on('keydown', function() {
    if (key.which == 13){
    alert('enter was pressed');
  })
}

$(document).ready(function(){

// call functions here
getIt();
frameIt();

});

