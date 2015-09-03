/**
 * Created by NPhillips on 8/26/2015.
 * Completed on 9/3/2015.
 */


(function(){

/*radioAnswer is working */
function radioAnswer () {

    /* Correctly alerted the value of the selected radio button.
    alert(this.value); */
    var userAnswer = this.value;
    //alert(userAnswer);

    var divAd = document.getElementById('revealAd');

if(userAnswer == '300x250' || userAnswer == '300x600'){

    divAd.style.visibility = 'visible';
}

    else
    divAd.style.visibility = 'hidden';



    //divAd.innerText = 'Show selected value: ' + userAnswer;

}

    var radioButtons = document.getElementsByName('adAnswer');

    for (var i = 0; i < radioButtons.length; i++){
        radioButtons[i].onclick = radioAnswer;
    }
/*radioAnswer is working */



/*pfizerAnswer is working */
function pfizerAnswer () {

        /* Correctly alerted the value of the selected radio button.
         alert(this.value); */
        var userAnswer = this.value;
        //alert(userAnswer);

    var divAd = document.getElementById('revealPfizer');

    if(userAnswer == 'Yes'){

        divAd.style.visibility = 'visible';
    }

    else
        divAd.style.visibility = 'hidden';


    //divAd.innerText = 'Show selected value: ' + userAnswer;

    }

    var pfizerButtons = document.getElementsByName('pfizerAnswer');

    for (var i = 0; i < pfizerButtons.length; i++){
        pfizerButtons[i].onclick = pfizerAnswer;
    }
/*pfizerAnswer is working */






/*generateHTML function area is working */

    function caeGenerate(){

/*initializing the variable*/
        var hdrSpec = "";

        /*storing user input in variables*/
        var inputURL = document.getElementById('text_url').value;
        var inputTopic = document.getElementById('topic').value;
        var inputTitle = document.getElementById('text_title').value;
        var inputTeaser = document.getElementById('text_teaser').value;
        var inputCitation = document.getElementById('text_cite').value;

        var inputAdImage = document.getElementById('adImage').value;
        var inputAdURL = document.getElementById('adURL').value;
        var inputTrackPixImage = document.getElementById('trackPixImg').value;
        var inputTrackPixURL = document.getElementById('trackPixURL').value;

        /*split at tab works*/
        var cleanURL = inputURL.replace(/\r\n|\r|\n/g, '$-$').split('$-$');
        var cleanTopic = inputTopic.replace(/\r\n|\r|\n/g, '$-$').split('$-$');
        var cleanTitle = inputTitle.replace(/\r\n|\r|\n/g, '$-$').split('$-$');
        var cleanTeaser = inputTeaser.replace(/\r\n|\r|\n/g, '$-$').split('$-$');
        var cleanCitation = inputCitation.replace(/\r\n|\r|\n/g, '$-$').split('$-$');



        var sel = document.getElementById('specDropDown');
        var dropDownSelected = sel.options[sel.selectedIndex].value;

        /*Test drop down is working
         alert(dropDownSelected);
         Input from drop down is a string
         alert(typeof dropDownSelected === 'string')
         */

        switch(dropDownSelected){
            case '1000':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_aimm.gif";
                break;
            case '3320':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_anes.gif";
                break;
            case '1100':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_card.gif";
                break;
            case '1200':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_crit.gif";
                break;
            case '1300':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_derm.gif";
                break;
            case '1400':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_diab.gif";
                break;
            case '3310':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_emed.gif";
                break;
            case '2410':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_fmed.gif";
                break;
            case '1500':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_gast.gif";
                break;
            case '1600':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_onco.gif";
                break;
            case '1710':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_aids.gif";
                break;
            case '1720':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_infdis.gif";
                break;
            case '2420':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_imed.gif";
                break;
            case '1800':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_generic.gif";
                break;
            case '2421':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_neph.gif";
                break;
            case '1900':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_neur.gif";
                break;
            case '2000':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_obgy.gif";
                break;
            case '2100':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_opht.gif";
                break;
            case '2200':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_orth.gif";
                break;
            case '3300':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_generic.gif";
                break;
            case '1810':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_path.gif";
                break;
            case '2300':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_peds.gif";
                break;
            case '3400':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_plastic.gif";
                break;
            case '2500':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_publ.gif";
                break;
            case '2600':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_psyc.gif";
                break;
            case '2700':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_pulm.gif";
                break;
            case '2800':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_radi.gif";
                break;
            case '2900':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_rheu.gif";
                break;
            case '3000':
                hdrSpec = "http://img.medscapestatic.com/pi/features/newsletters/crb/template/hdr_crb_surg.gif";
                break;


        }


        var adButtons = document.getElementsByName('adAnswer');
        var caeAdImg = "";
        var caeAdURL = "";
        var adWidth = "";
        var adHeight = "";
        var adMobileClass = "";


        var desktopAd = "";
        var mobileAd = "";

        for(var i = 0; i < adButtons.length; i++){


            if(adButtons[i].checked){



                var adButtonsVal = adButtons[i].value;

                /* must stay here */
                caeAdImg = inputAdImage;
                caeAdURL = inputAdURL;

                /*
                set ad image dimensions based on value selected - working
                 */

                switch(adButtonsVal){
                    case '300x250':
                        adWidth = "300";
                        adHeight = "250";
                        adMobileClass = "ad1";
                        desktopAd = "\<table border=\"0\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:51%;\" class=\"hide\"\>\<tr\>\<td height=\"10\" align=\"center\" valign=\"bottom\" class=\"hide\"\>\<img height=\"7\" src=\"http:\/\/a1977\.g\.akamai\.net\/f\/1977\/1448\/1d/webmd\.download\.akamai\.com\/1448\/headers_footers_new\/text_advertisement_top\.gif\" width=\"77\" border=\"0\"\>\<\/td\>\<\/tr\>\<tr\>\<td\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td width=\"10\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"10\" border=\"0\" alt=\"\"\>\</td\>\<td\>\<table width=\"300\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td valign=\"top\"\>\<a target=\"new\" href=\"" + caeAdURL + "\"\>\<img src=\"" + caeAdImg + "\" alt=\"\" width=\"" + adWidth +"\" height=\""+ adHeight + "\" border=\"0\" align=\"right\"\>\<\/a\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"15\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<\/table\>";
                        mobileAd = "\<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:51%;\" class=\"table2\"\>\<tr\>\<td align=\"center\" valign=\"bottom\"\>\<img height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/features\/newsletters\/crb\/text_advertisement_top_mb\.gif\" width=\"1\" border=\"0\" style=\"display:none;\" class=\"ad2\"\>\<\/td\>\<\/tr\>\<tr\>\<td\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td width=\"10\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"10\" border=\"0\" alt=\"\"\>\<\/td\>\<td\>\<table width=\"300\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td\>\<a target=\"new\" href=\"" + caeAdURL + "\"\>\<img width=\"1\" height=\"1\" border=\"0\" src=\"" + caeAdImg + "\" style=\"display:none;\" class=\"" + adMobileClass + "\"\>\<\/a\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"15\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<\/table\>";
                        break;
                    case '300x600':
                        adWidth = "300";
                        adHeight = "600";
                        adMobileClass = "ad3";
                        desktopAd = "\<table border=\"0\" align=\"right\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:51%;\" class=\"hide\"\>\<tr\>\<td height=\"10\" align=\"center\" valign=\"bottom\" class=\"hide\"\>\<img height=\"7\" src=\"http:\/\/a1977\.g\.akamai\.net\/f\/1977\/1448\/1d/webmd\.download\.akamai\.com\/1448\/headers_footers_new\/text_advertisement_top\.gif\" width=\"77\" border=\"0\"\>\<\/td\>\<\/tr\>\<tr\>\<td\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td width=\"10\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"10\" border=\"0\" alt=\"\"\>\</td\>\<td\>\<table width=\"300\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td valign=\"top\"\>\<a target=\"new\" href=\"" + caeAdURL + "\"\>\<img src=\"" + caeAdImg + "\" alt=\"\" width=\"" + adWidth +"\" height=\""+ adHeight + "\" border=\"0\" align=\"right\"\>\<\/a\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"15\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<\/table\>";
                        mobileAd = "\<table border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:51%;\" class=\"table2\"\>\<tr\>\<td align=\"center\" valign=\"bottom\"\>\<img height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/features\/newsletters\/crb\/text_advertisement_top_mb\.gif\" width=\"1\" border=\"0\" style=\"display:none;\" class=\"ad2\"\>\<\/td\>\<\/tr\>\<tr\>\<td\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td width=\"10\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"10\" border=\"0\" alt=\"\"\>\<\/td\>\<td\>\<table width=\"300\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td\>\<a target=\"new\" href=\"" + caeAdURL + "\"\>\<img width=\"1\" height=\"1\" border=\"0\" src=\"" + caeAdImg + "\" style=\"display:none;\" class=\"" + adMobileClass + "\"\>\<\/a\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"15\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<\/table\>";
                        break;
                    case 'NoAd':
                        adWidth = "000";
                        adHeight = "000";
                        adMobileClass = "noclass";
                        desktopAd = "";
                        mobileAd = "";
                        break;

                }

                //alert('Ad: ' + adButtonsVal + "," + caeAdImg + "," + caeAdURL);



            }

        }


        var pfizerButtons = document.getElementsByName('pfizerAnswer');
        var pfizerTrackPix = "";
        var pfizerTrackURL = "";

        var pfizerPixel = "";

        for(var j=0; j < pfizerButtons.length; j++){


            if( (pfizerButtons[j].checked) && (pfizerButtons[j].value == 'Yes') ){

                pfizerTrackPix = inputTrackPixImage;
                pfizerTrackURL = inputTrackPixURL;

                pfizerPixel = "\<A HREF=\"" + pfizerTrackPix + "%%=Format(Now(), 'MMddyyyyhhmmss')=%%\?\"\>\<IMG SRC=\"" + pfizerTrackURL + "%%=Format(Now(), 'MMddyyyyhhmmss')=%%\?\" BORDER=0 WIDTH=\"1\" HEIGHT=\"1\"\>\<\/A\>";

                //alert('Pixel: ' + pfizerButtons[j].value + "," + pfizerTrackPix + "," + pfizerTrackURL);

            }

            else if ( (pfizerButtons[j].checked) && (pfizerButtons[j].value == 'No') ) {
                pfizerPixel = "";
            }
        }




        document.getElementById('newSplit').textContent ="\<body bgcolor=\"#ffffff\" topmargin=\"0\" leftmargin=\"0\" marginheight=\"0\" marginwidth=\"0\" style=\"-webkit-font-smoothing: antialiased;width:100% \!important;background:#ffffff;-webkit-text-size-adjust:none;\"\>\<table width=\"650\" border=\"0\" align=\"center\" cellpadding=\"0\" cellspacing=\"0\" class=\"table\"\>\<tr\>\<td valign=\"top\"\>\<img style=\"display:block;\" height=\"15\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"5\" bgcolor=\"#006699\" style=\"font-size:1px; line-height:5px;\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td width=\"5\" bgcolor=\"#006699\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<td valign=\"top\"\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td valign=\"top\"\>\<img src=\"" +hdrSpec+ "\" id=\"hdrImage\" class=\"header\" width=\"640\" height=\"55\" alt=\"\" style=\"display:block;\"\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"10\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td align=\"left\"\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td width=\"30\" class=\"padding\"\>&nbsp;\<\/td\>\<td\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"font-family:Arial, Helvetica, sans-serif; color:#000000; font-size:14px;\"\>\<tr\>\<td height=\"20\" class=\"hide\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img\.medscapestatic\.com\/pi\/global\/ornaments\/spacer\.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td align=\"left\" style=\"font-size:10px;\"\>\<!--MAIN ARTICLES BEGIN--\>\<font style=\"font-size:18px; font-weight:bold;\" class=\"headertext\"\>Top Articles on " + cleanTopic + "\<\/font\>\<table width=\"100%\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\"\>\<tr\>\<td height=\"10\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>"+ desktopAd + "\<a href=\"" + cleanURL[0] + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\"\>" + cleanTitle[0] + "\<\/a\>\<br\/\>\<font class=\"teaser\" style=\"font-size:14px; color:#666666;\"\>" + cleanTeaser[0] + "\<\/font\>\<br\/\>\<font class=\"cite\" style=\"font-size:12px; color:#666666;\"\>\<em\>" + cleanCitation[0] + "\<\/em\>\<\/font\>\<br\/\>\<br\/\>\<a href=\"" + cleanURL[1] + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\"\>" + cleanTitle[1] + "\<\/a\>\<br\/\>\<font class=\"teaser\" style=\"font-size:14px; color:#666666;\"\>" + cleanTeaser[1] + "\<\/font\>\<br\/\>\<font class=\"cite\" style=\"font-size:12px; color:#666666;\"\>\<em\>" + cleanCitation[1] + "\<\/em\>\<\/font\>\<br\/\>\<br\/\>\<a href=\"" + cleanURL[2] + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\"\>" + cleanTitle[2] + "\<\/a\>\<br\/\>\<font class=\"teaser\" style=\"font-size:14px; color:#666666;\"\>" + cleanTeaser[2] + "\<\/font\>\<br\/\>\<font class=\"cite\" style=\"font-size:12px; color:#666666;\"\>\<em\>" + cleanCitation[2] + "\<\/em\>\<\/font\>\<br\/\>\<br\/\>\<a href=\"" + cleanURL[3] + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\"\>" + cleanTitle[3] + "\<\/a\>\<br\/\>\<font class=\"teaser\" style=\"font-size:14px; color:#666666;\"\>" + cleanTeaser[3] + "\<\/font\>\<br\/\>\<font class=\"cite\" style=\"font-size:12px; color:#666666;\"\>\<em\>" + cleanCitation[3] + "\<\/em\>\<\/font\>\<br\/\>\<br\/\>\<a href=\"" + cleanURL[4] + "\?src=nl_crb&uac=%%UAC%%&impID=%%JobID%%&faf=1\" style=\"color:#006699; font-size:14px; font-weight:bold; text-decoration:none;\" class=\"link\"\>" + cleanTitle[4] + "\<\/a\>\<br\/\>\<font class=\"teaser\" style=\"font-size:14px; color:#666666;\"\>" + cleanTeaser[4] + "\<\/font\>\<br\/\>\<font class=\"cite\" style=\"font-size:12px; color:#666666;\"\>\<em\>" + cleanCitation[4] + "\<\/em\>\<\/font\>"+ mobileAd +"\<!--MAIN ARTICLES END--\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<td width=\"30\" class=\"padding\"\>&nbsp;\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"20\" class=\"hide\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<td width=\"5\" bgcolor=\"#006699\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>\<\/td\>\<\/tr\>\<tr\>\<td bgcolor=\"#0b476b\"\>\<img src=\"http:\/\/img.medscapestatic.com\/pi\/features\/newsletters\/crb\/template\/footer_crb.gif\" class=\"footer\" width=\"650\" height=\"25\" alt=\"\" style=\"display:block;\"\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"20\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<tr\>\<td align=\"center\" valign=\"top\" class=\"footertext\" style=\" text-align:center; font-family:Arial, Helvetica, sans-serif; font-size:11px; color:#333333;\"\>\<A href=\"https:\/\/profreg.medscape.com\/px\/forgotpassword.do\" style=\"text-decoration:none; color:#333333; font-size:12px;\" class=\"footertext\"\>Username and Password Assistance\<\/A\>\<font style=\"font-size:12px;\" class=\"footertext\"\>&nbsp;&nbsp;|&nbsp;&nbsp;\<\/font\>\<A href=\"http:\/\/www.medscape.com\/public\/help\" style=\"text-decoration:none; color:#333333; font-size:12px;\" class=\"footertext\"\> Medscape Member Support\<\/A\>\<font style=\"font-size:12px;\" class=\"footertext\"\>&nbsp;&nbsp;|&nbsp;&nbsp;\<\/font\>\<A href=\"http:\/\/www.medscape.com\/public\/privacy\" style=\"text-decoration:none; color:#333333; font-size:12px;\" class=\"footertext\"\>Privacy Policy\<\/A\>\<br\>\<br\>\<A href=\"https:\/\/profreg.medscape.com\/px\/optout.do\?serv=1&chan=13&info=%%EMAIL_ADDRESS%%&guid=%%ENCRYPTED_GUID%%&glob=0&prod=1013\" style=\"text-decoration:none; color:#333333;\"\>Unsubscribe from this newsletter\<\/A\>&nbsp;&nbsp;|&nbsp;&nbsp;\<A href=\"https:\/\/profreg.medscape.com\/px\/optout.do\?serv=1&chan=13&info=%%EMAIL_ADDRESS%%&guid=%%ENCRYPTED_GUID%%&glob=1&prod=1013\" style=\"text-decoration:none; color:#333333;\"\>Unsubscribe from all Medscape from WebMD newsletters\<\/A\>\<br\>\<br\>\<span class=\"applelinks\" style=\"color:#666666;\"\>You are receiving this communication because you are a registered member of Medscape.\<br\>The email address associated with your membership is \<A href=\"mailto:%%EMAIL_ADDRESS%%\" style=\"text-decoration:none; color: #666666; font-family:arial; font-size:11px;\" class=\"footertext\"\>%%EMAIL_ADDRESS%%\<\/A\>.\<br\>\<br\>Medscape from WebMD, 111 Eighth Avenue, New York, NY 10011\<\/span\>\<\/td\>\<\/tr\>\<tr\>\<td height=\"20\"\>\<img style=\"display:block;\" height=\"1\" src=\"http:\/\/img.medscapestatic.com\/pi\/global\/ornaments\/spacer.gif\" width=\"1\" border=\"0\" alt=\"\"\>\<\/td\>\<\/tr\>\<\/table\>"+ pfizerPixel + "\<custom name=\"opencounter\" type=\"tracking\"\>\<\/body\>";




        document.getElementById('newSplit').style.width = 'auto';
        document.getElementById('newSplit').style.height = 'auto';




    }

    var genButton = document.getElementById('generate');
    genButton.onclick = caeGenerate;

/*generateHTML function area is working*/



/*eraseDiv is working */

    function eraseDiv() {


        var displayField = document.getElementById('newSplit');

        /*Reset the display area to an empty square.*/
        displayField.innerText = " ";

        var divAd = document.getElementById('revealAd');
        divAd.style.visibility = 'hidden';

        var divPfizer = document.getElementById('revealPfizer');
        divPfizer.style.visibility = 'hidden';

        var form = document.getElementById('generateForm');

        /*Reset form values.*/
        form.reset();

        /*Reset the display area size to the original values.*/
        displayField.style.width = "600px";
        displayField.style.height = "400px";

    }

    var resetButton = document.getElementById('resetButton');
    resetButton.onclick = eraseDiv;

/*eraseDiv is working */





})();



