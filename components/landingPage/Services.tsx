'use client';
import { LucideFileText, LucideVideo, LucideMessageCircle, LucideCheckCircle, LucideEdit, LucidePlusCircle } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
        <p className="text-center text-gray-600 mb-12">
          Discover a range of powerful tools designed to elevate your content creation experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:shadow-xl hover:-translate-y-2">
            <LucideFileText className="w-8 h-8 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Blog Post Generation</h3>
            <p className="text-gray-600">
              Generate engaging and high-quality blog posts in seconds, tailored to your audience.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:shadow-xl hover:-translate-y-2">
            <LucideVideo className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">YouTube SEO</h3>
            <p className="text-gray-600">
              Optimize your videos for search engines to reach a wider audience and increase views.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:shadow-xl hover:-translate-y-2">
            <LucideMessageCircle className="w-8 h-8 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Social Post Generation</h3>
            <p className="text-gray-600">
              Create impactful social media posts for platforms like LinkedIn, Twitter, and more.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:shadow-xl hover:-translate-y-2">
            <LucideCheckCircle className="w-8 h-8 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Plagiarism Check</h3>
            <p className="text-gray-600">
              Ensure your content is original and free of plagiarism with our advanced tools.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:shadow-xl hover:-translate-y-2">
            <LucideEdit className="w-8 h-8 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Text Improver</h3>
            <p className="text-gray-600">
              Enhance your writing with our text improvement tools that refine and elevate your content.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition-transform hover:shadow-xl hover:-translate-y-2">
            <LucidePlusCircle className="w-8 h-8 text-teal-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">And More...</h3>
            <p className="text-gray-600">
              Explore a variety of additional services designed to meet all your content creation needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
