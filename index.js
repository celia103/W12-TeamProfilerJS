const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

//choose what to add
const teamMembers = [];

function menu() {
	inquirer
		.prompt([
			{
				type: "list",
				name: "choice",
				message: "What would you like to do?",
				choices: ["Add a manager", "Add an engineer", "Add an intern", "Finish"],
			},
		])
		.then((answer) => {
			switch (answer.choice) {
				case "Add a manager":
					promptManager();
					break;
				case "Add an engineer":
					promptEngineer();
					break;
				case "Add an intern":
					promptIntern();
					break;
				case "Finish":
					// Generate HTML and write to file
					const html = render(teamMembers);
					// Write to file
					writeToFile(outputPath, html);
					break;
				default:
					break;
			}
		});
}

// array of questions for add a manager
function promptManager() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Enter the team manager's name:",
			},
			{
				type: "input",
				name: "id",
				message: "Enter the team manager's employee ID:",
			},
			{
				type: "input",
				name: "email",
				message: "Enter the team manager's email address:",
			},
			{
				type: "input",
				name: "officeNumber",
				message: "Enter the team manager's office number:",
			},
		])
		.then((answers) => {
			const manager = new Manager(
				answers.name,
				answers.id,
				answers.email,
				answers.officeNumber
			);
			teamMembers.push(manager);
			menu();
		});
}

// array of questions for add a engineer
function promptEngineer() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Enter the engineer's name:",
			},
			{
				type: "input",
				name: "id",
				message: "Enter the engineer's employee ID:",
			},
			{
				type: "input",
				name: "email",
				message: "Enter the engineer's email address:",
			},
			{
				type: "input",
				name: "github",
				message: "Enter the engineer's GitHub username:",
			},
		])
		.then((answers) => {
			const engineer = new Engineer(
				answers.name,
				answers.id,
				answers.email,
				answers.github
			);
			teamMembers.push(engineer);
			menu();
		});
}

// array of questions for add a intern
function promptIntern() {
	inquirer
		.prompt([
			{
				type: "input",
				name: "name",
				message: "Enter the intern's name:",
			},
			{
				type: "input",
				name: "id",
				message: "Enter the intern's employee ID:",
			},
			{
				type: "input",
				name: "email",
				message: "Enter the intern's email address:",
			},
			{
				type: "input",
				name: "school",
				message: "Enter the intern's school:",
			},
		])
		.then((answers) => {
			const intern = new Intern(
				answers.name,
				answers.id,
				answers.email,
				answers.school
			);
			teamMembers.push(intern);
			menu();
		});
}

// function to write HTML file
function writeToFile(outputPath, data) {
	fs.writeFile(outputPath, data, (err) => {
		if (err) {
			console.error("Error writing to file:", err);
		} else {
			console.log("Team HTML created successfully!");
		}
	});
}

// Start the application
menu();
