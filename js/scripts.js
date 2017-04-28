//BACK-END LOGIC

var calculateSuggestions = function(question1Input, question2Input, question3Input, question4Input, question5Input) {
  var scoreCSharp = scoreJavaDroid = scoreRuby = scoreCSS = scorePHP = 0;
  var bestChoice = "";
  //Calculate a score for each course
    if (question1Input === "1") {       scoreCSharp++; scoreJavaDroid++; }
    if (question1Input === "2") {       scoreCSharp++; }
    if (question1Input === "3") {       scoreRuby++; scorePHP++; scoreJavaDroid++; scoreCSS++;}
    if (question1Input === "4") {       scoreJavaDroid++; }

    if (question2Input === "1") {       scoreRuby++; scoreCSS++; }
    if (question2Input === "2") {       scorePHP++; scoreCSS++; }
    if (question2Input === "3") {       scoreCSharp++; }

    if (question3Input === ("1" || "2")) {       scoreCSS++; scorePHP++; scoreRuby++; }
    if (question3Input === "3") {       scoreCSharp++; }

    if (question4Input === ("1" || "2")) {       scorePHP++; scoreCSS++; scoreCSharp++; scoreJavaDroid++; }
    if (question4Input === ("3" || "4")) {       scoreRuby++; }

    if (question5Input === ("1" || "2")) {       scorePHP++; scoreCSS++; scoreCSharp++; scoreJavaDroid++; }
    if (question5Input === "3") {       scoreRuby++; scorePHP++; scoreCSS++; scoreJavaDroid++; }
    if (question5Input === "4") {       scoreRuby++; scorePHP++; scoreCSS++; scoreJavaDroid++; scoreCSharp++;}


//This is pretty faulty logic, but instructions say simple logic is OK
//Determine bestChoice, a group of 4 tracks
    if ( scoreCSharp === Math.min(scoreCSharp, scoreRuby, scoreJavaDroid, scoreCSS, scorePHP) ) {
        bestChoice = "Ruby, Java, CSS, or PHP." }
    else if ( scoreCSS === Math.min(scoreCSharp, scoreRuby, scoreJavaDroid, scoreCSS, scorePHP) ) {
            bestChoice = "Ruby, Java, C#, or PHP." }
    else if ( scorePHP === Math.min(scoreCSharp, scoreRuby, scoreJavaDroid, scoreCSS, scorePHP) ) {
            bestChoice = "Ruby, Java, CSS, or C#." }
    else if ( scoreRuby === Math.min(scoreCSharp, scoreRuby, scoreJavaDroid, scoreCSS, scorePHP) ) {
            bestChoice = "C#, Java, CSS, or PHP." }
    else { bestChoice = "C#, Ruby, CSS, or PHP." }
  return bestChoice;
};


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
    console.log(response);
    var finalizedResponse = "Based on your choices, you should consider Epicodus's tracks in " + response ;
    $("p").click(function(){
      $("#output").text(finalizedResponse);
      $(".results-showing").toggle();
      $(".results-hidden").toggle();
    });
  });
});
