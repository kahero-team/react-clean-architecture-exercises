import { PlantEntity } from "../entities/plant";

export interface PlantRepository {
    getPlants(): Promise<PlantEntity[]>;
}
