  	let questions = ['What is the DOM?','What is Javascript?','What is a method?', 'What is an arrow function'];
    let answerSet = [['questionset1','wow','hero','hike'],['questionset2','show','answer3','answer4'], ['questionset3','death','answer3','answer4'],['questionset4','silence','answer3','answer4']];
   
    let correctAnswers = ['answer1','answer2','answer3','answer4'];
  	let arrayOfAnswer = [];
    let score = 0;
    let i = 0;
    let render = function (template, node) {
      node.innerHTML = template;
    };
    //rendering question 1
  	render(questions[0],document.querySelector('#mainquestion'));
    
    for(let k = 0; k < answerSet[0].length; k++) {
    render(answerSet[0][k],document.querySelector('#one' + k));
    }
    
      //button onClick
  	  $('#btn').on('click', function() {
            

            answer =  
              $('input[name=question]:checked', 
                '#questionaire').val(); 
            arrayOfAnswer.push(answer); 
         render(questions[i],document.querySelector('#mainquestion'));

      for(let j = 0; j < answerSet[i].length; j++) {
        render(answerSet[i][j],document.querySelector('#one' + j));
      }
    
            console.log(arrayOfAnswer);
   
              i++;
              if(arrayOfAnswer.length === 4) {
                for(let x= 0; x< 4; x++ ){
                  if(correctAnswers[x]===arrayOfAnswer[x]){
                    score++  
                  }
                }

              alert('nice bro you are a genious you got ' +score)
              return;
              } 
        })
       
	   // if(answer) {
	   	
	   // }
  	
