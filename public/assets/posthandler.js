$(document).ready(function () {
  

  $('form').on('submit', function () {
    var item = $('form input');
    var todo =  {item :"hello baraka"};

    console.log(todo , item)

    /*$.ajax({
      type : 'POST',
      url : '/todo',
      data : todo,
      success : function (data) {
        location.reload();
      }
      
    })*/

  })


})