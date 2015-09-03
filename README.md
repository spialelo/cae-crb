# cae-crb
A tool that generates the HTML for the body of the email, after the user inputs information.


####Backstory: 
I currently receive an Excel file with the top articles for each topic. The columns of information that I need from the file are: topic, url, title, teaser, and citation. I only use the top five articles, of the topic. 


####Goal: 
To find a way to speed up the production of the CAE HTML emails. Ads will have to be taken into consideration.

#####Status Update
-------------------

20150826 - Input and display of HTML are working.

20150827 - Switch case developed to pull in the header image. v. 1.0 of the tool is done. 

20150831 - Began working on a way to reduce the amount of copy/pasting the user has to do and made the header selection a drop down. This no longer requires the user to know the PSPEC or CSPEC values of the specialities. I also took into consideration of a possible ad or tracking pixel, that the email may have.