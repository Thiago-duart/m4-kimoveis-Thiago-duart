import { Equal } from "typeorm";
import { AppDataSource } from "../data-source";
import { Category, RealEstate, Schedule, User } from "../entities";
import { localsType } from "../interface/User_type";
import { scheduleDataType } from "../interface/schedule_type";

export class ScheduleServices {
  async createSchedule(
    scheduleData: scheduleDataType & Schedule,
    resLocals: localsType | Record<string, any>
  ) {
    const scheduleRepo = AppDataSource.getRepository(Schedule);
    const userRepo = AppDataSource.getRepository(User);
    const realEstateRepo = AppDataSource.getRepository(RealEstate);

    const userId = +resLocals.sub;

    const { realEstateId, ...payload } = scheduleData;

    const user = await userRepo.findOneBy({
      id: userId,
    });

    const realEstate = await realEstateRepo.findOneBy({
      id: Number(realEstateId),
    });

    scheduleData.user = user!;
    scheduleData.realEstate = realEstate!;

    await scheduleRepo.save(scheduleRepo.create(scheduleData));

    return { message: "Schedule created" };
  }
  async findScheduleByRealEstateId(realEstateId: number) {
    const realEstateRepo = AppDataSource.getRepository(RealEstate);
    const scheduleRepo = AppDataSource.getRepository(Schedule);

    const realEstate: RealEstate | null = await realEstateRepo.findOne({
      where: { id: realEstateId },
      relations: {
        schedules: {
          user: true,
        },
        category: true,
        address: true,
      },
    });

    return realEstate;
  }
}
