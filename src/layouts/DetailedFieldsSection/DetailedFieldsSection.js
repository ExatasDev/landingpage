import './DetailedFieldsSection.css'
import Slider from "react-slick";
import { FormattedMessage } from "react-intl"
import data from './data'
import ArrowRight from '../../components/Icons/ArrowRight'
import { useRef } from 'react';
import Right from '../../components/Icons/Right';
import Left from '../../components/Icons/Left';
import Check from '../../components/Icons/Check';
import { isDesktop } from 'react-device-detect';
import { emitter } from '../../components/Modals/Modal';

export default () => {

    const slider = useRef(null);

    var settings = {
        autoplay: false,
        infinite: false,
        slidesToShow: isDesktop ? 2.5 : 1,
        slidesToScroll: 1,
        arrows: false
    };
    const handleCardClick = (id) => {
        const filteredData = data.find((el) => el.id == id)

        emitter.emit('openModal');
        emitter.emit('setDataContent', filteredData);
        emitter.emit('setModalType', 'detailed');
    }

    return (
        <div className="section-detailed-fields" id="service">
            <div />
            <div className="section-detailed-fields__container">
                <div className="section-detailed-fields__title">
                    <h1 className="section-detailed-fields__heading">
                        <FormattedMessage id="section-detailed-fields.heading" />
                    </h1>
                    <span className="section-detailed-fields__subheading">
                        <FormattedMessage id="section-detailed-fields.subheading" />
                    </span>
                </div>
                <div className="section-detailed-fields__cardsList">
                    <div className='detailed-card__slide-arrows'>
                        <button onClick={() => slider?.current?.slickPrev()}>
                            <Left />
                        </button>
                        <button onClick={() => slider?.current?.slickNext()}>
                            <Right />
                        </button>
                    </div>
                    <Slider ref={slider} {...settings} >
                        {data.map(({ id, title, shortDescription, hashtags, imageBackground }) => (
                            <div>
                                <div
                                    className='detailed-card'
                                >
                                    <div className='detailed-card__backgroundImage' style={{ backgroundImage: `url("${imageBackground}")` }} />
                                    <div className='detailed-card__overlay' />
                                    <div className='detailed-card__content' >

                                        <div className='detailed-card__iconTop'>
                                            <Check />
                                        </div>
                                        <div className='detailed-card__hashtags'>
                                            {hashtags}
                                        </div>
                                        <div className='detailed-card__description'>
                                            {shortDescription}
                                        </div>
                                        <div className='detailed-card__title'>
                                            {title}
                                        </div>
                                        <div className='detailed-card__knowMoreBtn'>
                                            <button className="buttonDefaultArrowRight" onClick={() => handleCardClick(id)}>
                                                <FormattedMessage id="section-detailed-fields.knowMore" />
                                                <ArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                    <div />
                                </div>
                            </div>

                        ))}
                    </Slider>
                </div>
            </div>

            {/* div used for the grid */}
            <div />

        </div>
    )
}