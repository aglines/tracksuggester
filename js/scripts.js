//BACK-END LOGIC
// QUESTION WEIGHTS
// Q1: // 1 = C#, java,// 2 = c#// 3 = ruby, php, java, css// 4 = java/android
// Q2: // 1 = ruby, css ;  2 = php, css  ;  3 = c#
// Q3 = 1 = css, php, ruby ; 2 = css, php, ruby  ; 3 = c#
// Q4 = 1,2  = same as large company things ; 3,4: same as small comp things
// Q5 = 1&2 =C3, java, php, css ; ; 3=ruby,php,javadroid,css ; 4 = all

var calculateSuggestions = function(question1Input, question2Input, question3Input, question4Input, question5Input) {
  var scoreCSharp = scoreJavaDroid = scoreRuby = scoreCSS = scorePHP = 0;

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

    console.log(scoreCSS, scorePHP, scoreRuby, scoreCSharp, scoreJavaDroid);

// tabulate scores, which are highest 3? Find lowest, exclude taht one
// tabulate which is lowest score; return values of high 3 scores



    bestChoice = Math.max(scoreCSS, scoreCSharp, scoreRuby, scoreJavaDroid, scorePHP);
    // console.log(nameof(scoreCSS));
    worstChoice = Math.min(scoreCSS, scoreCSharp, scoreRuby, scoreJavaDroid, scorePHP);
    console.log(bestChoice, worstChoice);

  return bestChoice;
};

// RUBY/RAILS
// startup small companies only; front end  ;  // website interactive
// PHP/DRUPAL // content mgmt - front end sounds like
// no interaction website  ;  // large and small companies
// JAVA/ANDROID  // mobile  // front end and back end  // large and small companies
// CSS/DESIGN  // meh.  designey stuff  // idk.  .large and small
// C#/.NET - // large compnesi  // back end stuff

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
