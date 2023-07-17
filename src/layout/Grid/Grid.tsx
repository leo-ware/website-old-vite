import React from "react"
import styles from "./Grid.module.css"

type GridType = {
    header?: React.ReactNode
    children: React.ReactNode
}

const Grid: React.FC<GridType> = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.headerContainer}>
                {props.header}
            </div>
            <div className={styles.contentOuter}>
                <div className={styles.scrollContainer}>
                    <div className={styles.contentMargin}/>
                    <div className={styles.contentInner}>
                        {props.children}
                    </div>
                    <div className={styles.contentMargin}/>
                </div>
            </div>
        </div>
    )
}

export default Grid