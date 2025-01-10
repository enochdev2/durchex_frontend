import { ethers } from "ethers";
// import Web3Modal from "web3modal";

// import ERC20Generator from "./ERC20Generator.json";
import NFTMarketplace from "./NFTMarketplace.json";
import VendorNFT from "./VendorNFT.json";
import MargicPearl from "./MargicPearl.json";

// export const ERC20Generator_ABI = ERC20Generator.abi;
// export const ERC20Generator_BYTECODE = ERC20Generator.bytecode;

export const NFTMARKETPLACE_CONTRACT_ADDRESS = import.meta.env
  .VITE_APP_NFTMARKETPLACE_CONTRACT_ADDRESS;
export const VENDORNFT_CONTRACT_ADDRESS = import.meta.env
  .VITE_APP_VENDORNFT_CONTRACT_ADDRESS;
export const NFTMarketplace_ABI = NFTMarketplace.abi;
export const VendorNFT_ABI = VendorNFT.abi;
export const MargicPearl_ABI = MargicPearl.abi;

//PINATA KEY
export const PINATA_API_KEY = import.meta.env.VITE_PINATA_API_KEY;
export const PINATA_SECRET_KEY = import.meta.env.VITE_PINATA_SECRECT_KEY;

export const shortenAddress = (address) =>
  `${address?.slice(0, 5)}...${address?.lenght - 4}`;

const provider = new ethers.providers.Web3Provider(
  window.ethereum || import.meta.env.VITE_APP_WEB3_PROVIDER
);

const signer = provider.getSigner();

export const ContractAddress = import.meta.env
  .VITE_APP_NFTMARKETPLACE_CONTRACT_ADDRESS;
export const VendorContractAddress = import.meta.env
  .VITE_APP_VENDORNFT_CONTRACT_ADDRESS;

export const fetchContract = (address, abi, signer) =>
  new ethers.Contract(address, abi, signer);

export const ContractInstance = new ethers.Contract(
  VendorContractAddress,
  VendorNFT_ABI,
  signer
);

export const MarketContractInstance = new ethers.Contract(
  ContractAddress,
  NFTMarketplace_ABI,
  signer
);

export const NFTMarketplaceCONTRACT = async () => {
  // const link ="https://polygon-amoy.g.alchemy.com/v2/BNtFtcdka6PWOAZepdA62HWxAeGnHnCT";
  const link =
    "https://ethereum-sepolia.core.chainstack.com/390cec07d0dbe1818b3bb25db398c3ca";
  try {
    const provider = new ethers.providers.JsonRpcProvider(link);
    const contract = fetchContract(
      ContractAddress,
      NFTMarketplace_ABI,
      provider
    );
    return contract;
  } catch (error) {
    console.error(error);
  }
};
export const VendorNFTs_CONTRACT = async () => {
  const link =
    "https://ethereum-sepolia.core.chainstack.com/390cec07d0dbe1818b3bb25db398c3ca";
  try {
    const provider = new ethers.providers.JsonRpcProvider(link);

    const contract = fetchContract(
      VendorContractAddress,
      VendorNFT_ABI,
      provider
    );
    return contract;
  } catch (error) {
    console.error(error);
  }
};

//NETWORKS
// const networks = {
//     polygon_amoy: {
//         chainId: `0x${Number(80002).toString(16)}`,
//         chainName: "Polygon Amoy",
//         nativeCurrency: {
//             name: "MATIC",
//             symbol: "MATIC",
//             decimals: 18
//         },
//         rpcUrls: [" https://rpc-amoy.polygon.technology/"],
//         blockExplorerUrls: ["https://www.oklink.com/amoy"],
//         // rpcUrls: ["https://rpc.ankr.polygon_amoy"],
//     },
//     polygon: {
//         chainId: `0x${Number(137).toString(16)}`,
//         chainName: "Polygon Mainnet",
//         nativeCurrency: {
//             name: "MATIC",
//             symbol: "MATIC",
//             decimals: 18
//         },
//         rpcUrls: ["https://rpc.ankr.com/polygon"],
//         blockExplorerUrls: ["https://polygonscan.com/"],
//     },
//     bsc: {
//         chainId: `0x${Number(56).toString(16)}`,
//         chainName: "Binance Mainnet",
//         nativeCurrency: {
//             name: "Binance Chain",
//             symbol: "BNB",
//             decimals: 18
//         },
//         rpcUrls: ["https://rpc.ankr.com/bsc"],
//         blockExplorerUrls: ["https://bscscan.com/"],
//     },

//     base_mainnet: {
//         chainId: `0x${Number(8453).toString(16)}`,
//         chainName: "Base Mainnet",
//         nativeCurrency: {
//             name: "ETH",
//             symbol: "ETH",
//             decimals: 18,
//         },
//         rpcUrls: ["http://mainnet.base.org"],
//         blockExplorerUrls: ["http://bscscan.com"], //

//     }
// }

//  const changeNetwork = async ({netkworkName}) => {
//     try {
//         if (!window.ethereum) throw new Error("No crypto wallet found");
//         await window.ethereum.request({
//             method: "wallet_addEthereumChain",
//             params: [
//                 {
//                 ...networks[netkworkName],
//             },
//         ],
//             // params: [{
//             //     chainId: networks[netkworkName].chainId,
//             //     chainName: networks[netkworkName].chainName,
//             //     nativeCurrency: networks[netkworkName].nativeCurrency,
//             //     rpcUrls: networks[netkworkName].rpcUrls,
//             //     blockExplorerUrls: networks[netkworkName].blockExplorerUrls
//             // }]
//         });
//     } catch(error) {
//     console.log(error);
//     };
//  }

//  export const handleNetworkSwitch = async () => {
//     const networkName = "polygon_amoy";
//     await changeNetwork({networkName});
//  };
