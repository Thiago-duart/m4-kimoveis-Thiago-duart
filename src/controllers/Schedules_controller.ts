import { Request, Response } from "express";
import { ScheduleServices } from "../services/Schedules_service";
import { localsType } from "../interface/User_type";
const scheduleService = new ScheduleServices();
export class SchedulesControler {
  async createSchedule(req: Request, res: Response) {
    const { decoded } = res.locals;
    try {
      const response = await scheduleService.createSchedule(req.body, decoded);
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async findScheduleByRealEstateId(req: Request, res: Response) {
    const { decoded } = res.locals;
    try {
      const id: number = Number(req.params.id);
      const response = await scheduleService.findScheduleByRealEstateId(id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
