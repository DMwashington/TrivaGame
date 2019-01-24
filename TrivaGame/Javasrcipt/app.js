var triviaQuestions = [
    {
        Q: "When was Goku first sent to Earth?",
        correctA: "As a baby",
        A: ["As a baby", "As a kid", "As a teen", "As an adult"]
    },
    {
        Q: "What planet are the Saiyans from?",
        correctA: "Planet Vegeta",
        A: ["King Kai's Planet", "Planet Namek", "Planet Vegeta", "Planet Earth"]
    },
    {
        Q: "How old was Goku when Gohan was born?",
        correctA: "20 years old",
        A: ["19 years old", "20 years old", "22 years old", "25 years old"]
    },
    {
        Q: "Who is Goku's greatest enemy?",
        correctA: "Frieza",
        A: ["Broly", "Vegeta", "Cell", "Frieza"]
    },
    {
        Q: "What is Vegata's daughter's name?",
        correctA: "Bulla",
        A: ["Bulla", "Pan", "Videl", "Chi-Chi"]
    },
    {
        Q: "Who was the first on to reach Super Saiyan 2?",
        correctA: "Gohan",
        A: ["Goku", "Trunks", "Vegeta", "Gohan"]
    },
    {
        Q: "Who is the strongest Saiyan?",
        correctA: "Broly",
        A: ["Vegeta", "Broly", "Gohan", "Goku"]
    },
    {
        Q: "What is the name of Goku's father?",
        correctA: "Bardock",
        A: ["King Cole", "Bardock", "Radtiz", "Napa"]
    },
    {
        Q: "How many Dragonballz do you need to make a wish?",
        correctA: "7",
        A: ["8", "5", "6", "7"]
    },
    {
        Q: "What two characters make up Vegito?",
        correctA: "Goku and Vegeta",
        A: ["Goku and Gohan", "Vegeta and Gohan", "Vegeta and Trunks", "Goku and Vegeta"],
    },
]


var score = 0;
var userAnswer = "";
var q = 0;
var intervalId;
var time;
var intervalId2;
var time2;

for (var i = 0; i < triviaQuestions.length; i++) {
    console.log((i + 1) + ": " + triviaQuestions[i].correctA);
}


function gameOver() {
    $("#btn-start").text("Play Again?")
    $("#btn-start").show();
    $("#empty-div").html("You Scored " + score + " out of 10!")
    $("#trivia-questions").hide();
    clearInterval(intervalId);
    $("#timer").hide();
}


function printQA() {
    if (q == triviaQuestions.length) {
        gameOver();
    }
    else {
        $("#trivia-questions").text(triviaQuestions[q].Q);

        $("#trivia-answers").empty();
        for (var i = 0; i < triviaQuestions[q].A.length; i++) {
            var button = $("<button>");
            button.text(triviaQuestions[q].A[i]);
            button.attr("answer", triviaQuestions[q].A[i]);
            var a = $(button).attr("answer");
            button.addClass("answers-btn");
            $("#trivia-answers").append(button);
        }
        
        timer();
        $("#timer").show();

        $(".answers-btn").on("click", function () {
            userAnswer = $(this).attr("answer");
            trackScore();
        })
    }
}

function trackScore() {
    if (userAnswer === triviaQuestions[q].correctA) {
        userYay();
    }
    else {
        userWrong();
    }
}

function userYay() {
    score ++;
    $("#trivia-answers").append("Correct!!!" + "<br>" + "Score: " + score);
    endOfQuestion();
}
  
function userWrong() {
    endOfQuestion();
    $("#trivia-answers").html("Incorrect!" + "<br>" + "Correct Answer: " + triviaQuestions[q-1].correctA);
}

function endOfQuestion() {
    $("#trivia-answers").empty();
    q++;
    clearInterval(intervalId);
    $("#timer").hide();
    timer2();
}

function timer() {
    time = 21;
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
};

function decrement() {
    time--;
    $("#timer").html(time + " Seconds Remaining");
    if (time === 0) {
        userWrong();
        q++;
        printQA();
    };
};

function timer2() {
    time2 = 3;
    clearInterval(intervalId2);
    intervalId2 = setInterval(decrement2, 1000);
};

function decrement2() {
    time2--;
    if (time2 === 0) {
        $("#trivia-answers").empty();
        printQA();
    };
};

$("#btn-start").on('click', function () {
    q = 0;
    printQA();
    $("#btn-start").hide();
})

