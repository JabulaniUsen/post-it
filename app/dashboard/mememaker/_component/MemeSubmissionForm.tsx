"use client";

import axios from "axios";
import { useEffect, useState } from "react";

// Meme type for TypeScript
interface Meme {
  ID: number;
  name: string;
  tags: string;
  image: string;
  topText: string;
  bottomText: string;
}

const MemeSubmissionForm = () => {
  // Form states
  const [name, setName] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [topText, setTopText] = useState<string>('');
  const [bottomText, setBottomText] = useState<string>('');

  // Meme list state
  const [memes, setMemes] = useState<Meme[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch memes when the component mounts
  useEffect(() => {
    const fetchMemes = async () => {
      try {
        const res = await axios.get('https://cors-anywhere.herokuapp.com/http://alpha-meme-maker.herokuapp.com/1');

        setMemes(res.data.data);
        setLoading(false);
      } catch (error: any) {
        if (error.response) {
          // The request was made and the server responded with a status code
          console.error("Error response data:", error.response.data);
          console.error("Error response status:", error.response.status);
          console.error("Error response headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Error request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error message:", error.message);
        }
        console.error("Error config:", error.config);
        setLoading(false);
      }
    };
  
    fetchMemes();
  }, []);
  

  // Handle form submission for meme creation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://alpha-meme-maker.herokuapp.com/add/', {
        name,
        tags,
        image,
        topText,
        bottomText,
      }, {
        headers: {
          postSecret: 'Yep',
          adminPassword: 'Yep',
        },
      });
      console.log(res.data);
    } catch (error) {
      console.error('Error submitting meme:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4">
      {/* Meme Submission Form */}
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 mt-12 rounded-lg w-full max-w-lg mx-auto shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Submit a Meme</h2>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2 text-white">Meme Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2 text-white">Tags</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2 text-white">Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2 text-white">Top Text</label>
          <input
            type="text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2 text-white">Bottom Text</label>
          <input
            type="text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md transition duration-300"
        >
          Submit Meme
        </button>
      </form>

      {/* Display all memes */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-purple-400 mb-6 text-center">Meme Collection</h2>
        {loading ? (
          <p className="text-center text-white">Loading memes...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {memes.map((meme) => (
              <div key={meme.ID} className="bg-gray-800 p-4 rounded-lg shadow-md">
                <img
                  src={meme.image}
                  alt={meme.name}
                  className="rounded-lg w-full object-cover h-64 mb-4"
                />
                <h3 className="text-xl font-semibold text-white">{meme.name}</h3>
                <p className="text-gray-400 text-sm mt-2">{meme.tags}</p>
                {meme.topText && (
                  <p className="mt-2 text-lg text-purple-400">
                    Top Text: {meme.topText}
                  </p>
                )}
                {meme.bottomText && (
                  <p className="mt-2 text-lg text-purple-400">
                    Bottom Text: {meme.bottomText}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default MemeSubmissionForm;
