//BACK-END LOGIC




//FRONT-END LOGIC
$(document).ready(function() {
  $("#survey").submit(function(event) {


    var question1Input = $("#question1").val();
    var question2Input = $("#question2").val();
    var question3Input = $("#question3").val();
    var question4Input = $("#question4").val();
    var question5Input = $("#question5").val();

    $(".question1").text(question1Input);
    $(".question2").text(question2Input);
    $(".question3").text(question3Input);
    $(".question4").text(question4Input);
    $(".question5").text(question5Input);


    var suggestion = question1Input + " and " + question5Input;

    $("#output").text(suggestion);

    event.preventDefault();
  });
});
