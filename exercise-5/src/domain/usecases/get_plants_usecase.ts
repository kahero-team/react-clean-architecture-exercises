import { PlantEntity } from "../entities/plant";
import { PlantRepository } from "../repositories/plant";

export class GetPlantsUsecase {
    private plantRepo: PlantRepository;
    constructor(plantRepo: PlantRepository) {
        this.plantRepo = plantRepo;
    }
    async getPlants(): Promise<PlantEntity[]> {
        return this.plantRepo.getPlants();
    }
}