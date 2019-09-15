function countdown() {
    var counter = 60;
    var timeCountdown = setInterval(function(){

      counter--
      $('.timer-container .time').html(counter);
      if (counter === 0) {
        clearInterval(timeCountdown);
        $('.timer-container .time').html("Times Up");
        points();
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
    for(var i = 0; i < trivia.length; i++) {   
    
        var questionHeader = $('<h2 class="question-' + i + '">');
        var questionHeaderContent = questionHeader.text(trivia[i].question);
        $('.question-container').append(questionHeaderContent).append("<form class='choices choices-container-" + i + "' id='choices-" + i + "'>");

        for (var j = 0; j < trivia.length; j++) {
            console.log(trivia[i].choices[j]);
            var questionChoices = $('<input type="radio"' + 'name="'  + i + '"'+ 'value="' + trivia[i].choices[j] + '">' + '<label>' + trivia[i].choices[j] + '</label>');
            var questionChoicesContent = questionChoices.text(trivia[i].choices[j]);
            $('.choices-container-' + i).append(questionChoices).append(questionChoicesContent);

        }
    }  
    
}

function points() {
    var correct = 0;
    var incorrect = 0;
    $(".choices").each(function(i){
        var questionid = $(this).attr('id').split('-')[1];
        var answer = $(this).find("input:checked").val();
        if (answer == trivia[questionid].answer) {
            correct += 1;
        } else {
            incorrect += 1;
        }
    });
    $(".points-container").toggle();
    $(".points-container .correct-answers").text(correct);
    $(".points-container .incorrect-answers").text(incorrect);
}


$( document ).ready(function() {
    $('.start-button').on('click', function() {
        $(this).toggle();
        countdown();
        triviaQuestions();
    });
    
});
