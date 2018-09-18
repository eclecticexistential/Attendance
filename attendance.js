function randomNum(){
	return (Math.floor((Math.random())*4)+1);
}

$(document).ready(
    function(){
        $('#button').click(
            function(){
                var toAdd = $('input[name=ListItem]').val();
				var number = randomNum();
                 $('ul').append('<li>' + toAdd + ' your number is:    ' + number + '</li>');
				$('#area').value='';
            });
      
      $('input').focus(function() {
        $(this).val('');
      });
      
    }
);