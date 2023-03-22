import { PlantEntity } from "../entities/plant";
import { PlantRepository } from "../repositories/plant";

export class AddPlantUsecase {
    private plantRepo: PlantRepository;
    constructor(plantRepo: PlantRepository) {
        this.plantRepo = plantRepo;
    }
    async addPlant(entity: PlantEntity): Promise<PlantEntity> {
        return this.plantRepo.addPlant(entity);
    }
}