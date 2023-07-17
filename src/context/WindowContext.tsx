import React, { createContext, useEffect, useState } from "react"

type WindowContextType = {
    mobile: boolean
}

const context = createContext<WindowContextType>({mobile: false})

export const useWindowContext = () => (
    React.useContext(context)
)

export const WindowContextProvider: React.FC<{children?: React.ReactNode}> = (props) => {
    const [mobile, setMobile] = useState(false)
    const ref = React.useRef(window)

    const listener = () => {
        if (ref.current.innerWidth >= 600) {
            setMobile(false)
        } else {
            setMobile(true)
        }
    }

    useEffect(() => {
        ref.current = window
        listener()
        ref.current.addEventListener("resize", listener)
        return () => ref.current.removeEventListener("resize", listener)
    }, [window])

    return (
        <context.Provider value={{mobile}}>
            {props.children}
        </context.Provider>
    )
}