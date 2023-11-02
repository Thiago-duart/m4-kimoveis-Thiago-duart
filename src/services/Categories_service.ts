import { Request, Response } from "express";
import { Category, RealEstate } from "../entities";
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
  async findRealEstatesByCategory(categoryId: number) {
    const category = AppDataSource.getRepository(Category);
    const realEstate = AppDataSource.getRepository(RealEstate);
    const id: number = Number(categoryId);

    const categoryResponse = await category.findOneBy({ id: id });

    const realEstateResponse = await realEstate.findBy({
      categoryId: !categoryResponse,
    });

    return {
      id: id,
      name: categoryResponse?.name,
      realEstate: [...realEstateResponse],
    };
  }
}
