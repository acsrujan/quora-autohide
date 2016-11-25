
function hide_header_elements(){ 
var input_elements = ['Popular on Quora', 'Suggested', 'Question asked', 'Answer written', 'Undiscovered new answer', 'Question followed'];
for (var i=0; i<input_elements.length; i++) {
    $("div.EventHeader:contains('"+input_elements[i]+"')").each(function() {
         $(this).closest(".pagedlist_item").hide();
    });
}};


function hide_question_elements(){
var input_elements = ['Modi', 'Kejriwal', 'Narendra', 'Arvind', 'Aravind'];
for (var i=0; i<input_elements.length; i++) {
    $("div.QuestionText:contains('"+input_elements[i]+"')").each(function() {
         $(this).closest(".pagedlist_item").hide();
    });
}};

//on start
hide_header_elements();
hide_question_elements();

$(document).ready(function(){	
	
	//after finished loading
	hide_header_elements();
	hide_question_elements();


	//on each load
	$("#feed_visibility_wrapper").bind("DOMSubtreeModified", function() {
		hide_header_elements();
		hide_question_elements();
	});
});