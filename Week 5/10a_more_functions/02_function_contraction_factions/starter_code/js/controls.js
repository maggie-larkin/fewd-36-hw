

// This function will get the values of the two word forms, pass them to the compare function the update the display output

function conjunctionFormChecking(){

    // Create output variables
    var contractionFound = "";
    var logEntry = "";

    // Get words from search forms
    var firstWord = jQuery("#firstWord").val();
    var secondWord = jQuery("#secondWord").val();

    // Create phrase to test by combining wordOne and wordTwo with a space

    var combined = firstWord+" "+secondWord
    var reverseCombined = secondWord+" "+firstWord

        // Test phrase
    var results = checkForConjunction(combined);

        // if Test Phrase returns false search phrase with words in reverse order
        if(results==false){
        results = checkForConjunction(reverseCombined);

        }
    

    // If return is true
        if(results !=false) {
    // Set the output variable to the result
            contractionFound = results;
    // Set the log variable to wordOne wordTwo and the contraction
            logEntry ="<p>"+combined+": "+results+"</p>";
        }


    // If return is false
         else{
     // Set the output variable to "None Found"
            contractionFound = "None Found";
    // Set the log variable to wordOne wordTwo and no contraction wrapped in paragraph tags
            logEntry = "<p>"+combined+"</p>";
         }      

            


        // Update contractionResult
        jQuery("#contractionResult").text(contractionFound);

        // Add wordOne + wordTwo + result to log
        jQuery(".playAreaResultsLog").append(logEntry);


        // Empty wordOne
        jQuery("#firstWord").val("");

        // Empty wordTwo
        jQuery("#secondWord").val("");


} // end conjunctionFormChecking





function resetAllForms(){

    // Empty Result
    jQuery("#contractionResult").empty();

    // Empty wordOne
    jQuery("#firstWord").val("");

    // Empty wordTwo
    jQuery("#secondWord").val("");

    // Empty the log
    jQuery(".playAreaResultsLog").empty();

} // resetAllForms




jQuery( document ).ready(function() {

        // Bind conjunctionFormChecking to button

jQuery("#btnCheckConjunction").click(function(event) {
      event.preventDefault(); 
      conjunctionFormChecking();
  });


        // Bind reset to button

jQuery("#btnReset").click(function(event) {
      event.preventDefault(); 
      resetAllForms();
  });






});