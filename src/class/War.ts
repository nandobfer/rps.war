import { WarOptions } from "../types/WarOptions"
import { Team } from "./Team"
import rock from "../assets/rock.webp"
import paper from "../assets/paper.webp"
import scissors from "../assets/scissors.webp"

export class War {
    teams: Team[] = []
    render: () => void

    constructor(data: WarOptions) {
        this.render = data.render

        this.teams.push(new Team({ image: rock, sector_x: 1, sector_y: 1, units: data.units, quadrant_size: data.quadrant_size }))
        this.teams.push(new Team({ image: paper, sector_x: 2, sector_y: 1, units: data.units, quadrant_size: data.quadrant_size }))
        this.teams.push(new Team({ image: scissors, sector_x: 1, sector_y: 2, units: data.units, quadrant_size: data.quadrant_size }))
    }
}
