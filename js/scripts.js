//BACK-END LOGIC
// show three suggestions
// don't have to use a lot of logic
// can even ignore user input

var calculateSuggestions = function(question1Input, question2Input, question3Input, question4Input, question5Input){


  console.log(question1Input);

if (question1Input === true) { return question1Input; }
};


var response = "Your suggested course tracks are: ";
// suggestion1
// suggestion2
// suggestion3



//FRONT-END LOGIC
$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();

    var question1Input = $("#question1").val();
    var question2Input = $("#question2").val();
    var question3Input = $("#question3").val();
    var question4Input = $("#question4").val();
    var question5Input = $("#question5").val();

    var response = calculateSuggestions(question1Input, question2Input, question3Input, question4Input, question5Input);
    // console.log(response);
    $("#output").text(response);



  });
});
