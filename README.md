# Arceus Site: Powered by Arceus.tech
## Developed by Thawshi Srikanth

Welcome to the Arceus Site repository! This project has been developed by Thawshi Srikanth and powered by Arceus.tech. Below, you'll find important information about the project structure and available commands to help you get started.

## 🚀 Project Structure

The project follows a specific structure to organize its code and assets effectively:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

### `public/`
This directory is meant for static assets such as images, fonts, and other files that don't require processing by your build tools. You can place any assets that need to be directly served to the client in this folder.

### `src/pages/`
This is where the heart of your application resides. The `src/pages/` directory contains `.astro` (or `.md`) files that define the different pages of your website. Each file in this directory represents a specific route within your application.

### `src/components/`
While not explicitly mentioned in the project structure, you can create and organize your Astro/React/Vue/Svelte/Preact components in the `src/components/` directory. This is a common practice to keep your code modular and maintainable.

## 🧞 Commands

To efficiently work with the Arceus Site project, you can use the following commands from your terminal. Make sure to run these commands from the root directory of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs project dependencies                    |
| `npm run dev`             | Starts a local development server at `localhost:3000` for testing and previewing your site   |
| `npm run build`           | Builds your production-ready site in the `./dist/` directory   |
| `npm run preview`         | Previews your build locally before deploying     |
| `npm run astro ...`       | Run various CLI commands like `astro add`, `astro check`, and more   |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🌟 Get Started

1. Clone this repository to your local machine.
2. Navigate to the project's root directory in your terminal.
3. Run `npm install` to install the project dependencies.
4. Use the available commands to develop, build, and preview your site.
5. Customize the project according to your needs.

Feel free to reach out if you have any questions or need further assistance. Happy coding! 🚀