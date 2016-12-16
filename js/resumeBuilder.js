/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace('%data%','Lokendra Singh Chouhan');
var formattedRole = HTMLheaderRole.replace("%data%",'Quality Assurance Engineer');

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
var skills = ['Selenium Webdriver',"programming",'testing' ];
var bio = {'name':"Lokendra Singh Chouhan",
'role':'Quality Assurance',
'Contact Info':'+91-9552528557',
'picurl':'images/me.jpg',
'welcome message':"Hi !",
'skills':skills
};
bio["city"]='Pune'
bio['email']='lokendra91@gmail.com'

var work = {};
work.position="Graduate Test Engineer";
work.employer="Imagination Technologies";
work.years=1;

var education = {};
education["name"]="Acropolis Institute of Technology and Research";
education["years"]="";
education["city"]="";

$("#main").prepend(bio.name);
$('#main').append(bio.city);
