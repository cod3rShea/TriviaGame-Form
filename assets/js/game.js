
// create countdown function

function countdown() {
    var counter = 60;
    var timeCountdown = setInterval(function(){

      counter--
      $('.timer-container .time').html(counter);
      if (counter === 0) {
        clearInterval(timeCountdown);
        $('.timer-container .time').html("Times Up");
      }
    }, 1000);

    $('.timer-container').toggle();
}


    let trivia = [
        {
            question: "How many wheels are on a skateboard?",
            choices: ["2",  "4", "6", "8"],
            answer: "2",
        },
        {
            question: "Who invented the kickflip?",
            choices: ["Tony Hawk", "Bam Magera", "Rodney Mullen", "Chad Muska"],
            answer: "Rodney Mullen"
        },
        {
            question: "Who did the first 900?",
            choices: ["Tony Hawk", "Tas Pappas", "Danny Way", "bob burnquist"],
            answer: "Tony Hawk",
        },
        {
            question: "What is another word for a 360 flip?",
            choices: ["Impossible Flip", "3 1/2 flip", "Tre Bomb", "Tri Flip"],
            answer: "Tre Bomb",
        }
    ];


function triviaQuestions() {
    for(i= 0; i < trivia.length; i++) {        
        var questionHeader = $('<h2 class="test">');
        var questionHeaderContent = questionHeader.text(trivia[i].question);
        $('.question-container').append(questionHeaderContent);
        console.log(trivia[i].choices[i]);
      }

      
}

function trivaChoices() {
 
    trivia .forEach(function (outerObj) {
        Object.keys(outerObj).forEach(function (key) {
          outerObj[key].forEach(function (item) {
            console.log(item);
          });
        });
      });
}

$( document ).ready(function() {
    $('.start-button').on('click', function() {
        $(this).toggle();
        countdown();
        triviaQuestions();
        trivaChoices();
        
    });


   
    
});
