# CPX Wallet API

多链钱包地址生成 API 服务，基于 TrustWallet Core。

## 功能

- 生成多链钱包地址和私钥
- 支持 Bitcoin, Ethereum, BSC, Polygon, Tron
- RESTful API 接口

## API 接口

### 生成钱包地址
```
POST /api/v1/wallet/generate
Content-Type: application/json

{
  "chain": "ethereum"
}
```

响应:
```json
{
  "success": true,
  "data": {
    "address": "0x...",
    "privateKey": "...",
    "chain": "ethereum"
  }
}
```

### 获取支持的链
```
GET /api/v1/wallet/chains
```

响应:
```json
{
  "success": true,
  "data": {
    "chains": [
      {
        "name": "Bitcoin",
        "symbol": "BTC",
        "coinType": 0,
        "description": "Bitcoin Network"
      }
    ]
  }
}
```

## 运行

### 开发模式
```bash
npm install
npm run dev
```

### Docker
```bash
docker-compose up --build
```

## 支持的链

- Bitcoin (btc, bitcoin)
- Ethereum (eth, ethereum)  
- Binance Smart Chain (bsc, binance)
- Polygon (matic, polygon)
- Tron (trx, tron)
