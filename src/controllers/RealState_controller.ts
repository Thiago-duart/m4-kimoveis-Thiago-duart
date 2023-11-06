import { RealEstateService } from "../services/realEstate_service";
import { Request, Response } from "express";

const realEstateService = new RealEstateService();
export class RealEstateController {
  async createRealEstate(req: Request, res: Response) {
    const { address, ...realEstate } = req.body;

    const addressData = {
      street: address.street,
      zipCode: address.zipCode,
      number: address.number,
      city: address.city,
      state: address.state,
    };

    const realEstateData = {
      value: realEstate.value,
      size: realEstate.size,
      category: realEstate.categoryId,
    };

    try {
      const response = await realEstateService.createRealEstate(
        addressData,
        realEstateData
      );

      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async findCategories(req: Request, res: Response) {
    try {
      const response = await realEstateService.findRealEstates();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
