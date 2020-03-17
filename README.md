# SSW Right4Me

Right4Me allows the community to share information about products and services that meet specific disability needs. 
The website has been turned off for now, but we have a picture of it:
![Image of Right4Me Website](https://raw.githubusercontent.com/SSWConsulting/right4me/master/Right4MeSite.png)

## Background Story
Right4Me was built by SSW during the Microsoft Hack4Good event. Over two days, 14 teams, 
and around 70 people gathered at the University of NSW, in Sydney to explore the potential
of technology to help people living with a disability fulfil their potential.


[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/6B7SywxEiMk/0.jpg)](https://www.youtube.com/watch?v=6B7SywxEiMk)

Right4Me uses the latest technology stack including Visual Studio 2017, .NET Core 1.1, ASP.NET Core + SPA Services, Web API and Angular.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

1. Install the latest version of:
   * [Visual Studio 2017](https://www.visualstudio.com/downloads/)
   * [Microsoft .NET Core 1.1](https://www.microsoft.com/net/download/core)
   * [Node.js](https://nodejs.org/en/)
   * [npm](https://www.npmjs.com/)

2. Clone the repository
3. At the repo's root directory, restore the required NuGet packages by running:
    ```
	dotnet restore
    ```
4. Change directory to the WebUI project (\SSW.Right4Me.WebUI) and restore the Node dependencies by running:
	```
	npm install
	```
5. Install Webpack by running:
	```
	npm install -g webpack
	```
6. Rebuild your `wwwroot/dist/vendor.js` bundle:
	```
	webpack --config webpack.config.vendor.js
	```
7. Launch **Visual Studio 2017** and open the `Right4Me.sln` file
8. Press `CTRL + SHIFT + B` to build the solution


## Contributing

If you're interested in contributing to this project, that's great! There is a real need within the community for this site. You'll be working with some great 
developers and have the opportunity to use the latest and greatest technologies! We've already set up continuous deployment to Azure, and have taken care of 
asssociated costs so you will be free to focus on adding exciting new features or resolving pesky issues. 
[Click here](https://github.com/SSWConsulting/right4me/projects/1) to view the product backlog.

If you're planning to submit a pull request, and if it's more than a trivial fix (e.g., for a typo), it's usually a good idea first to file an issue describing 
what you're proposing to do and how it will work. Then you can find out if it's likely that such a pull request will be accepted, and how it fits into wider ongoing 
plans.

When your pull request is submitted, it will be reviewed by Jason. When it is accepted, it will be automatically deployed using our continuous deployment processes.

## Authors

* **Jason Taylor** - *Lead Creatologist* - [SSW Solution Architect](https://sharepoint.ssw.com.au/AboutUs/Employees/Pages/JasonTaylor.aspx)
* **Brendan Richards** - *The Linux Guy* - [SSW Solution Architect](https://sharepoint.ssw.com.au/AboutUs/Employees/Pages/Brendan.aspx)
* **Duncan Hunter** - *Angular Ninja* - [SSW Software Architect](https://sharepoint.ssw.com.au/AboutUs/Employees/Pages/DuncanHunter.aspx)
* **Thiago Passos** - *Lead Capoeira Instructor* - [SSW Solution Architect](https://sharepoint.ssw.com.au/AboutUs/Employees/Pages/Thiago.aspx)
* **Adam Cogan** - *The Coganator* - [SSW Chief Architect & Microsoft Regional Director](https://sharepoint.ssw.com.au/AboutUs/Employees/Pages/Adam.aspx)

See also the list of [contributors](https://github.com/sswconsulting/right4me/graphs/contributors) who participated in this project.


## Disclaimer
This project was built during a hackathon under tight timeframes and constraints.

> Here be dragons. Thou art forewarned!

Thank you.
