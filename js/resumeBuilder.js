//bio
var bio = {
	"name" : "Ysmael Kurt Castillo",
	"role" : "Front-End Web Dev",
	"contacts" : {
		"mobile" : "(555) 555-5555",
		"email" : "ysmael.castillo@gmail.com",
		"github" : "https://github.com/gojeera",
		"location" : "Toronto, ON"
	},
	"welcomeMessage" : "Yo.",
	"skills" : ["stuff", "more stuff", "even more stuff"],
	"biopic" : "http://placehold.it/150x150"
};

function displayBio() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedWelcomeMsg);
	$("#header").append(formattedBioPic);
	
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	
	$("#header").append(HTMLskillsStart);
	for (i = 0; i < bio.skills.length; i++) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		
		$("#skills").append(formattedSkills);
	}
}
displayBio();

//work
var work = {
	"jobs" : [{
		"employer" : "Current Employer",
		"title" : "not the boss",
		"dates" : "2010 - Current",
		"location" : "Toronto, ON",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}, {
		"employer" : "Previous Employer",
		"title" : "not the boss",
		"dates" : "2005 - 2010",
		"location" : "Mississauga, ON",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	}]
};

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork ();

//projects
var projects = {
	"projects" : [{
		"title" : "Project 1",
		"dates" : "2016",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"images" : ["http://placehold.it/150x150", "http://placehold.it/150x150"]
	}, {
		"title" : "Project 2",
		"dates" : "2016",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"images" : ["http://placehold.it/150x150", "http://placehold.it/150x150"]
	}]
}

function displayProjects() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		
		if(projects.projects[project].images.length > 0) {
			for(image in projects.projects[project].images) {
				var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				
				$(".project-entry:last").append(formattedImages);
			}
		}
	}

}
displayProjects() ;

//education
var education = {
	"schools" : [{
		"name" : "York University",
		"location" : "North York, ON",
		"degree" : "Bachelor of Arts",
		"majors" : "Business Administration",
		"dates" : "2001 - 2005", 
		"url" : "http://www.yorku.ca/index.html"
	}, {
		"name" : "Made Up School",
		"location" : "Atlanitc Ocean",
		"degree" : "Bachelor of Fish",
		"majors" : "Sea Creatures",
		"dates" : "2001 - 2005", 
		"url" : "https://www.ripleyaquariums.com/canada/"
	}],
	"onlineCourses" : [{
		"title" : "Front-End Web Developer",
		"school" : "Udacity",
		"dates" : "2016",
		"url": "https://www.udacity.com/"
	}, {
		"title" : "Video Game Nerd",
		"school" : "SIFTD",
		"dates" : "2016",
		"url": "http://siftd.net/"
	}]
};
	
		
