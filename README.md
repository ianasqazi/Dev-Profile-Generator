# **Dev-Profile-Generator**
Get information about any profile on Github by providing the github username.

> AS A product manager
>
> I WANT a developer profile generator
>
> SO THAT I can easily prepare reports for stakeholders

## Repository 

Click the link below to check the repository :

[GitHub URL : https://github.com/ianasqazi/Dev-Profile-Generator](https://github.com/ianasqazi/Dev-Profile-Generator)

## Preview

![screenrecording_DevProfile](/sample/screenrecording_DevProfile.gif)

## Requirements

For testing, you will need Node.js and node global package, and also the following dependency packages installed in your environement.  

### Node

 Just go on [official Node.js website](https://nodejs.org/) and download the installer.

Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).  

To check if its already installed just type the following commands to verify :

```bash
node --version
v12.6.0

git --version
git version 2.21.0 (Apple Git-122)

npm --version
6.13.1
```

### NPM Packages

- Inquirer
- Axios
- Puppeteer

## Running the Application

Run the following commands in your terminal window 

```bash
git clone https://github.com/ianasqazi/Dev-Profile-Generator.git

cd Dev-Profile-Generator

npm install
```

All packages will be installed and now run the application with the command below : 

```bash
node index.js
```

## PDF Output

![screenshot](sample/screenshot.png)
