import { TeamOptions } from "../types/TeamOptions";
import { Unit } from "./Unit";
export declare class Team {
    units: Unit[];
    image: string;
    constructor(data: TeamOptions);
}
