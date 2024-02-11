import React from "react"
import { Box, CardMedia } from "@mui/material"
import { Unit } from "../class/Unit"

interface TroopProps {
    unit: Unit
}

export const Troop: React.FC<TroopProps> = ({ unit }) => {
    return <CardMedia sx={{ position: "absolute", left: unit.x, top: unit.y, width: unit.width, height: unit.height }} image={unit.image}></CardMedia>
}
