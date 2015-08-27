function workCAE () {

var inputSpec = document.getElementById('specialty').value;
var topic = document.getElementById('topic').value;	


var hdrSpec="";
 

switch(inputSpec) {
 case 2900: hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_rheu.gif"; 
 break;
 case 1100:hdrSpec = "http://"; break;
 case 1300:hdrSpec = "http://"; break;
 case 1400: hdrSpec = "http://"; break;
 default: 
 hdrSpec = "http://generic"; 
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




var et_HTML ="&lt;body bgcolor=\"#ffffff\" topmargin=\"0\" leftmargin=\"0\" marginheight=\"0\" marginwidth=\"0\" style=\"-webkit-font-smoothing: antialiased;width:100% !important;background:#ffffff;-webkit-text-size-adjust:none;\"&gt;&lt;table width=\"650\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"table\"&gt;&lt;tr&gt;&lt;td valign=\"top\"&gt;&lt;img style=\"display:block;\" height=\"15\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"&gt; &lt;\/td&gt;&lt;\/tr&gt;&lt;tr&gt;&lt;td height=\"5\" bgcolor=\"#006699\" style=\"font-size:1px; line-height:5px;\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;tr&gt; &lt;td&gt;&lt;table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"&gt;&lt;tr&gt; &lt;td width=\"5\" bgcolor=\"#006699\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt; &lt;td valign=\"top\"&gt;&lt;table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"&gt;&lt;tr&gt;&lt;td valign=\"top\"&gt; &lt;img src=\"" +hdrSpec+ "\" id=\"hdrImage\" class=\"header\" width=\"640\" height=\"55\" alt=\"\" style=\"display:block;\"&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;tr&gt;&lt;td height=\"10\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;tr&gt;&lt;td align=\"left\"&gt;&lt;table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"&gt; &lt;tr&gt;&lt;td width=\"30\" class=\"padding\"&gt;&nbsp;&lt;\/td&gt;&lt;td&gt;&lt;table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:14px;\"&gt;&lt;tr&gt;&lt;td height=\"20\" class=\"hide\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt; &lt;\/tr&gt;&lt;tr&gt;&lt;td align=\"left\" style=\"font-size:10px;\"&gt;&lt;!--MAIN ARTICLES BEGIN--&gt;&lt;font style=\"font-size:18px; font-weight:bold;\" class=\"headertext\"&gt;Top Articles on " + topic + "&lt;\/font&gt;&lt;table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"&gt;&lt;tr&gt;&lt;td height=\"10\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;\/table&gt;&lt;table border=\"0\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:51%;\" class=\"hide\"&gt; &lt;tr&gt;&lt;td height=\"10\" align=\"center\" valign=\"bottom\" class=\"hide\"&gt;&lt;img height=\"7\" src=\"http:\/\/a1977.g.akamai.net\/f\/1977\/1448\/1d\/webmd.download.akamai.com\/1448\/headers_footers_new\/text_advertisement_top.gif\" width=\"77\" border=\"0\"&gt;&lt;\/td&gt;&lt;\/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"&gt; &lt;tr&gt;&lt;td width=\"10\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"10\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt;&lt;td&gt;&lt;table width=\"300\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"&gt;&lt;tr&gt; &lt;td valign=\"top\"&gt;&lt;a target=\"new\" href=\"http:\/\/ad.doubleclick.net\/ddm\/clk\/287063890;114033321;w\"&gt;&lt;img src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/FM_MGMT_BANNERS_300X250_Static_C06_b_r.jpg\" alt=\"\" width=\"300\" height=\"250\" border=\"0\" align=\"right\"&gt;&lt;\/a&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;tr&gt; &lt;td height=\"15\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt;&lt;\/tr&gt; &lt;\/table&gt;&lt;\/td&gt; &lt;\/tr&gt;&lt;\/table&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;\/table&gt;&lt;a href=\"" + caeURL_1 + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\"&gt;" + caeTITLE_1 + "&lt;\/a&gt;&lt;br\/&gt;&lt;br\/&gt;&lt;font class=\"teaser\" style=\"font-size:14px; color:#666666;\"&gt;" + caeTEASER_1 + "&lt;\/font&gt;&lt;br\/&gt; &lt;font class=\"cite\" style=\"font-size:12px; color:#666666;\"&gt;&lt;em&gt;" + caeCITATION_1 + "&lt;\/em&gt;&lt;\/font&gt;&lt;br\/&gt;&lt;br\/&gt;\r\r&lt;a href=\"" + caeURL_2 + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\"&gt;" + caeTITLE_2 + "&lt;\/a&gt;&lt;br\/&gt;&lt;br\/&gt;&lt;font class=\"teaser\" style=\"font-size:14px; color:#666666;\"&gt;" + caeTEASER_2 + "&lt;\/font&gt;&lt;br\/&gt; &lt;font class=\"cite\" style=\"font-size:12px; color:#666666;\"&gt;&lt;em&gt;" + caeCITATION_2 + "&lt;\/em&gt;&lt;\/font&gt;&lt;br\/&gt;&lt;br\/&gt;\r\r&lt;a href=\"" + caeURL_3 + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\"&gt;" + caeTITLE_3 + "&lt;\/a&gt;&lt;br\/&gt;&lt;br\/&gt;&lt;font class=\"teaser\" style=\"font-size:14px; color:#666666;\"&gt;" + caeTEASER_3 + "&lt;\/font&gt;&lt;br\/&gt; &lt;font class=\"cite\" style=\"font-size:12px; color:#666666;\"&gt;&lt;em&gt;" + caeCITATION_3 + "&lt;\/em&gt;&lt;\/font&gt;&lt;br\/&gt;&lt;br\/&gt;\r\r&lt;a href=\"" + caeURL_4 + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\"&gt;" + caeTITLE_4 + "&lt;\/a&gt;&lt;br\/&gt;&lt;br\/&gt;&lt;font class=\"teaser\" style=\"font-size:14px; color:#666666;\"&gt;" + caeTEASER_4 + "&lt;\/font&gt;&lt;br\/&gt; &lt;font class=\"cite\" style=\"font-size:12px; color:#666666;\"&gt;&lt;em&gt;" + caeCITATION_4 + "&lt;\/em&gt;&lt;\/font&gt;&lt;br\/&gt;&lt;br\/&gt;\r\r&lt;a href=\"" + caeURL_5 + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\"&gt;" + caeTITLE_5 + "&lt;\/a&gt;&lt;br\/&gt;&lt;br\/&gt;&lt;font class=\"teaser\" style=\"font-size:14px; color:#666666;\"&gt;" + caeTEASER_5 + "&lt;\/font&gt;&lt;br\/&gt; &lt;font class=\"cite\" style=\"font-size:12px; color:#666666;\"&gt;&lt;em&gt;" + caeCITATION_5 + "&lt;\/em&gt;&lt;\/font&gt;&lt;br\/&gt;&lt;br\/&gt;&lt;table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:51%;\" class=\"table2\"&gt;&lt;tr&gt;&lt;td align=\"center\" valign=\"bottom\"&gt;&lt;img height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/text_advertisement_top_mb.gif\" width=\"1\" border=\"0\" style=\"display:none;\" class=\"ad2\"&gt;&lt;\/td&gt;&lt;\/tr&gt; &lt;tr&gt;&lt;td&gt;&lt;table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"&gt; &lt;tr&gt;&lt;td width=\"10\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"10\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt;&lt;td&gt;&lt;table width=\"300\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"&gt;&lt;tr&gt; &lt;td&gt;&lt;a target=\"new\" href=\"http:\/\/ad.doubleclick.net\/ddm\/clk\/287063890;114033321;w\"&gt;&lt;img width=\"1\" height=\"1\" border=\"0\" src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/FM_MGMT_BANNERS_300X250_Static_C06_b_r.jpg\" style=\"display:none;\" class=\"ad1\"&gt;&lt;\/a&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;tr&gt; &lt;td height=\"15\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;\/table&gt;&lt;\/td&gt; &lt;\/tr&gt;&lt;\/table&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;\/table&gt;&lt;!--MAIN ARTICLES END--&gt;&lt;\/td&gt; &lt;\/tr&gt;&lt;\/table&gt;&lt;\/td&gt;&lt;td width=\"30\" class=\"padding\"&gt;&nbsp;&lt;\/td&gt; &lt;\/tr&gt;&lt;\/table&gt;&lt;\/td&gt;&lt;\/tr&gt; &lt;tr&gt;&lt;td height=\"20\" class=\"hide\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;\/table&gt; &lt;\/td&gt; &lt;td width=\"5\" bgcolor=\"#006699\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt;&lt;\/tr&gt; &lt;\/table&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;tr&gt; &lt;td bgcolor=\"#0b476b\"&gt;&lt;img src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/template\/footer_crb.gif\" class=\"footer\" width=\"650\" height=\"25\" alt=\"\" style=\"display:block;\"&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;tr&gt;&lt;td height=\"20\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;tr&gt; &lt;td align=\"center\" valign=\"top\" class=\"footertext\" style=\" text-align:center; font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#333333;\"&gt;&lt;A href=\"https:\/\/profreg.medscape.com\/px\/forgotpassword.do\" style=\"text-decoration:none; color:#333333; font-size:12px;\" class=\"footertext\"&gt;Username and Password Assistance&lt;\/A&gt;&lt;font style=\"font-size:12px;\" class=\"footertext\"&gt;&nbsp;&nbsp;|&nbsp;&nbsp;&lt;\/font&gt;&lt;A href=\"http:\/\/www.medscape.com\/public\/help\" style=\"text-decoration:none; color:#333333; font-size:12px;\" class=\"footertext\"&gt; Medscape Member Support&lt;\/A&gt;&lt;font style=\"font-size:12px;\" class=\"footertext\"&gt;&nbsp;&nbsp;|&nbsp;&nbsp;&lt;\/font&gt;&lt;A href=\"http:\/\/www.medscape.com\/public\/privacy\" style=\"text-decoration:none; color:#333333; font-size:12px;\" class=\"footertext\"&gt;Privacy Policy&lt;\/A&gt; &lt;br&gt;&lt;br&gt;&lt;A href=\"https:\/\/profreg.medscape.com\/px\/optout.do\?serv=1&chan=13&info=%%EMAIL_ADDRESS%%&guid=%%ENCRYPTED_GUID%%&glob=0&prod=1013\" style=\"text-decoration:none; color:#333333;\"&gt;Unsubscribe from this newsletter&lt;\/A&gt;&nbsp;&nbsp;|&nbsp;&nbsp;&lt;A href=\"https:\/\/profreg.medscape.com\/px\/optout.do\?serv=1&chan=13&info=%%EMAIL_ADDRESS%%&guid=%%ENCRYPTED_GUID%%&glob=1&prod=1013\" style=\"text-decoration:none; color:#333333;\"&gt;Unsubscribe from all Medscape from WebMD newsletters&lt;\/A&gt; &lt;br&gt;&lt;br&gt; &lt;span class=\"applelinks\" style=\"color:#666666;\"&gt;You are receiving this communication because you are a registered member of Medscape.&lt;br&gt;The email address associated with your membership is &lt;A href=\"mailto:%%EMAIL_ADDRESS%%\" style=\"text-decoration:none; color: #666666; font-family:arial; font-size:11px;\" class=\"footertext\"&gt;%%EMAIL_ADDRESS%%&lt;\/A&gt;.&lt;br&gt;&lt;br&gt;Medscape from WebMD, 111 Eighth Avenue, New York, NY 10011&lt;\/span&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;tr&gt; &lt;td height=\"20\"&gt;&lt;img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"&gt;&lt;\/td&gt;&lt;\/tr&gt;&lt;\/table&gt;&lt;A HREF=\"http:\/\/ad.doubleclick.net\/jump\/N8276.329.MEDSCAPE\/B8431973.114033321;sz=1x1;ord=%%=Format(Now(), 'MMddyyyyhhmmss')=%%\?\"&gt;&lt;IMG SRC=\"http:\/\/ad.doubleclick.net\/ad\/N8276.329.MEDSCAPE\/B8431973.114033321;sz=1x1;ord=%%=Format(Now(), 'MMddyyyyhhmmss')=%%\?\" BORDER=0 WIDTH=\"1\" HEIGHT=\"1\"&gt;&lt;\/A&gt;&lt;custom name=\"opencounter\" type=\"tracking\"&gt;&lt;\/body&gt;";


var test_HTML;

/*Make the display area expand with the content.*/
document.getElementById('text_1').style.width = 'auto';
document.getElementById('text_1').style.height = 'auto';

/*HTML output will be displayed in the div.*/
document.getElementById('text_1').innerHTML = et_HTML;



};




function eraseDiv() {


/*Reset the display area to an empty square.*/
document.getElementById('text_1').innerHTML = " ";


/*Reset form values.*/
document.getElementById('caeOne_form').reset();	

/*Reset the display area size to the original values.*/
document.getElementById('text_1').style.width = '600px';
document.getElementById('text_1').style.height = '400px';

};

/*working input and display*/

