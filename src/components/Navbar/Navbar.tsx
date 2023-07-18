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

const Navbar: React.FC<{scrolled?: boolean, overScrolled?: boolean}> = ({scrolled}) => {

    const {mobile} = useWindowContext()
    const [open, setOpen] = useState(false)

    if (!mobile && open) {
        setOpen(false)
    }

    return (
        <div className={styles.main + " " + (scrolled && styles.mainScrolled)}>
            <div className={styles.nav + " " + (open && styles.navOpen)}>
                <div className={styles.left + " " + styles.lr}>
                    <div className={styles.name}>
                        <h2>Leo Ware</h2>
                    </div>
                </div>
                <div className={styles.right + " " + styles.lr}>
                    {mobile
                        ? <NavbarDropDownIcon onClick={() => setOpen(!open)}/>
                        : ["About", "Projects", "CV"].map((name) => (
                            <div key={name} className={styles.linkContainer}>
                                <Link to={name.toLowerCase()} style={{textDecoration: "none"}}>
                                    <h2 className={styles.linkText}>{name}</h2>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            {open &&
                <div className={styles.dd}>
                    {["About", "Projects", "CV"].map((name) => (
                            <div className={styles.linkContainer}>
                                <Link to={name.toLowerCase()} className={styles.linkDD}>
                                    <h4 className={styles.linkText}>{name}</h4>
                                </Link>
                            </div>
                        ))}
                </div>}
        </div>
    )
}

export default Navbar
