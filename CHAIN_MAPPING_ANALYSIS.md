# 链参数映射分析报告

## 你提供的链参数列表
BTC,LIGHTNING,BEP20,ETH,ArbitrumOne,Optimism,SCROLL,Starknet,zkSyncEra,Morph,LINEA,BASE,LTC,QTUM,ETC,NEO3,TRX,XRP,Ontology,Cardano,StellarLumens,ERC20,TRC20,SOL,Kaia,KAVAEVMToken,Polygon,AVAXC-Chain,PolkadotAssetHub,Aptos,TON,IOST,BCH,stacks,Astar,AstrEvm,Elrond,NEARProtocol,Arweave,Kusama,AcalaToken,MetisToken,Osmosis,Terra,DYM,DYMEVM,RONIN,TAO,SUI,BRC20,SEIEVM,SEI,THORChain,ROSE,ZIL,WAXP,KDA,Solar,FET,ENJ,OPTIMISM,POLYGON,SONIC,Noble,DOGE,CAP20,VANA,BERA,Mantra,SAGA,WLD,HBAR,VET,Moonbeam,IoTeX,MINA,AXELAR,FLOW,Harmony,Nillion,Babylon,GUN,INIT,Vaulta,Sophon,StratisEVM,NEUTRON,Polymesh,Celestia,ARK,VanarChain,INJECTIVE,MetalDAOL2,RSK,KAVA,BAND,ICP,FIL,FILEVM,CELO,DOT,ATOM,XTZ,AVAXX-Chain,DYDX,MOVR

## TrustWallet Core 支持的模块
Aeternity, Aion, Algorand, Aptos, BabylonStaking, Barz, Binance, Bitcoin, BitcoinV2, Cardano, Common, Cosmos, Decred, DecredV2, EOS, Ethereum, EthereumAbi, EthereumRlp, Everscale, FIO, Filecoin, Greenfield, Harmony, Hedera, IOST, Icon, InternetComputer, IoTeX, LiquidStaking, MultiversX, NEAR, NEO, NULS, Nano, Nebulas, Nervos, Nimiq, Oasis, Ontology, Pactus, Polkadot, Polymesh, Ripple, Solana, Stellar, Sui, THORChainSwap, Tezos, TheOpenNetwork, Theta, Tron, TxCompiler, Utxo, VeChain, WalletConnect, Waves, Zcash, Zilliqa

## 映射结果

### ✅ 支持的链 (已映射)

#### 直接支持的主链
1. **BTC** → Bitcoin 模块
2. **ETH** → Ethereum 模块
3. **BEP20** → Binance 模块
4. **LTC** → Bitcoin 模块 (Litecoin 使用 Bitcoin 模块)
5. **ETC** → Ethereum 模块 (Ethereum Classic 使用 Ethereum 模块)
6. **NEO3** → NEO 模块
7. **TRX** → Tron 模块
8. **XRP** → Ripple 模块
9. **Ontology** → Ontology 模块
10. **Cardano** → Cardano 模块
11. **StellarLumens** → Stellar 模块
12. **ERC20** → Ethereum 模块
13. **TRC20** → Tron 模块
14. **SOL** → Solana 模块
15. **Polygon** → Ethereum 模块 (Polygon 使用 Ethereum 模块)
16. **Aptos** → Aptos 模块
17. **TON** → TheOpenNetwork 模块
18. **IOST** → IOST 模块
19. **BCH** → Bitcoin 模块 (Bitcoin Cash 使用 Bitcoin 模块)
20. **Elrond** → MultiversX 模块
21. **NEARProtocol** → NEAR 模块
22. **Osmosis** → Cosmos 模块
23. **Terra** → Cosmos 模块
24. **SUI** → Sui 模块
25. **THORChain** → THORChainSwap 模块
26. **ROSE** → Oasis 模块
27. **ZIL** → Zilliqa 模块
28. **DOGE** → Bitcoin 模块 (Dogecoin 使用 Bitcoin 模块)
29. **HBAR** → Hedera 模块
30. **VET** → VeChain 模块
31. **IoTeX** → IoTeX 模块
32. **Harmony** → Harmony 模块
33. **Polymesh** → Polymesh 模块
34. **ICP** → InternetComputer 模块
35. **FIL** → Filecoin 模块
36. **DOT** → Polkadot 模块
37. **ATOM** → Cosmos 模块
38. **XTZ** → Tezos 模块

