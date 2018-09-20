let names = [];
let csvContent = "data:text/csv;charset=utf-8,";

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
				names.push(toAdd);
				$('#area').val('');
            });
		$('#list').submit(function(e){
			$('#button').click();
			return false;
		})
      
      $('#save').click(function() {
			csvContent += names;
			window.open(csvContent);
      });
    }
);