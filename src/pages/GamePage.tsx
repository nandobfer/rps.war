import React, { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { Troop } from "../components/Troop"
import { useIo } from "../hooks/useIo"
import { Team } from "../types/Team"
import { unstable_batchedUpdates } from "react-dom"

interface GamePageProps {}

export const GamePage: React.FC<GamePageProps> = ({}) => {
    const io = useIo()

    const [teams, setTeams] = useState<Team[]>([])

    useEffect(() => {
        io.on("war:sync", (teams) => {
            unstable_batchedUpdates(() => {
                setTeams(teams)
            })
        })

        return () => {
            io.off("war:sync")
        }
    }, [])

    return <Box sx={{ position: "relative" }}>{teams.map((team) => team.units.map((unit) => <Troop key={unit.id} unit={unit} />))}</Box>
}
