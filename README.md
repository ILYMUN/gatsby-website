## 🚀 Quick start

1. **Prerequisites**

   Get npm, if you don't already have it, and install gatsby. Also install git and configure it.

   ```sh
   npm install -g gatsby-cli
   ```

2. **Start developing.**

   Create a directory on your computer and initialize git, then pull the code with these commands :

   ```sh
   git init
   git remote add origin www.github.com/ILYMUN/gatsby-website
   git pull origin master
   ```

   Navigate into your new site’s directory and start it up.

   ```sh
   npm install
   npm run develop
   ```

3. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   Open the `gatsby-website` directory in your code editor of choice and edit `src/pages/index.js` or anything else. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── .github/workflows
    ├── .forestry
    ├── content
    ├── src
    ├── static
    ├── uploads
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── package-lock.json
    └── package.json


1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/.github/workflows`**: This directory contains the source code for the workflow that builds and deploys the website to the ilymun.github.io which is a Github Pages directory.

3.  **`/.forestry`**: This directory used to contain the website layout and configuration for Forestry, which is no longer up to date nor functional, and must be migrated to TinaCMS if possible.

4.  **`/content`**: This directory will contain all website's static content as which can be edited from [Forestry](https://forestry.io/). This content found in here is used to generate difference pages of the website.

5.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

6.  **`/static`**: This is where you should put any "static" files, such as css files, javascript files, and images.

7.  **`/uploads`**: This repository is used by Forestry, and should not be used by anything else in the website, if found in the code, redirect the source of the image to static.

8.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

9.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

10.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

11.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

12. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

13. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

## 💫 Deployment

Deployment is very simple. A GitHub action is run on every commit to master. This action will build the production version of the website from the latest master and deploys the changes to [ILYMUN/ilymun.github.io](https://github.com/ILYMUN/ilymun.github.io) which are then live at [ilymun.github.io/](https://ilymun.github.io/). The pipeline takes a couple of minutes to run, so changes are only live a couple minutes after changes are commited to the repository. No CI is run additionally to the Gatsby build tests.

## 🎓 Learning

### Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on their website](https://www.gatsbyjs.org/). Here are some places to start:

- **Starting with the [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [the Gatsby documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

### Forestry

This module no longer exists, so no need to learn it.