#### L2/侧链 (使用对应 L1 模块)
39. **ArbitrumOne** → Ethereum 模块 (L2)
40. **Optimism** → Ethereum 模块 (L2)
41. **OPTIMISM** → Ethereum 模块 (L2, 重复参数)
42. **POLYGON** → Ethereum 模块 (重复参数)
43. **BASE** → Ethereum 模块 (L2)
44. **LINEA** → Ethereum 模块 (L2)
45. **SCROLL** → Ethereum 模块 (L2)
46. **zkSyncEra** → Ethereum 模块 (L2)

#### EVM 兼容链
47. **QTUM** → Bitcoin 模块 (UTXO 模型)
48. **Moonbeam** → Ethereum 模块 (EVM 兼容)
49. **MOVR** → Ethereum 模块 (Moonriver, EVM 兼容)
50. **CELO** → Ethereum 模块 (EVM 兼容)

### ❌ 不支持的链 (wallet-core 中无对应模块)
1. **LIGHTNING** - Lightning Network (需要特殊处理)
2. **Starknet** - StarkNet (L2, 非 EVM)
3. **Morph** - Morph Network
4. **Kaia** - Kaia Network
5. **KAVAEVMToken** - Kava EVM Token
6. **AVAXC-Chain** - Avalanche C-Chain
7. **PolkadotAssetHub** - Polkadot Asset Hub
8. **stacks** - Stacks
9. **Astar** - Astar Network
10. **AstrEvm** - Astar EVM
11. **Arweave** - Arweave
12. **Kusama** - Kusama
13. **AcalaToken** - Acala Token
14. **MetisToken** - Metis Token
15. **DYM** - Dymension
16. **DYMEVM** - Dymension EVM
17. **RONIN** - Ronin Network
18. **TAO** - Bittensor
19. **BRC20** - BRC-20 (Bitcoin ordinals)
20. **SEIEVM** - Sei EVM
21. **SEI** - Sei Network
22. **WAXP** - WAX Protocol
23. **KDA** - Kadena
24. **Solar** - Solar Network
25. **FET** - Fetch.ai
26. **ENJ** - Enjin
27. **SONIC** - Sonic Network
28. **Noble** - Noble Network
29. **CAP20** - CAP-20
30. **VANA** - Vana Network
31. **BERA** - Berachain
32. **Mantra** - Mantra Network
33. **SAGA** - Saga Network
34. **WLD** - Worldcoin
35. **MINA** - Mina Protocol
36. **AXELAR** - Axelar Network
37. **FLOW** - Flow Network
38. **Nillion** - Nillion Network
39. **Babylon** - Babylon Network
40. **GUN** - GUN Network
41. **INIT** - Initia
42. **Vaulta** - Vaulta Network
43. **Sophon** - Sophon Network
44. **StratisEVM** - Stratis EVM
45. **NEUTRON** - Neutron Network
46. **Celestia** - Celestia Network
47. **ARK** - ARK Network
48. **VanarChain** - Vanar Chain
49. **INJECTIVE** - Injective Protocol
50. **MetalDAOL2** - Metal DAO L2
51. **RSK** - RSK Network
52. **KAVA** - Kava Network
53. **BAND** - Band Protocol
54. **FILEVM** - Filecoin EVM
55. **AVAXX-Chain** - Avalanche X-Chain
56. **DYDX** - dYdX

## 总结
- **支持的链**: 50 个
- **不支持的链**: 56 个
- **支持率**: 47.2%

## 建议
对于不支持的链，API 将返回 "Unsupported chain" 错误。如果需要支持更多链，可能需要：
1. 等待 TrustWallet Core 添加支持
2. 使用其他钱包库
3. 对于 L2 网络，可以考虑使用对应 L1 的模块 (如 Arbitrum 使用 Ethereum 模块)
