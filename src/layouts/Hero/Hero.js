import Slider from "react-slick";
import './Hero.css'
import useOnView from "../../utils/useOnView";
import { useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { carouselData } from "./Hero.data";
import ArrowRight from "../../components/Icons/ArrowRight";

export default () => {

    const intl = useIntl();

    var settings = {
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };
      const ref = useRef(document.body)

      function startVideo(){
        var video = document.getElementById("hero-background-video");
        video.play();
      }

      useOnView({
        ref,
        onView: () => {
            startVideo()
        },
        once: true,
        initializeOnInteraction: true

    })
      
    return (
        <div className="hero" id="home">
            <div className="hero-container">
                <div className="hero-media">
                    {/* ---------------- VIDEO */}
                    <video id="hero-background-video" autoplay muted loop playsinline>
                        <source src="/landingpage/video/background-video.mp4" type='video/mp4' />
                    </video>
                    {/* ---------------- HEADING */}
                    <div className="hero-content">
                        <span className="hero-subHeading">@exatas_consultoria_digital</span>
                        <h1 className="hero-heading"  dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "hero.heading" }) }} />
                        <a href="#service" class="buttonDefaultArrowRight">
                            <FormattedMessage id="hero.button" />
                            <ArrowRight />
                        </a>
                    </div>

                </div>                
                <div className="hero-slider">
                <Slider {...settings} >
                        {carouselData.map(text => (
                            <div className="hero-slider__item">
                                <span className="hero-slider__text">
                                    {text}
                                </span>
                            </div>
                        ))}
                    </Slider>
                    <div className="hero-slider__divider" />
                </div>
            </div>
        </div>
    )
}