import { TeamOptions } from "../types/TeamOptions"
import { Unit } from "./Unit"

export class Team {
    units: Unit[] = []
    color: string

    constructor(data: TeamOptions) {
        this.color = data.color

        for (let index = 1; index <= data.units; index++) {
            const unit = new Unit(data)
            this.units.push(unit)
        }
    }
}
