import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ICOContent } from "../Context";
import { ethers } from "ethers";

const NFTCard = ({ collectionName, currentlyListed,
  itemId,
  nftContract,
  image,
  metadata,
  owner,
  price,
  seller,
  tokenId, name }) => {

     const contexts = useContext(ICOContent);
      const {
        getNFTById_,
        buyNFT,
        tokenURI,
        fetchMetadataFromPinata,
        getActiveListings,
        setAccountBalance,
        address,
      } = contexts;

      const prices =  ethers.utils.formatEther(price);

    const handleBuy = async () => {
      // event.preventDefault();
      const vendorNFTAddress = import.meta.env.VITE_APP_VENDORNFT_CONTRACT_ADDRESS;
        console.log("🚀 ~ HandleMintNFT ~ vendorNFTAddress:", vendorNFTAddress);
    
        console.log("🚀 ~ handleBuy ~ nftDatas.itemId:", itemId);
    
      try {
          await buyNFT(vendorNFTAddress, itemId, price)
            .then((response) => {
              SuccessToast(
                <div>
                  NFT Listed successfully 🎉 ! <br />
                  <div className=" line-clamp-1">
                    Gas used :
                    <b className=" font-normal text-darkBlue-50">
                      {" "}
                      {response.gasUsed.toString()}
                    </b>{" "}
                    in wei
                  </div>
                </div>
              );
              setTimeout(() => {
                Navigate("/myProfile/myNFTs");
              }, 3000);
            })
            .catch((error) => {
              console.error(error);
              ErrorToast(<div>Something error happen try agin 💔 !</div>);
            });
      } catch (error) {
        console.log(error);
      }
    };



  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden relative">
        <img className="w-full h-96 top-0 object-cover absolute z-0" src={image} alt={name} />
      <div className="aspect-square bg-gray-700"></div>
      <div className="w-full mx-auto h-5">
          <button className="w-full bg-blue-600  rounded-lg" onClick={(e) => handleBuy()}>
            Buy NFT
          </button>
        </div>
      <Link
      to={`nft/${tokenId}`}>
      <div className="p-4 relative">
        <p className="text-gray-400 text-sm">{collectionName}</p>
        <h3 className="text-white font-semibold mt-1">{name}</h3>
        <div className="flex justify-between mt-2">
          <div>
            <p className="text-green-700 text-lg font-bold ">{prices}POL</p>
            <p className="text-white text-sm">{currentlyListed ? "Listed" : "Not Listed"}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-xs">{itemId}</p>
            <p className="text-gray-400 text-xs">{seller}</p>
            <p className="text-gray-400 text-xs">{owner}</p>
            <p className="text-gray-400 text-xs">{tokenId}</p>
            <p className="text-gray-400 text-xs">{nftContract}</p>
            <p className="text-white text-sm">No bids yet</p>
          </div>
          
        </div>
      </div>
      </Link>
    </div>
  );
};


NFTCard.propTypes = {
  // collectionName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NFTCard;
