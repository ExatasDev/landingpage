
import { createContext, useState, useEffect, useContext } from "react"

export const GlobalContext = createContext({})

export const GlobalContextProvider = ({children}) => {

    const localeAvailable = ['pt-br', 'en']

    // default language
      let defaultLocale = 'pt-br' 
      const [locale, setLocale] = useState(() => {
          const localeFromLocalStorage = window.localStorage.getItem("lang");

          return localeFromLocalStorage ? localeFromLocalStorage : defaultLocale;
      });


    useEffect(() => {
        const localeFromLocalStorage = window.localStorage.getItem("lang");
        if(localeFromLocalStorage !== locale){
            window.localStorage.setItem("lang", locale)
        }
    },[locale])
    
    return (
        <GlobalContext.Provider
                value={{
                    localeAvailable,
                    locale, 
                    setLocale
                }}>

            {children}
        </GlobalContext.Provider>
    )
}


export function useGlobal(){
    const context = useContext(GlobalContext)
    const {localeAvailable, locale, setLocale} = context
    return {
        localeAvailable,
        locale, 
        setLocale
    }

}
