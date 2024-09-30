# PostIt - AI-Powered Content Generator

## Overview

**PostIt** is an AI-powered content generator designed to assist content creators, influencers, and digital marketers in generating engaging content for social media and SEO platforms. It streamlines the content creation process with features for niche selection, keyword optimization, and meme generation.

## Features

- Generate tailored content for platforms like Facebook, Instagram, TikTok, and YouTube.
- Conduct niche and keyword research to enhance SEO.
- Create custom memes for increased engagement.
- User-friendly interface built with a responsive design.
- Seamless authentication using Clerk for user management.

## Technologies Used

- **Next.js**: Framework for server-side rendering and building React applications.
- **React.js**: Library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Clerk**: Authentication service for user management.
- **Supabase**: Database management with PostgreSQL.
- **Drizzle ORM**: For efficient database interactions.
- **Gemini**: Integration for enhanced AI capabilities.
- **Imgflip API**: For meme generation functionality.

## Installation

1. **Download or clone this repository**:
   ```bash
   git clone https://github.com/yourusername/postit.git
   cd postit

2. **Set up environmental variables**:
   Create a .env.local file with the following variables:
   ```bash
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
    NEXT_PUBLIC_CLERK_API_KEY=your_clerk_api_key
3. **Run the application**:
   ```bash
       npm run dev


## Usage
Sign up or log in using Clerk.
Choose a platform (e.g., Facebook, Instagram) and generate content.
Use the meme generator to create custom memes.
Manage your content with Supabase for smooth storage and retrieval.
Contributing
We welcome contributions!
Feel free to open issues or submit pull requests to help improve the project.
