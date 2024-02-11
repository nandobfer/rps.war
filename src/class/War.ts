import { WarOptions } from "../types/WarOptions"
import { Team } from "./Team"

export class War {
    teams: Team[] = []
    render: () => void

    constructor(data: WarOptions) {
        this.render = data.render

        this.teams.push(new Team({ color: "red", sector_x: 1, sector_y: 1, units: data.units, quadrant_size: data.quadrant_size }))
        this.teams.push(new Team({ color: "green", sector_x: 2, sector_y: 1, units: data.units, quadrant_size: data.quadrant_size }))
        this.teams.push(new Team({ color: "blue", sector_x: 1, sector_y: 2, units: data.units, quadrant_size: data.quadrant_size }))
    }
}
