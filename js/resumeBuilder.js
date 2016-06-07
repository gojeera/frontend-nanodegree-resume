var bio = {
	"name" : "Ysmael Castillo",
	"role":	"Front-End Web Dev",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "ysmael.castillo@gmail.com",
		"location": "Toronto, ON"
	},
	"welcomeMessage": "Hey",
	"skills": ["playing video games", "sleeping", "eating", "computer stuff"],
	"bioPic": "http://placehold.it/150x150"
};

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%", mobile);
$("#topContacts").append(formattedMobile);

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedEmail);

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%", _location);
$("#topContacts").append(formattedLocation);

var pic = bio.bioPic;
var formattedBioPic = HTMLbioPic.replace("%data%", pic);
$("#header").append(formattedBioPic);

var welcomeMessage = bio.welcomeMessage;
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", welcomeMessage);
$("#header").append(formattedWelcomeMsg);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var skills = bio.skills;
	var formattedSkills = HTMLskills.replace("%data%", skills[0]);	
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", skills[1]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", skills[2]);
	$("#skills").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", skills[3]);
	$("#skills").append(formattedSkills);
}

var work = [
	{
		"employer" : "Virgin Mobile Canada",
		"title" : "Customer Service Rep",
		"dates" : "2011 - Current",
		"location": "Toronto, ON",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		"employer" : "Dynamex",
		"title" : "Customer Service Rep/Dispatcher/Warehouse Manager/Business Adminstrator",
		"dates" : "2005 - 2011",
		"location": "Mississauga, ON",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}
];

function displayWork () {
	for (job in work) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork ();

var projects = [
	{
		"title" : "1st",
		"dates" : "2016",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"projectImage" : "http://placehold.it/150x150"
	},
	{
		"title" : "2nd",
		"dates" : "2016",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"projectImage" : "http://placehold.it/150x150"
	}
];

$("#projects").append(HTMLprojectStart);
var title = projects[0].title;
var formattedTitle = HTMLprojectTitle.replace("%data%", title);
var dates = projects[0].dates;
var formattedDates = HTMLprojectDates.replace("%data%", dates);
var description = projects[0].description;
var formattedDescription = HTMLprojectDescription.replace("%data%", description);
var pic = projects[0].projectImage;
var formattedImage = HTMLprojectImage.replace("%data%", pic);
$(".project-entry").append(formattedTitle);
$(".project-entry").append(formattedDates);
$(".project-entry").append(formattedDescription);
$(".project-entry").append(formattedImage);

var title = projects[1].title;
var formattedTitle = HTMLprojectTitle.replace("%data%", title);
var dates = projects[1].dates;
var formattedDates = HTMLprojectDates.replace("%data%", dates);
var description = projects[1].description;
var formattedDescription = HTMLprojectDescription.replace("%data%", description);
var pic = projects[1].projectImage;
var formattedImage = HTMLprojectImage.replace("%data%", pic);
$(".project-entry").append(formattedTitle);
$(".project-entry").append(formattedDates);
$(".project-entry").append(formattedDescription);
$(".project-entry").append(formattedImage);

var education = {
	"school" : [
		{
			"name" : "York University",
			"degree" : "Bachelor of Arts",
			"dates" : "2000 - 2004",
			"location" : "North York, ON",
			"major" : "Business Adminstrator",
			"url" : "http://www.yorku.ca/index.html"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Front-End Web Developer",
			"school" : "Udacity",
			"dates" : "2016",
			"url" : "http://www.udacity.com"
		}
	]
};

$("#education").append(HTMLschoolStart);
var school = education.school[0].name;
var formattedName = HTMLschoolName.replace("%data%", school);
var degree = education.school[0].degree;
var formattedDegree = HTMLschoolDegree.replace("%data%", degree);
var dates = education.school[0].dates;
var formattedDates = HTMLschoolDates.replace("%data%", dates);
var _location = education.school[0].location;
var formattedLocation = HTMLschoolLocation.replace("%data%", _location);
var major = education.school[0].major;
var formattedMajor = HTMLschoolMajor.replace("%data%", major);
var url = education.school[0].url;
var formattedUrl = HTMLschoolURL.replace("%data%", url);
$(".education-entry").append(formattedName + formattedDegree);
$(".education-entry").append(formattedDates);
$(".education-entry").append(formattedLocation);
$(".education-entry").append(formattedMajor);
$(".education-entry").append(formattedUrl);

$(".education-entry").append(HTMLonlineClasses);
var course = education.onlineCourses[0].title;
var formattedTitle = HTMLonlineTitle.replace("%data%", course);
var school = education.onlineCourses[0].school;
var formattedSchool = HTMLonlineSchool.replace("%data%", school);
var dates = education.onlineCourses[0].dates;
var formattedDates = HTMLonlineDates.replace("%data%", dates);
var url = education.onlineCourses[0].url;
var formattedUrl = HTMLonlineURL.replace("%data%", url);
$(".education-entry").append(formattedTitle + formattedSchool);
$(".education-entry").append(formattedDates);
$(".education-entry").append(formattedUrl);

function inName(name) {
	var name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return(name[0] + " " + name[1]);
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);