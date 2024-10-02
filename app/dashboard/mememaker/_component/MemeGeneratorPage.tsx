"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Download, History, LoaderIcon, RefreshCcw, RefreshCcwDot } from "lucide-react";

interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
}

const MemeGenerator: React.FC = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [selectedMeme, setSelectedMeme] = useState<Meme | null>(null);
  const [topText, setTopText] = useState<string>("");
  const [bottomText, setBottomText] = useState<string>("");
  const [memeUrl, setMemeUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const memePreviewRef = useRef<HTMLDivElement | null>(null);

  // Fetch memes on component mount
  useEffect(() => {
    const fetchMemes = async () => {
      const res = await axios.get("https://api.imgflip.com/get_memes");
      if (res.data.success) {
        setMemes(res.data.data.memes);
      }
    };
    fetchMemes();
  }, []);

  const generateMeme = async () => {
    if (!selectedMeme) return;

    setLoading(true);
    const params = new URLSearchParams();
    params.append("template_id", selectedMeme.id);
    params.append("username", process.env.NEXT_PUBLIC_IMGFLIP_USERNAME!);
    params.append("password", process.env.NEXT_PUBLIC_IMGFLIP_PASSWORD!);
    params.append("text0", topText);
    params.append("text1", bottomText);

    try {
      const res = await axios.post("https://api.imgflip.com/caption_image", params);
      if (res.data.success) {
        setMemeUrl(res.data.data.url);
      }
    } catch (error) {
      console.error("Error generating meme:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleMemeSelect = (meme: Meme) => {
    setSelectedMeme(meme);
    setTopText("");
    setBottomText("");
    setMemeUrl("");
    setTimeout(() => {
      memePreviewRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const resetMeme = () => {
    setSelectedMeme(null);
    setTopText("");
    setBottomText("");
    setMemeUrl("");
  };

  const downloadMeme = async () => {
    if (!memeUrl) return;
  
    try {
      const response = await fetch(memeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement("a");
      link.href = url;
      link.download = `meme-${selectedMeme?.name}.png`; // Set file name for download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      // Release the object URL after download
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading meme:", error);
    }
  };
  

  return (
    <div className="container mx-auto py-8 px-2 ">
      <h1 className="lg:text-4xl text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Create Your Own Meme</h1>

      {/* Meme Catalog */}
      <div className="text-center mb-8 lg:p-10 p-3 backdrop-blur-md bg-white/70 border border-purple-600 shadow-md rounded-lg">
        <h2 className="lg:text-2xl text-xl text-gray-600 mb-4">Select a Meme Template</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 h-[350px] overflow-y-scroll">
          {memes.map((meme) => (
            <div
              key={meme.id}
              className={`cursor-pointer p-2 border-4 rounded-lg transition-all duration-300 ${
                selectedMeme?.id === meme.id ? "border-blue-500 shadow-lg" : "border-transparent"
              }`}
              onClick={() => handleMemeSelect(meme)}
            >
              <img
                src={meme.url}
                alt={meme.name}
                className="rounded-lg object-cover w-[200px] h-[150px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Meme Editor */}
      {selectedMeme && (
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-4">Edit Meme</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Display selected or generated meme */}
            <div className="flex-shrink-0" ref={memePreviewRef}>
              <img
                src={loading ? selectedMeme.url : memeUrl || selectedMeme.url}
                alt={selectedMeme.name}
                className="max-w-[400px] h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Meme Text Inputs */}
            <div className="w-full md:w-1/2 text-black">
              <input
                type="text"
                placeholder="Top Text"
                className="block w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 outline-none"
                value={topText}
                onChange={(e) => setTopText(e.target.value)}
              />
              <input
                type="text"
                placeholder="Bottom Text"
                className="block w-full p-3 mb-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 outline-none"
                value={bottomText}
                onChange={(e) => setBottomText(e.target.value)}
              />
              <button
                className="w-full p-3 bg-gradient-to-r flex items-center justify-center from-blue-500 to-purple-600 text-white rounded-lg hover:bg-blue-500"
                onClick={generateMeme}
                disabled={loading}
              >
                {loading && <LoaderIcon className="animate-spin" />}
                {loading ? "Cooking..." : "Generate Meme"}
              </button>
            <div className="flex gap-5">
                <button
                    className=" p-3 mt-4 bg-red-500 text-white rounded-lg hover:bg-red-600"
                    onClick={resetMeme}
                >
                    <RefreshCcw/>
                </button>
                <button
                  onClick={downloadMeme}
                  className="inline-block mt-4 bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
                >
                  <Download />
                </button>

            </div>
            </div>
          </div>
        </div>
      )}

      {/* Generated Meme Output */}
      {memeUrl && !loading && (
        <div className="mt-12 text-center">
          {/* <h2 className="text-3xl font-bold mb-4">Your Meme</h2>
          <img src={memeUrl} alt="Generated Meme" className="mx-auto rounded-lg shadow-lg" /> */}

          {/* Download Button */}
          
        </div>
      )}
    </div>
  );
};

export default MemeGenerator;
