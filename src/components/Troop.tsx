import React from "react"
import { Box } from "@mui/material"
import { Unit } from "../class/Unit"

interface TroopProps {
    unit: Unit
}

export const Troop: React.FC<TroopProps> = ({ unit }) => {
    return <Box sx={{ position: "absolute", left: unit.x, top: unit.y, bgcolor: unit.color, width: unit.width, height: unit.height }}></Box>
}
