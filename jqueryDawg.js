  	let totalAnswers = [];
  	let arrayOfAnswer = [];
  	$('#btn').on('click', function() { 
            answer =  
              $('input[name=question]:checked', 
                '#questionaire').val(); 
            
            console.log(answer) 
        })