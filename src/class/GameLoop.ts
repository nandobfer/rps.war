import { War } from "./War"

class GameLoop {
    lastFrameTimeMs = 0
    maxFPS = 60
    war: War

    constructor(war: War) {
        this.war = war
    }

    start() {
        requestAnimationFrame(this.loop.bind(this))
    }

    loop(timestamp: number) {
        if (timestamp < this.lastFrameTimeMs + 1000 / this.maxFPS) {
            requestAnimationFrame(this.loop.bind(this))
            return
        }
        this.update()
        this.war.render()
        this.lastFrameTimeMs = timestamp
        requestAnimationFrame(this.loop.bind(this))
    }

    update() {
        this.war.teams.forEach((team) => {
            team.units.forEach((unit) => unit.move())
        })
    }
}
