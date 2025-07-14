export interface WalletResponse {
  success: boolean;
  data?: {
    address: string;
    privateKey: string;
    chain: string;
  };
  error?: string;
}

export interface SupportedChainsResponse {
  success: boolean;
  data?: {
    chains: ChainInfo[];
  };
  error?: string;
}

export interface ChainInfo {
  name: string;
  symbol: string;
  coinType: number;
  description: string;
}

export interface GenerateAddressRequest {
  chain: string;
}
