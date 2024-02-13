/// <reference types="node" />
import { Server } from "socket.io";
import { WarOptions } from "../types/WarOptions";
import { Team } from "./Team";
export declare class War {
    teams: Team[];
    loop: NodeJS.Timer | null;
    io: Server | null;
    quadrant_size: number;
    units: number;
    constructor(data: WarOptions);
    start(): void;
    stop(): void;
    sync(): void;
}
