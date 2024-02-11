import { uid } from "uid"
import { UnitOptions } from "../types/UnitOptions"
import random from "random"

export class Unit {
    id: string
    x: number
    y: number
    image: string

    width = 30
    height = 30

    constructor(data: UnitOptions) {
        this.id = uid()
        const { x, y } = this.generatePos(data.sector_x, data.sector_y, data.quadrant_size)
        this.x = x
        this.y = y
        this.image = data.image
    }

    generatePos(sector_x: number, sector_y: number, quadrant_size: number) {
        const max_x = quadrant_size * sector_x
        const min_x = max_x - quadrant_size
        const max_y = quadrant_size * sector_y
        const min_y = max_y - quadrant_size

        let x = random.int(min_x, max_x)
        let y = random.int(min_y, max_y)

        if (x + this.width > max_x) {
            x = this.generatePos(sector_x, sector_y, quadrant_size).x
        }

        if (y + this.height > max_y) {
            y = this.generatePos(sector_x, sector_y, quadrant_size).y
        }

        return { x, y }
    }
}
