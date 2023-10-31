import { RealEstateService } from "../services/realEstate_service";
import { RealEstate } from "./../entities/RealEstate_entities";
import { Request, Response } from "express";
const realEstateService = new RealEstateService();
export class RealEstateController {
  async createRealEstate(req: Request, res: Response) {
    try {
      const response: RealEstate = await realEstateService.createRealEstate(
        req.body
      );
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  //   async findCategories() {
  //     const repo = AppDataSource.getRepository();

  //   }
  //   async findRealEstatesByCategory(req: Request, res: Response) {
  //     const repo = AppDataSource.getRepository();
  //   }
}
