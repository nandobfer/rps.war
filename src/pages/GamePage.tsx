import React, { useContext, useEffect, useState } from "react"
import { Box } from "@mui/material"
import SettingsContext from "../contexts/settingsContext"
import { War } from "../class/War"
import { WarOptions } from "../types/WarOptions"
import { Troop } from "../components/Troop"

interface GamePageProps {}

export const GamePage: React.FC<GamePageProps> = ({}) => {
    const { settings } = useContext(SettingsContext)
    const [render, setRender] = useState({})

    const war_options: WarOptions = {
        units: settings.units,
        quadrant_size: Math.floor(window.innerHeight / 2),
        render: () => setRender({}),
    }

    const [war, setWar] = useState(new War(war_options))

    useEffect(() => {
        console.log(war)
    }, [])

    return <Box sx={{ position: "relative" }}>{war.teams.map((team) => team.units.map((unit) => <Troop key={unit.id} unit={unit} />))}</Box>
}
