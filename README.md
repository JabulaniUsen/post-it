PostIt - AI-Powered Content Generator
PostIt is an AI-powered content generator designed to help content creators, influencers, digital marketers, and businesses streamline their social media and SEO content creation across platforms like Facebook, X (formerly Twitter), Instagram, TikTok, YouTube, and more.

Features
AI-Powered Content Creation: Generate tailored content for multiple platforms, including blogs, YouTube SEO, and more.
Niche & Keyword Research: Get recommendations for niche selection and keyword optimization.
Meme Generator: Create custom memes for enhanced engagement.
User Authentication: Seamless sign-up and login using Clerk.
Responsive Design: Built with Tailwind CSS for a responsive and modern user interface.
Database: Supabase PostgreSQL with Drizzle ORM.
Gemini Integration: Enhanced AI capabilities for superior content generation.
Tech Stack
Frontend: Next.js, React.js, Tailwind CSS
Authentication: Clerk
Database: Supabase PostgreSQL with Drizzle ORM
Integrations: Gemini, Meme Generator API (Imgflip)
Getting Started
Prerequisites
Node.js
Supabase Project
Clerk API keys
Installation
Clone the repository:

git clone https://github.com/your-repo/PostIt.git
cd PostIt
Install dependencies:

npm install
Set up environment variables: Create a .env.local file with the following:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api

NEXT_PUBLIC_CLERK_API_KEY=your_clerk_api_key
Run the app:

npm run dev
Usage
Sign up or log in using Clerk.
Generate content by selecting a platform (e.g., Facebook, Instagram).
Use the meme generator for custom meme creation.
Manage and store your content seamlessly with Supabase.
Contributing
Feel free to open issues or submit pull requests for improvements.

License
This project is licensed under the MIT License.
