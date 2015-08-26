function workCAE () {

var inputSpec = document.getElementById('specialty').value;	

var hdrSpec = "";


switch(inputSpec) {
    case 2900:
        hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_rheu.gif";
        document.getElementById("myImage").src = "hdrSpec";
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




var test_HTML = "&lt;font style=\"color:#ff0000\"&gt;" + caeTITLE_1 + "&lt;\/font&gt;";


/*var et_HTML = "<body bgcolor=\"#ffffff\" topmargin=\"0\" leftmargin=\"0\" marginheight=\"0\" marginwidth=\"0\" style=\"-webkit-font-smoothing: antialiased;width:100% !important;background:#ffffff;-webkit-text-size-adjust:none;\">

<table width=\"650\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"table\">
    <tr>
        <td valign=\"top\">
            <img style=\"display:block;\" height=\"15\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\">
        <\/td>
    <\/tr>
    <tr>
        <td height=\"5\" bgcolor=\"#006699\" style=\"font-size:1px; line-height:5px;\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td>
    <\/tr>

    <tr>
        <td><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
            <tr>
                <td width=\"5\" bgcolor=\"#006699\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td>
                <td valign=\"top\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
                    <tr>
                        <td valign=\"top\">
                            <img src=\"" +myImage+ "\" class=\"header\" width=\"640\" height=\"55\" alt=\"\" style=\"display:block;\">
                        <\/td>
                    <\/tr>
                    <tr>
                        <td height=\"10\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td>
                    <\/tr>
                    <tr>
                        <td align=\"left\"><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
                            <tr>
                                <td width=\"30\" class=\"padding\">&nbsp;<\/td>
                                <td><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:14px;\">

                                    <tr>
                                        <td height=\"20\" class=\"hide\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td>
                                    <\/tr>


                                    <tr>
                                        <td align=\"left\" style=\"font-size:10px;\">

                                            <!--MAIN ARTICLES BEGIN-->


                                            <font style=\"font-size:18px; font-weight:bold;\" class=\"headertext\">Top Articles on Fibromyalgia<\/font>
                                            <table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"><tr><td height=\"10\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td><\/tr><\/table>

                                            <table border=\"0\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:51%;\" class=\"hide\">


                                                <tr><td height=\"10\" align=\"center\" valign=\"bottom\" class=\"hide\"><img height=\"7\" src=\"http:\/\/a1977.g.akamai.net\/f\/1977\/1448\/1d\/webmd.download.akamai.com\/1448\/headers_footers_new\/text_advertisement_top.gif\" width=\"77\" border=\"0\"><\/td><\/tr>
                                                <tr>
                                                    <td><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
                                                        <tr>
                                                            <td width=\"10\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"10\" border=\"0\" alt=\"\"><\/td>
                                                            <td><table width=\"300\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
                                                                <tr>
                                                                    <td valign=\"top\"><a target=\"new\" href=\"http:\/\/ad.doubleclick.net\/ddm\/clk\/287063890;114033321;w\"><img src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/FM_MGMT_BANNERS_300X250_Static_C06_b_r.jpg\" alt=\"\" width=\"300\" height=\"250\" border=\"0\" align=\"right\"><\/a><\/td>
                                                                <\/tr>
                                                                <tr>
                                                                    <td height=\"15\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td>
                                                                <\/tr>

                                                            <\/table><\/td>
                                                        <\/tr>
                                                    <\/table>
                                                    <\/td><\/tr>
                                            <\/table>



                                            <a href=\"http:\/\/www.medscape.com\/viewarticle\/845229?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\">Exercise Stimulates Pain Modulation in Fibromyalgia
<\/a>
                                            <br>
                                            <font class=\"teaser\" style=\"font-size:14px; color:#666666;\">Exercise activates areas of the brain associated with pain modulation, suggesting it could be an effective treatment for fibromyalgia.
<\/font>

                                            <br>
                                            <font class=\"cite\" style=\"font-size:12px; color:#666666;\"><em>Medscape Medical News<\/em><\/font><br><br>




                                            <a href=\"http:\/\/www.medscape.com\/viewarticle\/834573?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\">An Army Sergeant With Mysterious Pain: Crack the Case
<\/a>
                                            <br>
                                            <font class=\"teaser\" style=\"font-size:14px; color:#666666;\">What should be done to assess and treat chronic, multifocal pain in a 44-year-old retired Army sergeant?
<\/font>
                                            <br>
                                            <font class=\"cite\" style=\"font-size:12px; color:#666666;\"><em>Medscape Internal Medicine<\/em><\/font><br><br>


                                            <a href=\"http:\/\/www.medscape.com\/viewarticle\/831471?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\">Fibromyalgia: The Latest in Diagnosis and Care<\/a>
                                            <br>
                                            <font class=\"teaser\" style=\"font-size:14px; color:#666666;\">Medscape speaks with two fibromyalgia experts about the latest in understanding, diagnosing, and treating this at-times puzzling, painful condition.
<\/font>
                                            <br>
                                            <font class=\"cite\" style=\"font-size:12px; color:#666666;\"><em>Medscape Rheumatology<\/em><\/font><br><br>



                                            <a href=\"http:\/\/www.medscape.com\/viewarticle\/843526?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\">Patterns of Health Care Utilization Related to Initiation of Amitriptyline, Duloxetine, Gabapentin, or Pregabalin in Fibromyalgia
<\/a>
                                            <br>
                                            <font class=\"teaser\" style=\"font-size:14px; color:#666666;\">Which fibromyalgia treatment is associated with a reduction in health care utilization?
<\/font>
                                            <br>
                                            <font class=\"cite\" style=\"font-size:12px; color:#666666;\"><em>Arthritis Research &amp; Therapy<\/em><\/font><br><br>



                                            <a href=\"http:\/\/www.medscape.com\/viewarticle\/838255?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\">Self-Efficacy and Affect as Mediators Between Pain Dimensions and Emotional Symptoms and Functional Limitation in Women With Fibromyalgia
<\/a>
                                            <br>
                                            <font class=\"teaser\" style=\"font-size:14px; color:#666666;\">Get a handle on the complex nature of pain in women presenting with fibromyalgia.
<\/font>

                                            <br>
                                            <font class=\"cite\" style=\"font-size:12px; color:#666666;\"><em>Pain Management Nursing<\/em><\/font><br><br>




                                            <table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:51%;\" class=\"table2\">


                                                <tr><td align=\"center\" valign=\"bottom\"><img height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/text_advertisement_top_mb.gif\" width=\"1\" border=\"0\" style=\"display:none;\" class=\"ad2\"><\/td><\/tr>
                                                <tr>
                                                    <td><table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
                                                        <tr>
                                                            <td width=\"10\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"10\" border=\"0\" alt=\"\"><\/td>
                                                            <td><table width=\"300\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">
                                                                <tr>
                                                                    <td><a target=\"new\" href=\"http:\/\/ad.doubleclick.net\/ddm\/clk\/287063890;114033321;w\"><img width=\"1\" height=\"1\" border=\"0\" src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/FM_MGMT_BANNERS_300X250_Static_C06_b_r.jpg\" style=\"display:none;\" class=\"ad1\"><\/a><\/td>
                                                                <\/tr>
                                                                <tr>
                                                                    <td height=\"15\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td>
                                                                <\/tr>

                                                            <\/table><\/td>
                                                        <\/tr>
                                                    <\/table>
                                                    <\/td><\/tr>
                                            <\/table>



                                            <!--MAIN ARTICLES END-->
                                        <\/td>
                                    <\/tr>
                                <\/table><\/td>
                                <td width=\"30\" class=\"padding\">&nbsp;<\/td>
                            <\/tr>
                        <\/table><\/td>
                    <\/tr>



                    <tr>
                        <td height=\"20\" class=\"hide\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td>
                    <\/tr>

                <\/table>
                <\/td>
                <td width=\"5\" bgcolor=\"#006699\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td>
            <\/tr>
        <\/table><\/td>

    <\/tr>
    <tr>
        <td bgcolor=\"#0b476b\"><img src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/template\/footer_crb.gif\" class=\"footer\" width=\"650\" height=\"25\" alt=\"\" style=\"display:block;\"><\/td>
    <\/tr>
    <tr>

        <td height=\"20\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td>
    <\/tr>
    <tr>
        <td align=\"center\" valign=\"top\" class=\"footertext\" style=\" text-align:center; font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#333333;\"><A href=\"https:\/\/profreg.medscape.com\/px\/forgotpassword.do\" style=\"text-decoration:none; color:#333333; font-size:12px;\" class=\"footertext\">Username and Password Assistance<\/A>

            <font style=\"font-size:12px;\" class=\"footertext\">&nbsp;&nbsp;|&nbsp;&nbsp;<\/font>

            <A href=\"http:\/\/www.medscape.com\/public\/help\" style=\"text-decoration:none; color:#333333; font-size:12px;\" class=\"footertext\"> Medscape Member Support<\/A>

            <font style=\"font-size:12px;\" class=\"footertext\">&nbsp;&nbsp;|&nbsp;&nbsp;<\/font>

            <A href=\"http:\/\/www.medscape.com\/public\/privacy\" style=\"text-decoration:none; color:#333333; font-size:12px;\" class=\"footertext\">Privacy Policy<\/A> <br>
            <br>
            <A href=\"https:\/\/profreg.medscape.com\/px\/optout.do?serv=1&chan=13&info=%%EMAIL_ADDRESS%%&guid=%%ENCRYPTED_GUID%%&glob=0&prod=1013\" style=\"text-decoration:none; color:#333333;\">Unsubscribe from this newsletter<\/A>&nbsp;&nbsp;|&nbsp;&nbsp;<A href=\"https:\/\/profreg.medscape.com\/px\/optout.do?serv=1&chan=13&info=%%EMAIL_ADDRESS%%&guid=%%ENCRYPTED_GUID%%&glob=1&prod=1013\" style=\"text-decoration:none; color:#333333;\">Unsubscribe from all Medscape from WebMD newsletters<\/A> <br>
            <br> <span class=\"applelinks\" style=\"color:#666666;\">You are receiving this communication because you are a registered member of Medscape.<br>
The email address associated with your membership is <A href=\"mailto:%%EMAIL_ADDRESS%%\" style=\"text-decoration:none; color: #666666; font-family:arial; font-size:11px;\" class=\"footertext\">%%EMAIL_ADDRESS%%<\/A>.<br><br>

Medscape from WebMD, 111 Eighth Avenue, New York, NY 10011<\/span><\/td>
    <\/tr>
    <tr>
        <td height=\"20\"><img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"><\/td>
    <\/tr>
<\/table>



<A HREF=\"http:\/\/ad.doubleclick.net\/jump\/N8276.329.MEDSCAPE\/B8431973.114033321;sz=1x1;ord=%%=Format(Now(), 'MMddyyyyhhmmss')=%%?\">
    <IMG SRC=\"http:\/\/ad.doubleclick.net\/ad\/N8276.329.MEDSCAPE\/B8431973.114033321;sz=1x1;ord=%%=Format(Now(), 'MMddyyyyhhmmss')=%%?\" BORDER=0 WIDTH=\"1\" HEIGHT=\"1\"><\/A>



<custom name=\"opencounter\" type=\"tracking\">

<\/body>";*/




document.getElementById('text_1').innerHTML = test_HTML;



};




function eraseDiv() {


document.getElementById('text_1').innerHTML = "";

};

/*working input and display*/