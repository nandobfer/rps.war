import { createContext, useState } from 'react';
import React from 'react';

export interface Settings {
    units: number
    speed: number
}

interface SettingsContextValue {
    settings: Settings;
    setSettings: React.Dispatch<React.SetStateAction<Settings>>
}

interface SettingsProviderProps {
    children: React.ReactNode
}

const SettingsContext = createContext<SettingsContextValue>({} as SettingsContextValue);

export default SettingsContext;

export const SettingsProvider:React.FC<SettingsProviderProps> = ({children}) => {
    const [settings, setSettings] = useState<Settings>({speed: 1, units: 10})

    return (
         <SettingsContext.Provider value={{settings, setSettings}}>
              {children}
         </SettingsContext.Provider>
    )
}