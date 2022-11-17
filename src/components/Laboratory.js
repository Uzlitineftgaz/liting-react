import React, {useContext} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {AppContext} from "../context";
import {useTranslation} from "react-i18next";

function SampleNextArrow(props){
    const { className, style, onClick } = props;
    return(
        <div
            className={className}
            style={{...style, display:'block', right:"-50px"}}
            onClick={onClick}
        > </div>
    );
}

function SamplePrevArrow(props){
    const { className, style, onClick } = props;
    return(
        <div
            className={className}
            style={{...style, display:'block', left:"-70px"}}
            onClick={onClick}
        > </div>
    );
}

const Laboratory = ({dataLaboratory}) => {

    const {getCookie} = useContext(AppContext);
        const settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 1500,
            pauseOnHover: true,
            nextArrow: <SampleNextArrow/>,
            prevArrow: <SamplePrevArrow/>,
            initialSlide: 0,
            responsive:[
                {
                    breakpoint:1024,
                    settings:{
                        slidesToShow: 2,
                        slidesToScroll:1,
                        initialSlide: 2,
                    }
                },
                {
                    breakpoint:600,
                    settings:{
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1,
                    }
                },
            ]
        };
        const { t } = useTranslation();

    return (
        <section className="section-padding section-padding bg-light-white bg-light-white our_articles">
            <div className="container">
                <div className="section-header">
                    <div className="section-heading">
                        <h3 data-text={t("Laboratory.Title")} className="text-theme fw-700">
                            {t("Laboratory.Title")}
                        </h3>
                    </div>
                    <div className="section-description">
                        <p className="text-light-white">{t("Laboratory.Text")}</p>
                        <p className="text-light-white">{t("Laboratory.Text-2")}</p>
                    </div>
                </div>
                <Slider {...settings}>
                        {dataLaboratory && dataLaboratory.map((slides, index) =>
                            <div key={index} className="sliderBlockContainer">
                                <div className="sliderBlockContainerChild">
                                    <div className="slidesOurBlockImgBox">
                                        <img src={slides.image} className="slidesOurBlockImg" />
                                    </div>
                                    <div className="post-date">
                                        <p className="post-data-a">2022.11.11</p>
                                    </div>
                                    <div>
                                        <div>
                                            <div className="cats">
                                                <a href="#" className="cats-office">Лаборатория...</a> 
                                                {/* <a href="#" className="cats-rent">{slides.rent}</a> */}
                                            </div>
                                        </div>
                                        <div className="post-title-parent" style={{height: '180px'}}>
                                            <h2 className="post-title" style={{color: '#030e27'}}>
                                                {getCookie.i18next === "en" ? slides.title_en :
                                                    getCookie.i18next === "uz" ? slides.title_uz :
                                                        getCookie.i18next === "oz" ? slides.title_oz : slides.title_ru}
                                            </h2>
                                            {/* <p className="text-light-white no-margin">{
                                                getCookie.i18next === "en" ? slides.anons_en :
                                                    getCookie.i18next === "uz" ? slides.anons_uz :
                                                        getCookie.i18next === "oz" ? slides.anons_oz : slides.anons_ru
                                            }</p> */}
                                        </div>
                                        <div className="blog-footer-meta bg-custom-white padding-20">
                                            {/* <div className="post-author">
                                                <div className="author-img">
                                                   <a href="blog-single.html">
                                                       <img src="../assets/images/homepage-1/admin-1-40x40.jpg" className="rounded-circle" alt="#"/>
                                                   </a>
                                                </div>
                                                <span className="text-theme fs-14">By <a href="blog-single.html" className="text-theme fw-500">Администратор</a></span>
                                            </div> */}
                                            <div className="post-link d-flex justify-content-between w-100">
                                                <a href="#" className="link-btn text-custom-blue fw-600 fs-14">{t("StartBlock.readMore")}</a>
                                                {/* <p className="text-light-white">
                                                    <i className="fas fa-eye"></i>
                                                    <span className="pl-1">{slides.view_count}</span>
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                </Slider>
            </div>
        </section>
    )
}

export default Laboratory;