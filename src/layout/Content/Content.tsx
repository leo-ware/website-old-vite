import React from "react"
// import styles from "./Content.module.css"

type ContentType = {
    title?: string
    children: React.ReactNode
}

const Content: React.FC<ContentType> = (props) => {
    return (
        <>{props.children}</>
    )
    // return (
    //     <div className={styles.contentContainer}>
    //         {props.children}
    //     </div>
    // )
}

export default Content