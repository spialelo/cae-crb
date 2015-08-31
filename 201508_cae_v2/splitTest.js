function splitTab (){


var textLines = new Array();
var wordsFromLines = new Array ();


var inputURL = document.getElementById('text_1').value;
var inputTopic = document.getElementById('text_2').value;
var inputTitle = document.getElementById('text_3').value;
var inputTeaser = document.getElementById('text_4').value;
var inputCitation = document.getElementById('text_5').value;


/*split at tab works*/
//var splitTabSpace =  inputInit.split('\t');


var cleanURL = inputURL.replace(/\r\n|\r|\n/g, '$-$<br>').split('$-$');
var cleanTopic = inputTopic.replace(/\r\n|\r|\n/g, '$-$<br>').split('$-$');
var cleanTitle = inputTitle.replace(/\r\n|\r|\n/g, '$-$<br>').split('$-$');
var cleanTeaser = inputTeaser.replace(/\r\n|\r|\n/g, '$-$<br>').split('$-$');
var cleanCitation = inputCitation.replace(/\r\n|\r|\n/g, '$-$<br>').split('$-$');




document.getElementById('newSplit').style.width = 'auto';
document.getElementById('newSplit').style.height = 'auto';


/*Printed out the new lines*/
/*document.getElementById('newSplit').innerHTML = "Length of words split on tab: " + splitTabSpace.length + "&nbsp;Length of words split on newline: " + splitNewLine.length; + "<br>" + textLines[0];*/

document.getElementById('newSplit').innerHTML =  cleanURL[0] + "<br><br>" + cleanTopic[0] + "<br><br>" + cleanTitle + "<br><br>" + cleanTeaser + "<br><br>" + cleanCitation ;


};



function eraseDiv() {


/*Reset the display area to an empty square.*/
document.getElementById('newSplit').innerHTML = " ";


/*Reset form values.*/
document.getElementById('split_form').reset();	

/*Reset the display area size to the original values.*/
document.getElementById('newSplit').style.width = "600px";
document.getElementById('newSplit').style.height = "400px";

};