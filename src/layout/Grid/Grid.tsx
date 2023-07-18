import React, {useRef, useState} from "react"
import styles from "./Grid.module.css"
import Navbar from "../../components/Navbar/Navbar"

type GridType = {
    children: React.ReactNode
}

const Grid: React.FC<GridType> = (props) => {
    const contentOuterRef = useRef<null | HTMLDivElement>(null)
    const [scrolled, setScrolled] = useState(false)
    const [overScrolled, setOverScrolled] = useState(false)

    const handleScroll: React.EventHandler<React.UIEvent<HTMLDivElement>> = () => {
        const func = () => {
            if (contentOuterRef.current) {
                const scrollTop = contentOuterRef.current.scrollTop
                scrollTop
                    ? setScrolled(true)
                    : setScrolled(false)
                scrollTop > 200
                    ? setOverScrolled(true)
                    : setOverScrolled(false)
            }
        }

        (async () => setTimeout(func, 0))()
    }

    return (
        <div className={styles.main}>
            <div className={styles.headerContainer}>
                <Navbar scrolled={scrolled} overScrolled={overScrolled}/>
            </div>
            <div className={styles.contentOuter} ref={contentOuterRef} onScroll={handleScroll}>
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