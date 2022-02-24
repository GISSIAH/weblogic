import Link from 'next/link'
import React, { useState } from 'react'
import styles from "../styles/navbar.module.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { CardMedia, Typography } from '@mui/material'
import {HiOutlineGlobe} from "react-icons/hi"
import Image from 'next/image'
export default function Navbar() {
    const [clicked, setClicked] = useState(false)
    return (
        <nav className={styles.navbar}>
            <div className={styles.deskMenu}>
                <div className={styles.leftSide} >

                    <Image src="https://res.cloudinary.com/attic-gis/image/upload/v1645716343/WhatsApp_Image_2022-02-24_at_12.03.09_yelpxe.jpg" width={250} height={35} alt="logo" />
                </div>
                <div className={styles.rightSide}>
                    <Link href="/">
                        <a onClick={() => { setClicked(false) }}><Typography variant="overline" style={{ fontStyle: 'bold', fontWeight: '500' }}> Home</Typography></a>
                    </Link>
                    <Link href="/services">
                        <a onClick={() => { setClicked(false) }}><Typography variant="overline" style={{ fontStyle: 'bold', fontWeight: '500' }}>Services</Typography></a>
                    </Link>
                    <Link href="/contact">
                        <a onClick={() => { setClicked(false) }}><Typography variant="overline" style={{ fontStyle: 'bold', fontWeight: '500' }}>Contact</Typography></a>
                    </Link>
                </div>
            </div>
            <div className={styles.mobileMenu}>
                <div className={styles.logo}>
                    <Image src="https://res.cloudinary.com/attic-gis/image/upload/v1645716343/WhatsApp_Image_2022-02-24_at_12.03.09_yelpxe.jpg" width={225} height={35} alt="logo" />
                    <div
                        className={styles.menuIcon}
                        onClick={() => {
                            setClicked(!clicked);
                        }}
                    >
                        {clicked ? <FaTimes size={20} /> : <FaBars size={25} />}
                    </div>
                </div>
                <div className={clicked ? styles.active : styles.normal}>
                    <Link href="/">
                        <a onClick={() => { setClicked(false) }}><Typography variant="body1" style={{ fontStyle: 'bold', fontWeight: '500', marginTop: '5px' }}> Home</Typography></a>
                    </Link>
                    <Link href="/services">
                        <a onClick={() => { setClicked(false) }}><Typography variant="body1" style={{ fontStyle: 'bold', fontWeight: '500', marginTop: '5px' }}>Services</Typography></a>
                    </Link>
                    <Link href="/contact">
                        <a onClick={() => { setClicked(false) }}><Typography variant="body1" style={{ fontStyle: 'bold', fontWeight: '500' }}>Contact</Typography></a>
                    </Link>
                </div>

            </div>

        </nav>
    )
}


