
/*

Add a Status Indicator
Using the jquery functions append, empty, or prepend to add a paragraph into csSwitchStatus that indicates what colors have been chosen.


Bonus: Add a new color scheme
Use append to:
1) Insert a new li into the buttons with the id "blueButton"
2) Create a function that will turn the background to blue rgb(30,40,90) and the text colors white
3) Bind a click event to the blueButton that calls the function to turn the background blue (just like the grayButton connects to the grey color scheme function)


 */

$("#switcher").append("<li id="blueButton"></li>");


$("#grayButton").on("click",grayScheme);
$("#whiteButton").on("click",whiteScheme);
$("#blueButton").on("click",blueScheme);

function grayScheme(){
    $("body").css("background-color","gray");
    $("body").css("color","white");
    $(".csSwitchStatus p").empty();
    $(".csSwitchStatus p").append("<p>Gray</p>");



}

function whiteScheme(){
    $("body").css("background-color","white");
    $("body").css("color","black");
    $(".csSwitchStatus p").empty();
    $(".csSwitchStatus p").append("<p>White</p>");


}

function blueScheme(){
    $("body").css("background-color","blue");
    $("body").css("color","white");
    $(".csSwitchStatus p").empty();
    $(".csSwitchStatus p").append("<p>blue</p>");
