import { PlantEntity } from "../entities/plant";

export interface PlantRepository {
    getPlants(): Promise<PlantEntity[]>;
    addPlant(entity: PlantEntity): Promise<PlantEntity>;
}
