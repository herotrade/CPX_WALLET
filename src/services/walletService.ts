import { initWasm } from '@trustwallet/wallet-core';
import { ChainInfo } from '../types/wallet.types';

// 定义 wallet-core 的类型
interface WalletCore {
  CoinType: any;
  HexCoding: any;
  HDWallet: any;
  AnyAddress: any;
  PrivateKey: any;
}

interface ChainConfig {
  name: string;
  symbol: string;
  module: string;
  description: string;
}

export class WalletService {
  private static instance: WalletService;
  private initialized = false;
  private core: WalletCore | null = null;

  private constructor() {}

  public static getInstance(): WalletService {
    if (!WalletService.instance) {
      WalletService.instance = new WalletService();
    }
    return WalletService.instance;
  }

  public async initialize(): Promise<void> {
    if (!this.initialized) {
      this.core = await initWasm();
      this.initialized = true;
    }
  }

  private getChainConfigs(): { [key: string]: ChainConfig } {
    // 基于你提供的参数和 wallet-core 支持的模块创建完整映射
    return {
      // 支持的链 - 直接映射到 wallet-core 模块
      'BTC': { name: 'Bitcoin', symbol: 'BTC', module: 'Bitcoin', description: 'Bitcoin Network' },
      'ETH': { name: 'Ethereum', symbol: 'ETH', module: 'Ethereum', description: 'Ethereum Network' },
      'BEP20': { name: 'Binance Smart Chain', symbol: 'BEP20', module: 'Binance', description: 'Binance Smart Chain BEP20' },
      'TRX': { name: 'Tron', symbol: 'TRX', module: 'Tron', description: 'Tron Network' },
      'TRON': { name: 'Tron', symbol: 'TRX', module: 'Tron', description: 'Tron Network' },
      'XRP': { name: 'Ripple', symbol: 'XRP', module: 'Ripple', description: 'XRP Ledger' },
      'Cardano': { name: 'Cardano', symbol: 'ADA', module: 'Cardano', description: 'Cardano Network' },
      'StellarLumens': { name: 'Stellar', symbol: 'XLM', module: 'Stellar', description: 'Stellar Network' },
      'SOL': { name: 'Solana', symbol: 'SOL', module: 'Solana', description: 'Solana Network' },
      'DOT': { name: 'Polkadot', symbol: 'DOT', module: 'Polkadot', description: 'Polkadot Network' },
      'Aptos': { name: 'Aptos', symbol: 'APT', module: 'Aptos', description: 'Aptos Network' },
      'TON': { name: 'TON', symbol: 'TON', module: 'TheOpenNetwork', description: 'TON Network' },
      'BCH': { name: 'Bitcoin Cash', symbol: 'BCH', module: 'Bitcoin', description: 'Bitcoin Cash' },
      'NEARProtocol': { name: 'Near Protocol', symbol: 'NEAR', module: 'NEAR', description: 'Near Protocol' },
      'ATOM': { name: 'Cosmos', symbol: 'ATOM', module: 'Cosmos', description: 'Cosmos Hub' },
      'Osmosis': { name: 'Osmosis', symbol: 'OSMO', module: 'Cosmos', description: 'Osmosis Network' },
      'Terra': { name: 'Terra', symbol: 'LUNA', module: 'Cosmos', description: 'Terra Network' },
      'SUI': { name: 'Sui', symbol: 'SUI', module: 'Sui', description: 'Sui Network' },
      'THORChain': { name: 'THORChain', symbol: 'RUNE', module: 'THORChainSwap', description: 'THORChain Network' },
      'VET': { name: 'VeChain', symbol: 'VET', module: 'VeChain', description: 'VeChain Network' },
      'IoTeX': { name: 'IoTeX', symbol: 'IOTX', module: 'IoTeX', description: 'IoTeX Network' },
      'Harmony': { name: 'Harmony', symbol: 'ONE', module: 'Harmony', description: 'Harmony Network' },
      'FIL': { name: 'Filecoin', symbol: 'FIL', module: 'Filecoin', description: 'Filecoin Network' },
      'XTZ': { name: 'Tezos', symbol: 'XTZ', module: 'Tezos', description: 'Tezos Network' },
      'ZIL': { name: 'Zilliqa', symbol: 'ZIL', module: 'Zilliqa', description: 'Zilliqa Network' },
      'HBAR': { name: 'Hedera', symbol: 'HBAR', module: 'Hedera', description: 'Hedera Network' },
      'IOST': { name: 'IOST', symbol: 'IOST', module: 'IOST', description: 'IOST Network' },
      'Ontology': { name: 'Ontology', symbol: 'ONT', module: 'Ontology', description: 'Ontology Network' },
      'NEO3': { name: 'NEO', symbol: 'NEO', module: 'NEO', description: 'NEO Network' },
      'Polymesh': { name: 'Polymesh', symbol: 'POLYX', module: 'Polymesh', description: 'Polymesh Network' },
      'ICP': { name: 'Internet Computer', symbol: 'ICP', module: 'InternetComputer', description: 'Internet Computer' },
      'Elrond': { name: 'MultiversX', symbol: 'EGLD', module: 'MultiversX', description: 'MultiversX Network' },

      // 额外支持的链
      'ETC': { name: 'Ethereum Classic', symbol: 'ETC', module: 'Ethereum', description: 'Ethereum Classic (using Ethereum module)' },
      'LTC': { name: 'Litecoin', symbol: 'LTC', module: 'Bitcoin', description: 'Litecoin (using Bitcoin module)' },
      'DOGE': { name: 'Dogecoin', symbol: 'DOGE', module: 'Bitcoin', description: 'Dogecoin (using Bitcoin module)' },
      'ERC20': { name: 'ERC20 Token', symbol: 'ERC20', module: 'Ethereum', description: 'ERC20 Token on Ethereum' },
      'TRC20': { name: 'TRC20 Token', symbol: 'TRC20', module: 'Tron', description: 'TRC20 Token on Tron' },
      'Polygon': { name: 'Polygon', symbol: 'MATIC', module: 'Ethereum', description: 'Polygon Network (using Ethereum module)' },
      'EOS': { name: 'EOS', symbol: 'EOS', module: 'EOS', description: 'EOS Network' },
      'Waves': { name: 'Waves', symbol: 'WAVES', module: 'Waves', description: 'Waves Network' },
      'Nano': { name: 'Nano', symbol: 'NANO', module: 'Nano', description: 'Nano Network' },
      'Aeternity': { name: 'Aeternity', symbol: 'AE', module: 'Aeternity', description: 'Aeternity Network' },
      'Algorand': { name: 'Algorand', symbol: 'ALGO', module: 'Algorand', description: 'Algorand Network' },
      'Decred': { name: 'Decred', symbol: 'DCR', module: 'Decred', description: 'Decred Network' },
      'Zcash': { name: 'Zcash', symbol: 'ZEC', module: 'Zcash', description: 'Zcash Network' },
      'Icon': { name: 'Icon', symbol: 'ICX', module: 'Icon', description: 'Icon Network' },
      'Nebulas': { name: 'Nebulas', symbol: 'NAS', module: 'Nebulas', description: 'Nebulas Network' },
      'Nervos': { name: 'Nervos', symbol: 'CKB', module: 'Nervos', description: 'Nervos Network' },
      'Nimiq': { name: 'Nimiq', symbol: 'NIM', module: 'Nimiq', description: 'Nimiq Network' },
      'NULS': { name: 'NULS', symbol: 'NULS', module: 'NULS', description: 'NULS Network' },
      'Oasis': { name: 'Oasis', symbol: 'ROSE', module: 'Oasis', description: 'Oasis Network' },
      'ROSE': { name: 'Oasis', symbol: 'ROSE', module: 'Oasis', description: 'Oasis Network' },
      'Theta': { name: 'Theta', symbol: 'THETA', module: 'Theta', description: 'Theta Network' },
      'Everscale': { name: 'Everscale', symbol: 'EVER', module: 'Everscale', description: 'Everscale Network' },
      'FIO': { name: 'FIO', symbol: 'FIO', module: 'FIO', description: 'FIO Protocol' },
      'Greenfield': { name: 'Greenfield', symbol: 'BNB', module: 'Greenfield', description: 'BNB Greenfield' },
      'Pactus': { name: 'Pactus', symbol: 'PAC', module: 'Pactus', description: 'Pactus Network' },

      // L2 网络 - 使用对应 L1 模块
      'ArbitrumOne': { name: 'Arbitrum One', symbol: 'ARB', module: 'Ethereum', description: 'Arbitrum One (L2, using Ethereum module)' },
      'Optimism': { name: 'Optimism', symbol: 'OP', module: 'Ethereum', description: 'Optimism (L2, using Ethereum module)' },
      'OPTIMISM': { name: 'Optimism', symbol: 'OP', module: 'Ethereum', description: 'Optimism (L2, using Ethereum module)' },
      'POLYGON': { name: 'Polygon', symbol: 'MATIC', module: 'Ethereum', description: 'Polygon Network (using Ethereum module)' },
      'BASE': { name: 'Base', symbol: 'ETH', module: 'Ethereum', description: 'Base (L2, using Ethereum module)' },
      'LINEA': { name: 'Linea', symbol: 'ETH', module: 'Ethereum', description: 'Linea (L2, using Ethereum module)' },
      'SCROLL': { name: 'Scroll', symbol: 'ETH', module: 'Ethereum', description: 'Scroll (L2, using Ethereum module)' },
      'zkSyncEra': { name: 'zkSync Era', symbol: 'ETH', module: 'Ethereum', description: 'zkSync Era (L2, using Ethereum module)' },

      // 重复参数处理
      'QTUM': { name: 'Qtum', symbol: 'QTUM', module: 'Bitcoin', description: 'Qtum (using Bitcoin module for UTXO)' },
      'Moonbeam': { name: 'Moonbeam', symbol: 'GLMR', module: 'Ethereum', description: 'Moonbeam (EVM compatible, using Ethereum module)' },
      'MOVR': { name: 'Moonriver', symbol: 'MOVR', module: 'Ethereum', description: 'Moonriver (EVM compatible, using Ethereum module)' },
      'CELO': { name: 'Celo', symbol: 'CELO', module: 'Ethereum', description: 'Celo (EVM compatible, using Ethereum module)' }
    };
  }

