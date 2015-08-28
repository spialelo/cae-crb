function splitTab (){


var textLines = new Array();
var wordsFromLines = new Array ();


var inputInit = document.getElementById('text_1').value;

/*split at tab works*/
//var splitTabSpace =  inputInit.split('\t');


/*split at newline works*/
var splitNewLine = inputInit.split(/\r\n|\r|\n/g);




//textLines.push('No input received.');
//textLines.push(splitNewLine[0]);

for(var i=0; i < splitNewLine.length; i++){

textLines.push(splitNewLine[i]);





/*for (var j=0; j<textLines[i].length; j++){

	wordsFromLines.push([textLines[i].split(/\t/g)][j]);
}
*/

}

for(var j=0; j < textLines.length; j++){

wordsFromLines.push(textLines[j].split(/\t/g));





/*for (var j=0; j<textLines[i].length; j++){

	wordsFromLines.push([textLines[i].split(/\t/g)][j]);
}
*/

}






document.getElementById('newSplit').style.width = 'auto';
document.getElementById('newSplit').style.height = 'auto';


/*Printed out the new lines*/
/*document.getElementById('newSplit').innerHTML = "Length of words split on tab: " + splitTabSpace.length + "&nbsp;Length of words split on newline: " + splitNewLine.length; + "<br>" + textLines[0];*/

document.getElementById('newSplit').innerHTML = "Length of words split of lines: " + splitNewLine.length +"<br> #"+ textLines.length + "<br> The last line: " +textLines [textLines.length-1] + "<br><br>" + wordsFromLines[0]+ "<br>" + wordsFromLines[[0][0]];


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