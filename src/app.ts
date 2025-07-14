import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import walletRoutes from './routes/wallet.routes';
import { WalletService } from './services/walletService';

const app = express();
const PORT = process.env.PORT || 9505;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});

app.use(helmet());
app.use(cors());
app.use(limiter);
app.use(express.json());

app.use('/api/v1/wallet', walletRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use('*', (req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

async function startServer() {
  try {
    console.log('Initializing Wallet Core...');
    const walletService = WalletService.getInstance();
    await walletService.initialize();
    console.log('Wallet Core initialized successfully');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/health`);
      console.log(`API endpoints:`);
      console.log(`  POST http://localhost:${PORT}/api/v1/wallet/generate`);
      console.log(`  GET  http://localhost:${PORT}/api/v1/wallet/chains`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
