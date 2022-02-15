import Link from 'next/link'
import React, { useState } from 'react'
import styles from "../styles/navbar.module.css"
import { FaBars, FaTimes } from "react-icons/fa"
import { Typography } from '@mui/material'
export default function Navbar() {
    const [clicked, setClicked] = useState(false)
    return (
        <nav className={styles.navbar}>
            <div className={styles.deskMenu}>
                <div className={styles.leftSide} >
                    <Typography variant='h4'  style={{ fontWeight: '600'}}>
                        Web Logic
                    </Typography>
                </div>
                <div className={styles.rightSide}>
                    <Link href="/">
                        <a onClick={()=>{setClicked(false)}}><Typography variant="body1" style={{ fontStyle: 'bold', fontWeight: '500' }}> Home</Typography></a>
                    </Link>
                    <Link href="/services">
                        <a onClick={()=>{setClicked(false)}}><Typography variant="body1" style={{ fontStyle: 'bold', fontWeight: '500' }}>Services</Typography></a>
                    </Link>
                    <Link href="/about">
                        <a onClick={()=>{setClicked(false)}}><Typography variant="body1" style={{ fontStyle: 'bold', fontWeight: '500' }}>About</Typography></a>
                    </Link>
                    <Link href="/contact">
                        <a onClick={()=>{setClicked(false)}}><Typography variant="body1" style={{ fontStyle: 'bold', fontWeight: '500' }}>Contact</Typography></a>
                    </Link>
                </div>
            </div>
            <div className={styles.mobileMenu}>
                <div className={styles.logo}>
                    <Typography variant='h4'  style={{ fontSize:'1.8rem', fontWeight: '600' }}>
                        Web Logic
                    </Typography>
                    <div
                        className={styles.menuIcon}
                        onClick={() => {
                            setClicked(!clicked);
                        }}
                    >
                        {clicked ? <FaTimes size={20}/> : <FaBars size={25} color="white" />}
                    </div>
                </div>
                <ul className={clicked ? styles.active : styles.normal}>
                    <Link href="/">
                        <a onClick={()=>{setClicked(false)}}><Typography variant="body1" style={{ fontStyle: 'bold', fontWeight: '500',marginTop:'5px' }}> Home</Typography></a>
                    </Link>
                    <Link href="/services">
                        <a onClick={()=>{setClicked(false)}}><Typography variant="body1" style={{ fontStyle: 'bold', fontWeight: '500',marginTop:'5px' }}>Services</Typography></a>
                    </Link>
                    <Link href="/about">
                        <a onClick={()=>{setClicked(false)}}><Typography variant="body1" style={{ fontStyle: 'bold', fontWeight: '500',marginTop:'5px' }}>About</Typography></a>
                    </Link>
                    <Link href="/contact">
                        <a onClick={()=>{setClicked(false)}}><Typography variant="body1" style={{ fontStyle: 'bold', fontWeight: '500' }}>Contact</Typography></a>
                    </Link>
                </ul>

            </div>

        </nav>
    )
}


