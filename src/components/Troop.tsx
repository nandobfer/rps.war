import React, { useEffect } from "react"
import { Box, CardMedia } from "@mui/material"
import { Unit } from "../types/Unit"
import { getImageUrl } from "../tools/getImageUrl"

interface TroopProps {
    unit: Unit
}

export const Troop: React.FC<TroopProps> = ({ unit }) => {
    return (
        <CardMedia
            sx={{ position: "absolute", left: unit.x, top: unit.y, width: unit.width, height: unit.height }}
            image={getImageUrl(unit.image)}
        ></CardMedia>
    )
}
