/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'How much of Australia’s population lives on the coast',
      o: ['25%', '45%', '65%', '85%'],
      a: 3,
    },
    {
      q: 'How many people live in Melbourne',
      o: ['3151000', '4151000', '5151000', '6151000'],
      a: 2,
    },
    {
      q: 'What was the first national park in Australia',
      o: ['Royal National Park', 'Lamington National Park', 'The Grampians National Park', 'Springbrook National Park'],
      a: 0,
    },
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      
      for (let i = 0; i < 4; i++) {
        
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`; // id of li element(option)
        let r = `radio_${index}_${i}`; //id of input(checked or not)
        liElement = document.querySelector('#' + li);// find the li option
        radioElement = document.querySelector('#' + r);//find the input id=r
        if (quizItem.a == i) {

          //change background color of li element here
          liElement.style.backgroundColor = "lightblue"
         
        }
        if (radioElement.checked) {

          // code for task 1 goes here
          if(quizItem.a==i)
          score++;
        }
      }
      
    });
    return document.querySelector('#score').textContent = `Your score is ${score}`;
  };
  

  
  // call the displayQuiz function
  displayQuiz();

  // Add an Event listener for the submit button
  const checkSubmit = document.querySelector('#btnSubmit');
  checkSubmit.addEventListener('click', calculateScore
  );

  //reset quiz

  const resetQuiz = document.querySelector('#btnReset');
  resetQuiz.addEventListener('click', ()=>{
    
  displayQuiz();
  document.querySelector('#score').textContent = '';

  })

  //add timer

  startTimer = (minute, second) => {


      timerInterval = setInterval(function () {
          if (second == 0) {
              if (minute === 0) {
                  clearInterval(timerInterval);
                  alert("Time is up!");
              }
              minute--;
              second = 60;
          }
          second--;
          document.querySelector('#time').textContent= `${minute}: ${second}`
      }, 1000);};

  const timer = document.querySelector("#btnStart");
   timer.addEventListener('click',()=>{
    let minute = 1;
    let second = 0;
    startTimer(minute, second);
   } );



 

});

