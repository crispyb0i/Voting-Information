$(document).ready(function(){
  $("#form").submit(function(event){

    var age = parseInt($("#age").val());

  if (age >= 18) {
    $('#ofAge').show();
  } else {
    $('#underage').show();
  }
  event.preventDefault();
  })
});
