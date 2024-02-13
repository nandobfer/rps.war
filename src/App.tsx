import { Paper, ThemeProvider, createTheme } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { SettingsProvider } from "./contexts/settingsContext"
import { GamePage } from "./pages/GamePage"
import { IoProvider } from "./contexts/ioContext"
import { Snackbar, SnackbarProvider } from "burgos-snackbar"

function App() {
    return (
        <SnackbarProvider>
            <IoProvider>
                <ThemeProvider theme={createTheme({ palette: { mode: "dark", primary: { main: "#B0413E" } } })}>
                    <Paper sx={{ maxWidth: "1080px", width: "1080px", height: "100%" }}>
                        <SettingsProvider>
                            <BrowserRouter>
                                <Routes>
                                    <Route index element={<Home />} />
                                    <Route path="/game" element={<GamePage />} />
                                </Routes>
                            </BrowserRouter>
                            <Snackbar />
                        </SettingsProvider>
                    </Paper>
                </ThemeProvider>
            </IoProvider>
        </SnackbarProvider>
    )
}

export default App