  public getChains(): ChainInfo[] {
    const configs = this.getChainConfigs();
    return Object.entries(configs).map(([key, config]) => ({
      name: config.name,
      symbol: key,
      coinType: 0, // placeholder
      description: config.description
    }));
  }

  private getChainModule(chain: string): string | null {
    const configs = this.getChainConfigs();
    const config = configs[chain.toUpperCase()];
    return config ? config.module : null;
  }

  private getCoinType(chain: string): any {
    if (!this.core) {
      throw new Error('Wallet core not initialized');
    }

    const { CoinType } = this.core;
    const chainUpper = chain.toUpperCase();



    // 映射链参数到 CoinType - 包括基于同一公链的不同参数
    const coinTypeMap: { [key: string]: any } = {
      // Bitcoin 相关
      'BTC': CoinType.bitcoin,
      'Bitcoin': CoinType.bitcoin,
      'BCH': CoinType.bitcoinCash,
      'LTC': CoinType.litecoin,
      'DOGE': CoinType.dogecoin,

      // Ethereum 相关 (包括 L2 和 EVM 兼容链)
      'ETH': CoinType.ethereum,
      'Ethereum': CoinType.ethereum,
      'ERC20': CoinType.ethereum,
      'ETC': CoinType.ethereumClassic,
      'ArbitrumOne': CoinType.ethereum, // L2 使用 Ethereum
      'Optimism': CoinType.ethereum,
      'OPTIMISM': CoinType.ethereum,
      'BASE': CoinType.ethereum,
      'LINEA': CoinType.ethereum,
      'SCROLL': CoinType.ethereum,
      'zkSyncEra': CoinType.ethereum,
      'Polygon': CoinType.ethereum,
      'POLYGON': CoinType.ethereum,
      'Moonbeam': CoinType.ethereum,
      'MOVR': CoinType.ethereum, // Moonriver
      'CELO': CoinType.ethereum,

      // Binance 相关
      'BEP20': CoinType.smartChain, // BSC/BEP20 使用 smartChain
      'BSC': CoinType.smartChain,   // BSC 使用 smartChain
      'BNB': CoinType.binance,      // 原生 Binance Chain 使用 binance

      // Tron 相关
      'TRX': CoinType.tron,
      'TRON': CoinType.tron,
      'TRC20': CoinType.tron,

      // 其他主链
      'XRP': CoinType.ripple,
      'Cardano': CoinType.cardano,
      'StellarLumens': CoinType.stellar,
      'SOL': CoinType.solana,
      'DOT': CoinType.polkadot,
      'ATOM': CoinType.cosmos,
      'Osmosis': CoinType.cosmos, // 基于 Cosmos
      'Terra': CoinType.cosmos, // 基于 Cosmos
      'XTZ': CoinType.tezos,
      'ZIL': CoinType.zilliqa,
      'VET': CoinType.vechain,
      'IoTeX': CoinType.iotex,
      'Harmony': CoinType.harmony,
      'FIL': CoinType.filecoin,
      'Polymesh': CoinType.polymesh,

      // 可能支持的其他链 (需要验证 CoinType 是否存在)
      'NEO3': CoinType.neo || null,
      'Ontology': CoinType.ontology || null,
      'Aptos': CoinType.aptos || null,
      'SUI': CoinType.sui || null,
      'TON': CoinType.ton, // TON 使用特殊的 deriveAddress 方法
      'NEARProtocol': CoinType.near || null,
      'THORChain': CoinType.thorchain || null,
      'ROSE': CoinType.oasis || null,
      'HBAR': CoinType.hedera || null,
      'IOST': CoinType.iost || null,
      'ICP': CoinType.internetComputer || null,
      'Elrond': CoinType.elrond || null,
      'QTUM': CoinType.qtum || null,
      'KAVA': CoinType.kava || null,
      'BAND': CoinType.band || null,
      'FLOW': CoinType.flow || null,
      'MINA': CoinType.mina || null,
      'AXELAR': CoinType.axelar || null,
      'INJECTIVE': CoinType.injective || null,
      'Celestia': CoinType.celestia || null,
      'NEUTRON': CoinType.neutron || null,
      'DYDX': CoinType.dydx || null,
      'AVAXX-Chain': CoinType.avalanche || null,
      'AVAXC-Chain': CoinType.avalanche || null
    };

    return coinTypeMap[chainUpper] || null;
  }

