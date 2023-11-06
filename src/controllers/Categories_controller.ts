import { RealEstateService } from "./../services/realEstate_service";
import { Request, Response } from "express";
import { CategoryService } from "../services/Categories_service";
import { responseCategory } from "../interface/categories_type";

const categoryService = new CategoryService();
const realEstateService = new RealEstateService();
export class CategoryControler {
  async createCategory(req: Request, res: Response) {
    try {
      const response: responseCategory = await categoryService.createCategory(
        req.body
      );
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async findCategories(req: Request, res: Response) {
    try {
      const response: responseCategory[] =
        await categoryService.findCategories();
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async findRealEstatesByCategory(req: Request, res: Response) {
    try {
      const response = await categoryService.findRealEstatesByCategory(
        +req.params.id
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
