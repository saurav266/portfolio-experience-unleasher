
# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/fdebdb66-fb56-45a9-a9dd-1abc85e6519a

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/fdebdb66-fb56-45a9-a9dd-1abc85e6519a) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with .

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

### Deploy with Lovable
Simply open [Lovable](https://lovable.dev/projects/fdebdb66-fb56-45a9-a9dd-1abc85e6519a) and click on Share -> Publish.

### Deploy with GitHub Pages
1. Create a GitHub repository for your project
2. Push your code to the repository
3. Install the gh-pages package:
   ```
   npm install gh-pages --save-dev
   ```
4. Add these scripts to your package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
5. Deploy your site:
   ```
   npm run deploy
   ```
6. Configure GitHub Pages in your repository settings to use the gh-pages branch

### Deploy with Netlify
1. Fork or clone the repository to your GitHub account
2. Sign up for a free Netlify account if you don't have one
3. In Netlify, click "Add new site" > "Import an existing project"
4. Select your GitHub repository
5. In the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## I want to use a custom domain - is that possible?

If you're using GitHub Pages or Netlify, you can set up a custom domain through their interface. For Lovable deployments, we don't support custom domains (yet). Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
