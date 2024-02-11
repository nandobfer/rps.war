import React, { useContext } from "react"
import { Box, Button, Slider } from "@mui/material"
import SettingsContext, { Settings } from "../contexts/settingsContext"
import { useNavigate } from "react-router-dom"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate()

    const { settings, setSettings } = useContext(SettingsContext)

    const changeSettings = (value: Partial<Settings>) => {
        setSettings((settings) => ({ ...settings, ...value }))
    }

    return (
        <Box sx={{ flexDirection: "column", alignItems: "center", padding: 5, width: 1, gap: 10 }}>
            <Box sx={{ flexDirection: "column", gap: 2, alignItems: "center" }}>
                <h1>pedra, papel e tesoura</h1>
                <h2>a guerra</h2>
            </Box>

            <Box sx={{ width: 0.5, flexDirection: "column" }}>
                <Box sx={{ width: 1, justifyContent: "space-between", flexDirection: "row" }}>
                    <p>tamanho da tropa</p>
                    <p>{settings.units}</p>
                </Box>
                <Slider value={settings.units} onChange={(_, value) => changeSettings({ units: value as number })} min={2} max={500} />
            </Box>

            <Box sx={{ width: 0.5, flexDirection: "column" }}>
                <Box sx={{ width: 1, justifyContent: "space-between", flexDirection: "row" }}>
                    <p>velocidade</p>
                    <p>{settings.speed}</p>
                </Box>
                <Slider value={settings.speed} onChange={(_, value) => changeSettings({ speed: value as number })} min={1} max={10} />
            </Box>

            <Button variant="outlined" onClick={() => navigate("/game")}>
                <h2>começar</h2>
            </Button>
        </Box>
    )
}
