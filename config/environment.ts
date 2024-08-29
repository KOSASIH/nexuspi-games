import { Environment } from './types';

const environment: Environment = {
  // Pi Network API URL
  piNetworkApiUrl: 'https://minepi.com/api/v1',

  // Game token contract address
  gameTokenContractAddress: '0x...your_contract_address...',

  // Game token contract ABI
  gameTokenABI: [...your_contract_abi...],

  // Database URL
  databaseUrl: 'mongodb://localhost:27017',

  // Database name
  databaseName: 'nexuspi-games',

  // API keys
  apiKeys: {
    piNetworkApiKey: 'your_pi_network_api_key',
    gameTokenApiKey: 'your_game_token_api_key',
  },

  // Web3 provider URL
  web3ProviderUrl: 'https://mainnet.infura.io/v3/your_infura_project_id',

  // Web3 provider options
  web3ProviderOptions: {
    // Web3 provider timeout
    timeout: 30000,
  },

  // IPFS node URL
  ipfsNodeUrl: 'https://ipfs.infura.io:5001',

  // IPFS node options
  ipfsNodeOptions: {
    // IPFS node timeout
    timeout: 30000,
  },
};

export default environment;
