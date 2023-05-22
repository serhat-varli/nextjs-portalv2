import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './product.module.scss'

export default function Product() {

    const product = [
        {
            id: 1,
            name: "ICEWAYS",
            descriptin: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
            url: "#"
        },
        {
            id: 1,
            name: "Driveways Sport",
            descriptin: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
            url: "#"
        },
        {
            id: 1,
            name: "Driveways COMPETUS H/P",
            descriptin: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
            url: "#"
        },
        {
            id: 1,
            name: "ICEWAYS",
            descriptin: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
            url: "#"
        },
        {
            id: 1,
            name: "Driveways Sport",
            descriptin: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
            url: "#"
        },
        {
            id: 1,
            name: "Driveways COMPETUS H/P",
            descriptin: "City life is changing. So are the habits of urban citizens. 4X4 cars that were previously used only on challenging lands are now preferred for urban use.",
            url: "#"
        }
    ]

    var sliderProduct = {
        dots: true,
        infinite: true,
        arrows: true,
        centerMode: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    arrows: true,
                    centerMode: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    };
    return (
        <>
            <div className={styles.product}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Featured Products</h2>

                            <Slider {...sliderProduct}>
                                {
                                    product.map(slider => (
                                        <div key={slider.id} className={`${styles.slider__items}`}>
                                            <div className={styles.item__info}>
                                                <h3>{slider.name}</h3>
                                                <p>{slider.descriptin}</p>
                                            </div>
                                            <div className={styles.button__wrap}>
                                                <Link href={slider.url} className={styles.btn__one}>Learn More</Link>
                                                <Link href={slider.url} className={styles.btn__two}>Find a Dealer</Link>
                                            </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}