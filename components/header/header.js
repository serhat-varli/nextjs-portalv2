import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from "/content/img/logo.png"
import styles from './header.module.scss'
import { useState } from 'react'

export default function Header() {
    const [active, setActive] = useState(false);
    const navMenuClick = () => {
        setActive(active === false ? true : false);
    }

    const nav = [
        {
            id : 1,
            name: "Show All Tyres",
            url: "#",
            order: 1,
        },
        {
            id : 2,
            name: "Department",
            url: "/department",
            order: 1,
        },
        {
            id : 3,
            name: "Guides & Videos",
            url: "#",
            order: 1,
        },
        {
            id : 4,
            name: "Go with",
            url: "#",
            order: 1,
        },
        {
            id : 5,
            name: "Service & Help",
            url: "#",
            order: 1,
        }
    ];

    return (
        <header className={styles.header}>
            <div className="container">
                <div className='row'>
                    <div className="align-items-center col-12 col-lg-3 d-flex justify-content-between">
                        <Link href="/" className={styles.logo}>
                            <Image src={logo} alt="Rick And Morty" width={170} height={44} />
                        </Link>
                        <span onClick={() => navMenuClick()} className={active ? "icon-close" : "icon-menu1"}></span>
                    </div>
                    <div className="col-lg-9 col-12">
                        <ul className={[styles["nav"], active == true ? styles.active : ""].join(" ")}>
                            {
                              nav?.map((nav, index) => (
                                    <>
                                        <li key={index}><Link href={nav.url}>{nav.name} <span className='icon-next'></span> </Link></li>
                                    </>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}