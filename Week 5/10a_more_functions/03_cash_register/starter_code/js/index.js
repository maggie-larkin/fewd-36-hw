jQuery( document ).ready(function() {
/*
Query( document ).ready(function() {

 Some useful javascript functions and methods that can be used to build this.

 event.preventDefault();
 parseFloat()
 toFixed()
 jQuery().append();
 jQuery().val();
 jQuery().submit();


 */

// Prevent form submission
// When the user submits the form, run the `enter` function
jQuery("#entry").submit(function(event) {
      event.preventDefault(); 
      enter();
  });


// total willstore the running total, starting at 0

// Set up variables to use
// Read the user input
// Convert to decimal

var runningTotal = 0;


// `enter()` reads the user's input, and updates the receipt
function enter () {
    var result = "";
    var input = jQuery("#newEntry").val();
    input = parseFloat(input);

    runningTotal=runningTotal+input;

    jQuery("#total").text(formatCurrency(runningTotal));
    jQuery("#entries").append("<tr><td></td><td>"+formatCurrency(input)+"</td></tr>");
    jQuery("#newEntry").val("");

}

    // Convert to currency

    // Add line item to table

    // Update the running total

    // Print the updated total with proper currency formatting

    // Clear out the input field, ready for next value


// Use this to convert a number to U.S. currency format
function formatCurrency(number) {
var output = "$"+parseFloat(number).toFixed(2);
return output;


}

    // Convert the number to decimal

    // Round to 2 decimal places

    // Add the $ before the number

    // Send back the result

});
