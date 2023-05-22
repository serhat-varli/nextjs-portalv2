import React from "react";
import Link from "next/link";
import styles from './videoAll.module.scss'

export default function VideoAll() {
    return (
        <>
            <div className={styles.video__all}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className={styles.video__head}>
                                <h2>
                                    Feel the excellent wet braking <br /> with Driveways!
                                </h2>
                                <Link href="#" className={styles.btn}>
                                    Watch All Videos
                                </Link>
                            </div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/i4ewZPDaqcE" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            <Link href="#" className={[styles.btn, styles.btn__mobile].join(" ")}>
                                Watch All Videos
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}