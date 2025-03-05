# 5SecondRule

A food safety timer web application built with Next.js, TailwindCSS, and React.

## Deployment to Vercel

This project is ready to be deployed to Vercel. Follow these steps:

1. Push this repository to GitHub:
   ```
   git remote add origin https://github.com/yourusername/5secondrule.git
   git branch -M main
   git push -u origin main
   ```

2. Visit [Vercel](https://vercel.com) and sign in with your GitHub account.

3. Click "Add New" > "Project" and select the 5secondrule repository.

4. Vercel will automatically detect the Next.js project and configure the build settings.

5. Click "Deploy" and wait for the deployment to complete.

6. Your site will be live at a URL like `https://5secondrule-yourusername.vercel.app`

## Using V0.dev with this Project

You can use V0.dev to enhance this project with AI-generated UI components:

1. Visit [V0.dev](https://v0.dev) and sign up if you haven't already.

2. Use V0.dev to generate new components by describing what you want in natural language.

3. Once a component is generated, you can:
   - Copy the code directly into your project
   - Customize it to match your project's styling
   - Integrate it with your existing components

4. Example prompt for V0.dev:
   ```
   Create a food timer component that includes:
   - A countdown display
   - Start/pause/reset buttons
   - Temperature input
   - Food type selection
   - Visual indicator when time is nearly up
   Make it match the pink/white color scheme of 5SecondRule
   ```

5. The generated components will use TailwindCSS and can be easily integrated with the shadcn/ui components already in the project.

## Project Structure

- `app/`: Next.js app router pages and layouts
- `components/`: Reusable React components
- `components/ui/`: UI components built with shadcn/ui
- `lib/`: Utility functions and helpers
- `public/`: Static assets

## Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
