"use client"

import { useState } from 'react';

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState('Free');

  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-500 text-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-20">
        <h1 className="text-5xl font-extrabold mb-6">
          Effortlessly Create Content for All Your Platforms
        </h1>
        <p className="text-xl mb-8">
          Facebook, Instagram, LinkedIn, YouTube & More — One Tool to Rule Them All.
        </p>
        <button className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-300">
          Start Creating for Free
        </button>
      </section>

      {/* Key Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">AI-Powered Creativity at Your Fingertips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Facebook & Instagram Posts',
                description: 'Generate high-engagement social media posts with captions and hashtags.',
              },
              {
                title: 'TikTok & YouTube Videos',
                description: 'AI-optimized video scripts and content ideas to go viral.',
              },
              {
                title: 'YouTube SEO & Blog Posts',
                description: 'Boost search rankings with AI-generated keywords, tags, and blog content.',
              },
              {
                title: 'LinkedIn & Professional Posts',
                description: 'Tailored content for your professional brand and audience.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white text-black rounded-lg shadow-lg p-6 hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="bg-gray-100 text-black py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Create Content for All Your Favorite Platforms</h2>
          <div className="flex justify-center space-x-8">
            {['Facebook', 'X', 'Instagram', 'YouTube', 'LinkedIn', 'TikTok'].map((platform, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-full shadow-lg hover:bg-gray-300 transition-colors duration-300"
              >
                <span className="font-bold">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What Our Users Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Amazing!', 'Helped me go viral!', 'Saved me hours!'].map((testimonial, idx) => (
              <div key={idx} className="bg-white text-black rounded-lg shadow-lg p-6">
                <p className="text-xl italic">"{testimonial}"</p>
                <span className="block mt-4 font-bold">— User {idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 text-black py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">How It Works in 3 Simple Steps</h2>
          <div className="flex flex-col md:flex-row md:justify-between space-y-8 md:space-y-0">
            {[
              { step: 'Select a Platform', description: 'Choose from Facebook, Instagram, YouTube, and more.' },
              { step: 'Describe Your Content', description: 'Tell the AI what your post is about.' },
              { step: 'Generate & Share', description: 'Your AI-generated content is ready to publish.' },
            ].map((step, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">{step.step}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Flexible Plans for Every Creator</h2>
          <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Free Plan</h3>
              <p className="mb-6">Get started with basic features and limited content generation.</p>
              <button className="px-6 py-3 bg-gray-300 rounded-full cursor-not-allowed">Current Plan</button>
            </div>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Pro Plan</h3>
              <p className="mb-6">Unlock all features, unlimited content, and priority support.</p>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Take Your Content to the Next Level</h2>
        <p className="text-xl mb-8">Start generating professional-grade content with ease today!</p>
        <button className="px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-300 transition-all duration-300">
          Sign Up & Create for Free
        </button>
      </section>
    </div>
  );
}
