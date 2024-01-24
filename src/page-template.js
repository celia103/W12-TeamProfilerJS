// creates the team
const generateTeam = (team) => {
	// creates the manager html
	const generateManager = (manager) => {
		return `
        <article class="col-xs-12 col-md-4 mb-4">
            <div class="card employee-card h-100">
                <header class="card-header">
                    <h2 class="card-name">${manager.getName()}</h2>
                    <h3 class="card-title-1"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
                </header>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </article>
        `;
	};

	// creates the html for engineers
	const generateEngineer = (engineer) => {
		return `
        <article class="col-xs-12 col-md-4 mb-4">
            <div class="card employee-card h-100">
                <header class="card-header">
                    <h2 class="card-name">${engineer.getName()}</h2>
                    <h3 class="card-title-2"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
                </header>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
        </article>
        `;
	};

	// creates the html for interns
	const generateIntern = (intern) => {
		return `
        <article class="col-xs-12 col-md-4 mb-4">
            <div class="card employee-card h-100">
                <header class="card-header">
                    <h2 class="card-name">${intern.getName()}</h2>
                    <h3 class="card-title-3"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
                </header>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            </div>  
        </article>
        `;
	};

	const html = [];

	html.push(
		team
			.filter((employee) => employee.getRole() === "Manager")
			.map((manager) => generateManager(manager))
	);
	html.push(
		team
			.filter((employee) => employee.getRole() === "Engineer")
			.map((engineer) => generateEngineer(engineer))
			.join("")
	);
	html.push(
		team
			.filter((employee) => employee.getRole() === "Intern")
			.map((intern) => generateIntern(intern))
			.join("")
	);

	return html.join("");
};

// exports function to generate entire page
module.exports = (team) => {
	return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <header class="container-fluid">
        <div class="row">
        <div class="team-heading col-12 jumbotron mb-3">
            <nav>
            <div class="theme-switch-wrapper">
                <i class="fas fa-sun"></i>
                <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" />
                <div class="slider round"></div>
                </label>
                <i class="fas fa-moon"></i>
            </div>
            </nav> 
            <h1 class="text-center">My Team</h1>
        </div>    
    </header>

    <main class="container">
        <section class="row justify-content-center">
            <div class="team-area d-flex flex-wrap justify-content-center"> 
                ${generateTeam(team)}
            </div>
        </section>
    </main>

    <script>
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
      
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
        else {        document.documentElement.setAttribute('data-theme', 'light');
              localStorage.setItem('theme', 'light');
        }    
    }
    
    toggleSwitch.addEventListener('change', switchTheme, false);
    </script>
</body>
</html>
    `;
};
