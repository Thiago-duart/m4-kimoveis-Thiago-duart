import { createQueryBuilder } from "typeorm";
import { AppDataSource } from "../data-source";
import { Address, Category, RealEstate } from "../entities";

export class RealEstateService {
  async createRealEstate(
    anddressData: Partial<Address>,
    realEstateData: Partial<RealEstate>
  ) {
    const repoAddress = AppDataSource.getRepository(Address);
    const repoRealEstate = AppDataSource.getRepository(RealEstate);
    const repoCategory = AppDataSource.getRepository(Category);

    const findCategory = await repoCategory.findBy({
      id: Number(realEstateData.categoryId),
    });

    const createAddress: Address = await repoAddress.save(
      repoAddress.create(anddressData)
    );

    realEstateData.addressId = createAddress;
    realEstateData.categoryId = findCategory[0];

    const createRealEstate = await repoRealEstate.save(
      repoRealEstate.create(realEstateData)
    );
    const { addressId, categoryId, ...payload } = createRealEstate;

    const response = {
      address: { ...addressId },
      category: { ...categoryId },
      ...payload,
    };

    return response;
  }
  async findRealEstates() {
    // essa maneira tava funcionando perfeitamente no insominia mas por algum motivo nos testes n funciona
    // const realEstate = await AppDataSource.getRepository(RealEstate)
    //   .createQueryBuilder("realEstates")
    //   .innerJoinAndSelect("realEstates.addressId", "addresses")
    //   .getMany();

    // const responseFormat = realEstate.map((real) => {
    //   const { addressId, ...payload } = real;
    //   return {
    //     address: { ...addressId },
    //     ...payload,
    //   };
    // });
    const realEstate = await AppDataSource.getRepository(RealEstate).find();

    const address = await Promise.all(
      realEstate.map(async (real) => {
        const address = await AppDataSource.getRepository(Address).findOneBy({
          id: real.id,
        });
        return address;
      })
    );
    const formatResponse = realEstate.map((real, indice) => {
      return {
        ...real,
        address: { ...address[indice] },
      };
    });

    return formatResponse;
  }
}
