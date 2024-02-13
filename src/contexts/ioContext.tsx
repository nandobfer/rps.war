import { useSnackbar } from "burgos-snackbar"
import { createContext, useEffect } from "react"
import React from "react"
import { Socket, io as ioSocket } from "socket.io-client"
import { server_url } from "../server_url"

interface IoContextValue {
    io: Socket
}

interface IoProviderProps {
    children: React.ReactNode
}

const IoContext = createContext<IoContextValue>({} as IoContextValue)

export default IoContext

const io = ioSocket(`ws${server_url}`)
// const io = ioSocket("wss://agencyboz.com:8080")

export const IoProvider: React.FC<IoProviderProps> = ({ children }) => {
    const { snackbar } = useSnackbar()

    useEffect(() => {
        io.once("connect_error", () => {
            snackbar({ severity: "error", text: "Não foi possível se conectar com o servidor, verifique sua conexão com a internet" })
        })

        io.on("connect", () => {
            snackbar({ severity: "success", text: "Conectado com o servidor" })
        })

        io.on("disconnect", (reason) => {
            if (reason == "io client disconnect" || reason == "io server disconnect") {
                snackbar({ severity: "info", text: "Desconectado do servidor" })
            } else {
                snackbar({ severity: "error", text: "Conexão com o servidor perdida! Tentando reconectar automaticamente" })
            }
        })

        return () => {
            io.off("connect_error")
            io.off("connect")
            io.off("disconnect")
        }
    }, [])

    return <IoContext.Provider value={{ io }}>{children}</IoContext.Provider>
}
