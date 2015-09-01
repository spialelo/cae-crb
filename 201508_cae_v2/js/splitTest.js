

if (document.getElementById('adYes').checked  = 'true') {

alert('Yes is selected');

    /* document.getElementById('adNo').checked = 'false';
     document.getElementById('displayAd').style.visibility = 'visible';
     document.getElementById('displayAd').style.display = 'block';*/
}


else {

    alert('No is selected');
}




function splitTab (){



var hdrSpec = "";

var inputURL = document.getElementById('text_url').value;
var inputTopic = document.getElementById('topic').value;
var inputTitle = document.getElementById('text_title').value;
var inputTeaser = document.getElementById('text_teaser').value;
var inputCitation = document.getElementById('text_cite').value;


/*split at tab works*/
//var splitTabSpace =  inputInit.split('\t');
var cleanURL = inputURL.replace(/\r\n|\r|\n/g, '$-$<br>').split('$-$');
var cleanTopic = inputTopic.replace(/\r\n|\r|\n/g, '$-$<br>').split('$-$');
var cleanTitle = inputTitle.replace(/\r\n|\r|\n/g, '$-$<br>').split('$-$');
var cleanTeaser = inputTeaser.replace(/\r\n|\r|\n/g, '$-$<br>').split('$-$');
var cleanCitation = inputCitation.replace(/\r\n|\r|\n/g, '$-$<br>').split('$-$');



var sel = document.getElementById('specDropDown');
var dropDownSelected = sel.options[sel.selectedIndex].value;

    /*Test drop down is working
    alert(dropDownSelected);
    Input from drop down is a string
alert(typeof dropDownSelected === 'string')
*/

  switch(dropDownSelected){
        case '2900':
            hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_rheu.gif";
            break;
        case '1100':
            hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_aimm.gif"; break;
        case '1300':
            hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_derm.gif"; break;
        case '1400':
            hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_diab.gif"; break;
        case '3300':
            hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_generic.gif"; break;
    }












 var et_HTML = "<body bgcolor=\"#ffffff\" topmargin=\"0\" leftmargin=\"0\" marginheight=\"0\" marginwidth=\"0\" style=\"-webkit-font-smoothing: antialiased;width:100% !important;background:#ffffff;-webkit-text-size-adjust:none;\"><table width=\"650\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"table\"><tr><td valign=\"top\"><img style=\"display:block;\" height=\"15\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><\/tr><tr><td height=\"5\" bgcolor=\"#006699\" style=\"font-size:1px; line-height:5px;\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><\/tr><tr><td><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\"5\" bgcolor=\"#006699\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><td valign=\"top\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td valign=\"top\"><img src=\"" +hdrSpec+ "\" id=\"hdrImage\" class=\"header\" width=\"640\" height=\"55\" alt=\"\" style=\"display:block;\"><\/td><\/tr><tr><td height=\"10\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><\/tr><tr><td align=\"left\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\"30\" class=\"padding\">&nbsp;<\/td><td><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:14px;\"><tr><td height=\"20\" class=\"hide\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><\/tr><tr><td align=\"left\" style=\"font-size:10px;\"><!--MAIN ARTICLES BEGIN--><font style=\"font-size:18px; font-weight:bold;\" class=\"headertext\">Top Articles on " + cleanTopic + "<\/font><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\"10\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><\/tr><\/table><table border=\"0\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:51%;\" class=\"hide\"><tr><td height=\"10\" align=\"center\" valign=\"bottom\" class=\"hide\"><img height=\"7\" src=\"http:\/\/a1977.g.akamai.net\/f\/1977\/1448\/1d\/webmd.download.akamai.com\/1448\/headers_footers_new\/text_advertisement_top.gif\" width=\"77\" border=\"0\"><\/td><\/tr><tr><td><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\"10\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"10\" border=\"0\" alt=\"\"><\/td><td><table width=\"300\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td valign=\"top\"><a target=\"new\" href=\"http:\/\/ad.doubleclick.net\/ddm\/clk\/287063890;114033321;w\"><img src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/FM_MGMT_BANNERS_300X250_Static_C06_b_r.jpg\" alt=\"\" width=\"300\" height=\"250\" border=\"0\" align=\"right\"><\/a><\/td><\/tr><tr><td height=\"15\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><\/tr><\/table><\/td><\/tr><\/table><\/td><\/tr><\/table><a href=\"" + cleanURL[0] + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\">" + cleanTitle[0] + "<\/a><br\/><br\/><font class=\"teaser\" style=\"font-size:14px; color:#666666;\">" + cleanTeaser[0] + "<\/font><br\/><font class=\"cite\" style=\"font-size:12px; color:#666666;\"><em>" + cleanCitation[0] + "<\/em><\/font><br\/><br\/>\r\r<a href=\"" + cleanURL[1] + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\">" + cleanTitle[1] + "<\/a><br\/><br\/><font class=\"teaser\" style=\"font-size:14px; color:#666666;\">" + cleanTeaser[1] + "<\/font><br\/><font class=\"cite\" style=\"font-size:12px; color:#666666;\"><em>" + cleanCitation[1] + "<\/em><\/font><br\/><br\/>\r\r<a href=\"" + cleanURL[2] + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\">" + cleanTitle[2] + "<\/a><br\/><br\/><font class=\"teaser\" style=\"font-size:14px; color:#666666;\">" + cleanTeaser[2] + "<\/font><br\/><font class=\"cite\" style=\"font-size:12px; color:#666666;\"><em>" + cleanCitation[2] + "<\/em><\/font><br\/><br\/>\r\r<a href=\"" + cleanURL[3] + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\">" + cleanTitle[3] + "<\/a><br\/><br\/><font class=\"teaser\" style=\"font-size:14px; color:#666666;\">" + cleanTeaser[3] + "<\/font><br\/><font class=\"cite\" style=\"font-size:12px; color:#666666;\"><em>" + cleanCitation[3] + "<\/em><\/font><br\/><br\/>\r\r<a href=\"" + cleanURL[4] + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\">" + cleanTitle[4] + "<\/a><br\/><br\/><font class=\"teaser\" style=\"font-size:14px; color:#666666;\">" + cleanTeaser[4] + "<\/font><br\/><font class=\"cite\" style=\"font-size:12px; color:#666666;\"><em>" + cleanCitation[4] + "<\/em><\/font><br\/><br\/><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:51%;\" class=\"table2\"><tr><td align=\"center\" valign=\"bottom\"><img height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/text_advertisement_top_mb.gif\" width=\"1\" border=\"0\" style=\"display:none;\" class=\"ad2\"><\/td><\/tr><tr><td><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td width=\"10\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"10\" border=\"0\" alt=\"\"><\/td><td><table width=\"300\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td><a target=\"new\" href=\"http:\/\/ad.doubleclick.net\/ddm\/clk\/287063890;114033321;w\"><img width=\"1\" height=\"1\" border=\"0\" src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/FM_MGMT_BANNERS_300X250_Static_C06_b_r.jpg\" style=\"display:none;\" class=\"ad1\"><\/a><\/td><\/tr><tr><td height=\"15\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><\/tr><\/table><\/td><\/tr><\/table><\/td><\/tr><\/table><!--MAIN ARTICLES END--><\/td><\/tr><\/table><\/td><td width=\"30\" class=\"padding\">&nbsp;<\/td><\/tr><\/table><\/td><\/tr><tr><td height=\"20\" class=\"hide\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><\/tr><\/table><\/td><td width=\"5\" bgcolor=\"#006699\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><\/tr><\/table><\/td><\/tr><tr><td bgcolor=\"#0b476b\"><img src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/template\/footer_crb.gif\" class=\"footer\" width=\"650\" height=\"25\" alt=\"\" style=\"display:block;\"><\/td><\/tr><tr><td height=\"20\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><\/tr><tr><td align=\"center\" valign=\"top\" class=\"footertext\" style=\" text-align:center; font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#333333;\"><A href=\"https:\/\/profreg.medscape.com\/px\/forgotpassword.do\" style=\"text-decoration:none; color:#333333; font-size:12px;\" class=\"footertext\">Username and Password Assistance<\/A><font style=\"font-size:12px;\" class=\"footertext\">&nbsp;&nbsp;|&nbsp;&nbsp;<\/font><A href=\"http:\/\/www.medscape.com\/public\/help\" style=\"text-decoration:none; color:#333333; font-size:12px;\" class=\"footertext\"> Medscape Member Support<\/A><font style=\"font-size:12px;\" class=\"footertext\">&nbsp;&nbsp;|&nbsp;&nbsp;<\/font><A href=\"http:\/\/www.medscape.com\/public\/privacy\" style=\"text-decoration:none; color:#333333; font-size:12px;\" class=\"footertext\">Privacy Policy<\/A><br><br><A href=\"https:\/\/profreg.medscape.com\/px\/optout.do\?serv=1&chan=13&info=%%EMAIL_ADDRESS%%&guid=%%ENCRYPTED_GUID%%&glob=0&prod=1013\" style=\"text-decoration:none; color:#333333;\">Unsubscribe from this newsletter<\/A>&nbsp;&nbsp;|&nbsp;&nbsp;<A href=\"https:\/\/profreg.medscape.com\/px\/optout.do\?serv=1&chan=13&info=%%EMAIL_ADDRESS%%&guid=%%ENCRYPTED_GUID%%&glob=1&prod=1013\" style=\"text-decoration:none; color:#333333;\">Unsubscribe from all Medscape from WebMD newsletters<\/A><br><br><span class=\"applelinks\" style=\"color:#666666;\">You are receiving this communication because you are a registered member of Medscape.<br>The email address associated with your membership is <A href=\"mailto:%%EMAIL_ADDRESS%%\" style=\"text-decoration:none; color: #666666; font-family:arial; font-size:11px;\" class=\"footertext\">%%EMAIL_ADDRESS%%<\/A>.<br><br>Medscape from WebMD, 111 Eighth Avenue, New York, NY 10011<\/span><\/td><\/tr><tr><td height=\"20\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><\/tr><\/table><A HREF=\"http:\/\/ad.doubleclick.net\/jump\/N8276.329.MEDSCAPE\/;sz=1x1;ord=%%=Format(Now(), 'MMddyyyyhhmmss')=%%\?\"><IMG SRC=\"http:\/\/ad.doubleclick.net\/ad\/N8276.329.MEDSCAPE\/;sz=1x1;ord=%%=Format(Now(), 'MMddyyyyhhmmss')=%%\?\" BORDER=0 WIDTH=\"1\" HEIGHT=\"1\"><\/A><custom name=\"opencounter\" type=\"tracking\"><\/body>";


    document.getElementById('newSplit').textContent =  et_HTML;


    var test_HTML;



    //document.getElementById('newSplit').innerHTML =  cleanURL[0] + "<br><br>" + cleanTopic[0] + "<br><br>" + cleanTitle + "<br><br>" + cleanTeaser + "<br><br>" + cleanCitation ;


document.getElementById('newSplit').style.width = '600px';
document.getElementById('newSplit').style.height = 'auto';



};



function eraseDiv() {


/*Reset the display area to an empty square.*/
document.getElementById('newSplit').textContent = " ";


/*Reset form values.*/
document.getElementById('split_form').reset();	

/*Reset the display area size to the original values.*/
document.getElementById('newSplit').style.width = "600px";
document.getElementById('newSplit').style.height = "400px";

};