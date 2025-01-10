import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchIcon, ArrowRightIcon } from "lucide-react";
import groupnft from "../assets/groupnft.png";
import monkeynft from "../assets/monkeynft.png";


const Create = () => {

  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleContinue = () => {
    if (selectedOption) {
      // Navigate to the NftCreatorForm with the selected option as state
      navigate("/nftcreatorform", { state: { option: selectedOption } });
    }
  };







  return (
    <div className="min-h-screen bg-[#18161D] text-white">
      <nav className="flex items-center justify-between p-4 border-gray-800">
        <Link to="/">
          <div className="text-xl font-bold">DURCHEX LOGO</div>
        </Link>
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search for collections, NFTs or Artists"
              className="w-full bg-transparent border border-[#79718A] rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-gray-300 hover:text-white">Explore</button>
          <button className="text-gray-300 hover:text-white">Create</button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500" />
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-32">
          Create a new NFT
        </h1>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Single NFT Option */}
          <div
            className={`p-8 bg-transparent border-2 rounded-2xl cursor-pointer transition-all ${
              selectedOption === "single"
                ? "border-[#B390F8] shadow-2xl"
                : "border-[#4A4554]"
            }`}
            onClick={() => setSelectedOption("single")}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-6">
                <img
                  src={monkeynft}
                  alt="Single NFT"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Add single NFT to an
              </h3>
              <p className="text-xl font-semibold">existing Collection</p>
            </div>
          </div>

          {/* Collection Option */}
          <div
            className={`p-8 bg-transparent border-2 rounded-2xl cursor-pointer transition-all ${
              selectedOption === "collection"
                ? "border-[#B390F8] shadow-2xl"
                : "border-[#4A4554]"
            }`}
            onClick={() => setSelectedOption("collection")}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 mb-6">
                <img
                  src={groupnft}
                  alt="NFT Collection"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Create a new</h3>
              <p className="text-xl font-semibold">NFT Collection</p>
            </div>
          </div>
        </div>

        <button
          className={`w-full py-3 text-lg bg-[#8149F4] rounded-lg flex items-center justify-center ${
            !selectedOption ? "opacity-50 bg-[#312E38] cursor-not-allowed" : ""
          }`}
          disabled={!selectedOption}
          onClick={handleContinue} // Handle navigation on click
        >
          <span className="mr-2">Continue</span>
          <ArrowRightIcon className="h-5 w-5" />
        </button>
        {/* the section I creAted */}

   

      </main>
    </div>
  );
};

export default Create;

