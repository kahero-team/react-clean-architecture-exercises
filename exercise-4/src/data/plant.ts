import { PlantEntity } from "../domain/entities/plant";
import { PlantRepository } from "../domain/repositories/plant";

export class PlantDataRepository implements PlantRepository {
    async getPlants(): Promise<PlantEntity[]> {
        return [];
    }
    async addPlant(entity: PlantEntity): Promise<PlantEntity> {
        return entity
    }
}
