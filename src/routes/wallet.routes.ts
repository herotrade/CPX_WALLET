import { Router } from 'express';
import { WalletController } from '../controllers/walletController';

const router = Router();
const walletController = new WalletController();

router.post('/generate', walletController.generateAddress);
router.get('/chains', walletController.getSupportedChains);

export default router;
