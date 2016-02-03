/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*var name = "Mohamed Ghazi AMOR";
var role = "Embedded Software Developer"
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role); 
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/


/*-----------------------------------Object 1 ---------------------------------*/
var bio = {
	"name":"Mohamed Ghazi AMOR",
	"role":"Embedded Systems Developer",
	"welcomeMessage":"Welcome to my profile",
	"contacts":
	{
		"mobile":"00216 23 757 033",
		"email": "Mohamed.Ghazi.AMOR@gmail.com",
		"github":"GhaziAMOR",
		"twitter":"GhaziAMOR",
		"location":"Tunis"
	},
	"Skills" : ["Java","C","6lowPan","RPL","IPv6","ContikiOs","VoIP","Embedded Systems"]	
}


/*----------------------------------------------Object 2 ------------------------------*/
var projects = {
	"project": [{
		"title": "Smart Home",
		"dates": "Mars-May 2015",
		"description": "Home Automation System controlled by Voice",
		"images": "images/pic.jpg"
	}, {
		"title": "Android Application",
		"dates": "Mars-May 2014",
		"description": "a game between two players",
		"images": "images/pic.jpg"
	}]
}


/*-------------------------------------------Object 3 -----------------------*/
var work = {
	"jobs": [{
		"employer": "CISTER",
		"title": "Final Graduation Internship",
		"location": "Ench'allah Porto-Portugal",
		"dates": "February 2016 - June 2016",
		"description": "IoT Cloud architecture integration for large Scale application"
	}, {
		"employer": "Hexabyte",
		"title": "Intern",
		"location": "Tunis",
		"dates": "July-August 2015",
		"description": "Implementation of a VoIP architecture"
	}]
}




/*--------------------------------------Object 4 ----------------------*/
var education = {
	"schools": [{
		"name": "INSAT",
		"city": "Tunis",
		"years": "2011-2016",
		"degree": "Networking engineering",
		"major": ["Networking", "Telecommunications"],
		"minors": ["Embedded Systems", "Computer Science"],
		"url": "www.insat.rnu.tn"
	}, {
		"name": "Ksibet College",
		"City": "Ksibet El Mediouni",
		"years": "2008-2011",
		"degree": "Bac",
		"major": ["Mathematic", "Physics"],
		"minors": ["French", "English"],
		"url": " "

	}],

	"onlineCourses": [{
		"title": "Embedded Systems 'Shape the World'",
		"School": "EdX",
		"dates": "February - Avril 2015",
		"url": ""
	}]
}
/*
$("#main").prepend(bio.Picture);
$("#main").prepend(bio.contactInfo);
$("#main").prepend(bio.role);
$("#main").prepend(bio.name);
$("#main").append(work.position);
$("#main").append(education.name);
*/
