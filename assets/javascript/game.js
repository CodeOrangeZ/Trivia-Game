
var panel = $('#quiz-area');


// Start and submit buttons


$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});

// =====================Questions/Answers=============================

var questions = [{
  question: "Question 1: What is the name of Arya Stark's sword?",
  answers: ["Needle", "Wolf's Bane", "Oath Breaker", "Many Faced Sword"],
  correctAnswer: "Needle"
}, {
  question: "Question 2: What animal is on House Baratheon's Sigil?",
  answers: ["Lion", "Stag", "Dragon", "Dire Wolf"],
  correctAnswer: "Stag"
}, {
  question: "Question 3: Which father legitamizes his bastard son?",
  answers: ["Eddard Stark", "Robert Baratheon", "Roose Bolton", "Tywin Lannister"],
  correctAnswer: "Roose Bolton"
}, {
  question: "Question 4: Who has Peter Baeylsh loved ever since HE was a child?",
  answers: ["Sansa Stark", "Cersei Lannister", "Lysa Arryn", "Catelyn Stark"],
  correctAnswer: "Catelyn Stark"
}, {
  question: "Question 5: What is the name of Jon Snow's Dire Wolf?",
  answers: ["Ghost", "Grey Wind", "Lady", "Shaggydogg"],
  correctAnswer: "Ghost"
}, {
  question:  "Question 6: Fill in the blank: The night is dark and full of _________. ?",
  answers: ["Darkness", "Terrors", "Dragons", "Fire"],
  correctAnswer: "Terrors"
}, {
  question: "Question 7: What does 'Khaleesi' mean?",
  answers: ["Warrior", "Queen", "Wife of the Khal", "Mother"],
  correctAnswer: "Wife of the Khal"
}, {
  question: "Question 8: How many kingdoms are there in Westeros?",
  answers: ["Seven", "Eight", "One", "Three"],
  correctAnswer: "Seven"
}];

// ==============Game Object======================================

var game = {
  correct:0,
  incorrect:0,
  counter:30,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },

  // done function checks all answers chosen against correct answer and updates score

  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

// result function reveals results

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>Winter Is Here!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};