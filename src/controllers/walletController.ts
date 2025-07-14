import { Request, Response } from 'express';
import { WalletService } from '../services/walletService';
import { WalletResponse, SupportedChainsResponse, GenerateAddressRequest } from '../types/wallet.types';

export class WalletController {
  private walletService: WalletService;

  constructor() {
    this.walletService = WalletService.getInstance();
  }

  public generateAddress = async (req: Request, res: Response): Promise<void> => {
    try {
      const { chain }: GenerateAddressRequest = req.body;

      if (!chain) {
        const response: WalletResponse = {
          success: false,
          error: 'Chain parameter is required'
        };
        res.status(400).json(response);
        return;
      }

      const result = await this.walletService.generateAddress(chain);

      const response: WalletResponse = {
        success: true,
        data: {
          address: result.address,
          privateKey: result.privateKey,
          chain: chain.toLowerCase()
        }
      };

      res.json(response);
    } catch (error) {
      const response: WalletResponse = {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
      res.status(500).json(response);
    }
  };

  public getSupportedChains = async (req: Request, res: Response): Promise<void> => {
    try {
      const chains = this.walletService.getChains();

      const response: SupportedChainsResponse = {
        success: true,
        data: {
          chains
        }
      };

      res.json(response);
    } catch (error) {
      const response: SupportedChainsResponse = {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      };
      res.status(500).json(response);
    }
  };
}
