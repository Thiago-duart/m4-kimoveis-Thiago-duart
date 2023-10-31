import { Request, Response } from "express";
import { Category } from "../entities";
import { AppDataSource } from "../data-source";
import { CreateCategoryType } from "../interface/categories_type";

export class CategoryService {
  async createCategory(CategoryData: CreateCategoryType) {
    const repo = AppDataSource.getRepository(Category);

    const category: Category = await repo.save(repo.create(CategoryData));

    return category;
  }
  async findCategories() {
    const repo = AppDataSource.getRepository(Category);

    const response: Category[] = await repo.find();

    return response;
  }
  async findRealEstatesByCategory(req: Request, res: Response) {
    const repo = AppDataSource.getRepository(Category);
  }
}
