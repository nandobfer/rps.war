import { server_url } from "../server_url"

export const getImageUrl = (endpoint: string) => {
    const base = `http${server_url}`
    return base + endpoint
}
