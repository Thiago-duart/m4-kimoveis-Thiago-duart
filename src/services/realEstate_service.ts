import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { RealEstate } from "../entities";

export class RealEstateService {
  async createRealEstate(realEstateData: RealEstate) {
    const repo = AppDataSource.getRepository(RealEstate);

    const realEstate: RealEstate = await repo.save(repo.create(realEstateData));

    return realEstate;
  }
  //   async findCategories() {
  //     const repo = AppDataSource.getRepository();

  //   }
  //   async findRealEstatesByCategory(req: Request, res: Response) {
  //     const repo = AppDataSource.getRepository();
  //   }
}
