function workCAE () {

var inputSpec = document.getElementById('specialty').value;
var topic = document.getElementById('topic').value; 


var hdrSpec;


switch(inputSpec) {
    case 2900:
        hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_rheu.gif";
        document.getElementById("hdrImage").src = "hdrSpec";
        break;
    case 1100:
         hdrSpec = "http://";
        break;
 case 1300:
         hdrSpec = "http://";
        break;

 case 1400:
        hdrSpec = "http://";
        break;
    default:
        hdrSpec = "http://generic";
        break;
}





var caeURL_1 = document.getElementById('url_1').value;
var caeTITLE_1 = document.getElementById('title_1').value;
var caeTEASER_1 = document.getElementById('teaser_1').value;
var caeCITATION_1 = document.getElementById('citation_1').value;

var caeURL_2 = document.getElementById('url_2').value;
var caeTITLE_2 = document.getElementById('title_2').value;
var caeTEASER_2 = document.getElementById('teaser_2').value;
var caeCITATION_2 = document.getElementById('citation_2').value;

var caeURL_3 = document.getElementById('url_3').value;
var caeTITLE_3 = document.getElementById('title_3').value;
var caeTEASER_3 = document.getElementById('teaser_3').value;
var caeCITATION_3 = document.getElementById('citation_3').value;

var caeURL_4 = document.getElementById('url_4').value;
var caeTITLE_4 = document.getElementById('title_4').value;
var caeTEASER_4 = document.getElementById('teaser_4').value;
var caeCITATION_4 = document.getElementById('citation_4').value;

var caeURL_5 = document.getElementById('url_5').value;
var caeTITLE_5 = document.getElementById('title_5').value;
var caeTEASER_5 = document.getElementById('teaser_5').value;
var caeCITATION_5 = document.getElementById('citation_5').value;




var test_HTML =  "&lt;a href=\"" + caeURL_1 + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\"&gt;" + caeTITLE_1 + "&lt;\/a&gt;&lt;br\/&gt;&lt;br\/&gt;&lt;font class=\"teaser\" style=\"font-size:14px; color:#666666;\"&gt;" + caeTEASER_1 + "&lt;\/font&gt;&lt;br\/&gt; &lt;font class=\"cite\" style=\"font-size:12px; color:#666666;\"&gt;&lt;em&gt;" + caeCITATION_1 + "&lt;\/em&gt;&lt;\/font&gt;&lt;br\/&gt;&lt;br\/&gt;";


var et_HTML;




document.getElementById('text_1').innerHTML = test_HTML;



};




function eraseDiv() {


document.getElementById('text_1').innerHTML = "";

};

/*working input and display*/


/* "&lt;font style=\"color:#ff0000\"&gt;&lt;a href=\"" + caeURL_1+ "\"&gt;" +caeTITLE_1 + "&lt;\/a&gt;&lt;\/font&gt;&lt;br\/&gt;&lt;font class=\"teaser\" style=\"font-size:14px; color:#666666;\"&gt;" + caeTEASER_1 + "&lt;\/font&gt;";
 */