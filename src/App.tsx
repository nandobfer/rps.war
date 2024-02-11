import { Paper, ThemeProvider, createTheme } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { SettingsProvider } from "./contexts/settingsContext"

function App() {
    return (
        <ThemeProvider theme={createTheme({ palette: { mode: "dark", primary: {main: '#B0413E'} } })}>
            <Paper sx={{ maxWidth: "1080px", width: "1080px", height: "100%" }}>
                <SettingsProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route index element={<Home />} />
                        </Routes>
                    </BrowserRouter>
                </SettingsProvider>
            </Paper>
        </ThemeProvider>
    )
}

export default App
