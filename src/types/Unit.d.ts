import { UnitOptions } from "../types/UnitOptions";
export declare class Unit {
    id: string;
    x: number;
    y: number;
    image: string;
    quadrant_size: number;
    width: number;
    height: number;
    constructor(data: UnitOptions);
    generatePos(sector_x: number, sector_y: number): {
        x: number;
        y: number;
    };
    private generateX;
    private generateY;
    move(): void;
}
