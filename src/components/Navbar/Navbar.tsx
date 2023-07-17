import React, { useState } from "react"
import styles from "./Navbar.module.css"
import {Link} from "react-router-dom"
import { useWindowContext } from "../../context/WindowContext"

const NavbarLink: React.FC<{name: string}> = (props) => {
    return (
        <div className={styles.linkContainer}>
            <Link to={props.name.toLowerCase()} style={{textDecoration: "none"}}>
                <h2 className={styles.linkText}>{props.name}</h2>
            </Link>
        </div>
    )
}

const NavbarDropDownIcon: React.FC<{onClick?: () => void}> = (props) => {
    return (
        <div className={styles.dropdownIcon} onClick={props.onClick}>
            {/* <div className={styles.bar}/>
            <div className={styles.bar}/>
            <div className={styles.bar}/> */}
        </div>
    )
}

const Navbar: React.FC = () => {

    const {mobile} = useWindowContext()
    const [open, setOpen] = useState(false)

    console.log(open)

    if (!mobile && open) {
        setOpen(false)
    }

    return (
        <div className={styles.main}>
            <div className={styles.nav}>
                <div className={styles.left + " " + styles.lr}>
                    <div className={styles.name}>
                        <h2>Leo Ware</h2>
                    </div>
                </div>
                <div className={styles.right + " " + styles.lr}>
                    {mobile
                        ? <NavbarDropDownIcon onClick={() => setOpen(!open)}/>
                        : ["About", "Projects", "CV"].map((name) => (
                            <NavbarLink key={name} name={name}/>
                        ))
                    }
                </div>
            </div>
            {open &&
                <div className={styles.dd}>
                    {["About", "Projects", "CV"].map((name) => (
                            <NavbarLink name={name}/>
                        ))}
                </div>}
        </div>
    )
}

export default Navbar
