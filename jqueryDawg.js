let questions = ['What is the DOM?', 
'What is js?', 
'What is a method?', 
'What is an arrow function'];
let answerSet = [['DocumentObjectModel', '1', '1', '1'], 
['Javascript', '2', '2', '2'], 
['a object function', '3', '3', '3'], 
['4', '4', '4', 'es6 syntax for function']];

let correctAnswers = ["answer1","answer1","answer1","answer4" ];
let arrayOfAnswer = [];
let score = 0;
let i = 0;
let render = function (template, node) {
  node.innerHTML = template;
};
//rendering question 1
render(questions[0], document.querySelector('#mainquestion'));
//rendering answers
for (let k = 0; k < answerSet[0].length; k++) {
  render(answerSet[0][k], document.querySelector('#answ' + k));
}

//button onClick
$('#btn').on('click', function () {
  //push the selected answer to the array
  answer = $('input[name=question]:checked','#questionaire').val(); 
  arrayOfAnswer.push(answer);

  //check if you reach the end render score
  if (i === 3) {
    for (let x = 0; x < 4; x++) {
      if (correctAnswers[x] === arrayOfAnswer[x]) {
        score++
      }
    }
    //changed the alert to cahange the questionaire node to score string
    document.getElementById("questionaire").innerHTML = 'Your Score is ' + score;
    return;
  }else{
    //else render the next answer/quetion also remember to raise the counter
    i++;
    render(questions[i], document.querySelector('#mainquestion'));
    for (let j = 0; j < answerSet[i].length; j++) {
      render(answerSet[i][j], document.querySelector('#answ' + j));
    }
  }
})