  public async generateAddress(chain: string): Promise<{ address: string; privateKey: string }> {
    if (!this.initialized || !this.core) {
      await this.initialize();
    }

    if (!this.core) {
      throw new Error('Failed to initialize wallet core');
    }

    const coinType = this.getCoinType(chain);
    if (!coinType) {
      throw new Error(`Unsupported chain: ${chain}`);
    }

    try {
      const { HDWallet, AnyAddress, HexCoding, PrivateKey } = this.core;

      // 特殊处理 TON
      if (chain.toUpperCase() === 'TON') {
        const { HDWallet, AnyAddress, HexCoding } = this.core;

        // 创建钱包
        const wallet = HDWallet.create(128, ''); // 128 bits，空密码

        // 获取私钥
        const privateKey = wallet.getKeyForCoin(coinType);

        // 获取公钥
        const publicKey = privateKey.getPublicKey(coinType);

        // 获取地址
        const address = AnyAddress.createWithPublicKey(publicKey, coinType);
        const addressString = address.description();

        // 获取私钥的十六进制表示
        const privateKeyHex = HexCoding.encode(privateKey.data());

        // 清理内存
        wallet.delete();
        privateKey.delete();
        publicKey.delete();
        address.delete();

        return {
          address: addressString,
          privateKey: privateKeyHex
        };
      }

      // 其他链的标准处理
      // 创建 HD 钱包 (256 bits entropy)
      const wallet = HDWallet.create(256, "");

      // 获取指定链的私钥
      const key = wallet.getKeyForCoin(coinType);

      // 获取公钥
      const pubKey = key.getPublicKeySecp256k1(false);

      // 获取私钥的十六进制表示
      const privateKeyHex = HexCoding.encode(key.data());

      // 尝试不同的地址生成方法
      let addressString: string;
      try {
        // 优先使用 AnyAddress.createWithPublicKey
        const address = AnyAddress.createWithPublicKey(pubKey, coinType);
        addressString = address.description();
        address.delete();
      } catch (addressError) {
        // 如果 AnyAddress 失败，使用钱包的地址方法
        addressString = wallet.getAddressForCoin(coinType);
      }

      // 检查地址是否为空
      if (!addressString || addressString.trim() === '') {
        throw new Error(`Address generation returned empty result for ${chain}. This chain may not be fully supported by wallet-core.`);
      }

      // 清理内存
      wallet.delete();
      key.delete();
      pubKey.delete();

      return {
        address: addressString,
        privateKey: privateKeyHex
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      throw new Error(`Failed to generate address for ${chain}: ${errorMessage}`);
    }
  }


}
