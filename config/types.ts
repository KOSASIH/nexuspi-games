interface Environment {
  piNetworkApiUrl: string;
  gameTokenContractAddress: string;
  gameTokenABI: any[];
  databaseUrl: string;
  databaseName: string;
  apiKeys: ApiKeys;
  web3ProviderUrl: string;
  web3ProviderOptions: Web3ProviderOptions;
  ipfsNodeUrl: string;
  ipfsNodeOptions: IpfsNodeOptions;
}

interface ApiKeys {
  piNetworkApiKey: string;
  gameTokenApiKey: string;
}

interface Web3ProviderOptions {
  timeout: number;
}

interface IpfsNodeOptions {
  timeout: number;
}

interface Database {
  url: string;
  name: string;
  options: DatabaseOptions;
}

interface DatabaseOptions {
  timeout: number;
}
