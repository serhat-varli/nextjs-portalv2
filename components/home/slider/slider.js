import React from "react";
import Image from "next/image";
import slider from "/content/img/slider.png"
import sliderMobile from "/content/img/slider-mobil.png"
import styles from './slider.module.scss'
import Link from "next/link";

export default function Slider() {
    return (
        <>
            <picture className={styles.slider}>
                <Image className={styles.mobile} src={sliderMobile}  height="464" width="1440" alt="..." />
                <Image className={styles.desktop} src={ slider}  height="464" width="1440" alt="..." />
                <figcaption>
                    <h2>
                        Nothing can stop <br />
                        you
                    </h2>
                    <Link href="#" className={styles.btn}>
                        FIND OUT MORE
                    </Link>
                </figcaption>
            </picture>
        </>
    )
}


