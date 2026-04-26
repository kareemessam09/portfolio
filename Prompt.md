DONT MAKE IT LIKE IT IS AI GENERATED!!!!!!!

You are an expert Frontend Engineer and UX/UI Designer specializing in minimalist, high-performance web applications. Your task is to generate the complete code for a single-page React.js developer portfolio. 

The aesthetic must be "fancy but minimal"—think high contrast, purposeful whitespace, clean typography, and subtle interactions. It needs to look like a premium engineering portfolio that bridges the gap between a visual Mobile Developer and a structural Backend Engineer.

### Tech Stack Requirements:
1.  **Framework:** React.js (Functional components, Hooks).
2.  **Styling:** Tailwind CSS (use utility classes for a clean, modern aesthetic).
3.  **Animations:** Framer Motion (for subtle fade-ins, scroll reveals, and smooth page transitions).
4.  **Icons:** Lucide React or React Icons.
5.  **Architecture:** Component-based structure with a clear separation of UI and data (use a central `data.js` or `data.json` file for all text/project content so I can easily update it).

### Design System & Vibe:
* **Color Palette:** A sleek Dark Mode aesthetic. Pure black (`#000000`) or deep slate (`#0F172A`) backgrounds, with stark white (`#FFFFFF`) text, and a single subtle accent color (like a muted electric blue or emerald green) for hover states and links.
* **Typography:** Use a premium sans-serif font like 'Inter' for headings, and a monospace font like 'JetBrains Mono' for technical tags and small labels.
* **Layout:** Use a grid-based or "Bento Box" style layout for projects and experiences to keep things structured and scannable without looking cluttered. 

### Page Sections to Build:

1.  **Navigation Bar (Sticky):** * Minimal logo/initials on the left.
    * Links to: Work, Experience, Blogs, Contact.
    * A link to my GitHub and LinkedIn.

2.  **Hero Section:** * A bold, punchy headline that states my identity as a Software Engineer focused on Android Development and Backend Architecture.
    * A short, impactful subheadline.
    * Two clean buttons: "View Work" and "Download Resume".

3.  **Experience Section:**
    * A vertical timeline or clean list layout displaying my roles.
    * Include company, title, dates, and bullet points of impact.
    * Parse the provided CV (at the bottom of this prompt) to populate this section.

4.  **Work / Projects Section (The Core):**
    * Display projects as clean, interactive cards.
    * Each card must include: Project Title, a short description, a row of Monospace tags for the tech stack (e.g., Kotlin, Jetpack Compose, Spring Boot, Docker), and links to GitHub/Live Demo.
    * Make sure the layout allows me to seamlessly feature mobile apps (like FuelFlow and Studyfy) alongside backend architectures (like Elbat-server).

5.  **Blogs / Writing Section:**
    * A section dedicated to my Medium articles.
    * Since Medium RSS can be tricky with pure client-side React due to CORS, create a clean UI component that maps over a static array of objects in the `data.js` file containing the `title`, `date`, `summary`, and `medium_link`. Make the cards look like elegant publishing previews.

6.  **Contact Section:**
    * A minimalist footer.
    * Include a simple call-to-action (e.g., "Let's build something.")
    * An email link (`mailto:`) and social/developer links.

### Execution Instructions for the AI:
1.  Start by providing the folder structure and any necessary npm install commands.
2.  Provide the `data.js` file first, populated with the information from my CV.
3.  Generate the React components step-by-step, starting with the layout and then the individual sections. 
4.  Ensure all code is clean, well-commented, and ready to be pasted into a standard `create-react-app` or Vite environment.

Here is my CV to populate the data structure:
@contextScopeItemMention