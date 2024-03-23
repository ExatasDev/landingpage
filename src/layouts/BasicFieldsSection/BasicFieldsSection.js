import './BasicFieldsSection.css'
import { FormattedMessage } from "react-intl"
import data from './data'
import ArrowRight from '../../components/Icons/ArrowRight'
import { emitter } from '../../components/Modals/Modal';


export default () => {

    const handleCardClick = (id) => {
        const filteredData = data.find((el) => el.id == id)

        emitter.emit('openModal');
        emitter.emit('setDataContent', filteredData);
        emitter.emit('setModalType', 'basic');
    }

    return (
        <div className="section-basic-fields" id="fields">
            <div className="section-basic-fields__container">
                <div className="section-basic-fields__title">
                    <h1 className="section-basic-fields__heading">
                        <FormattedMessage id="section-basic-fields.heading" />
                    </h1> 
                    <span className="section-basic-fields__subheading">
                        <FormattedMessage id="section-basic-fields.subheading" />
                    </span>
                </div>
                <div className="section-basic-fields__cardsList">
                    {data.map(({id, title, shortDescription}) => (
                        <div className='basic-card'>
                            <div className='basic-card__content'>
                                <div className='basic-card__title'>
                                    {title}
                                </div>     
                                <div className='basic-card__description'>
                                    {shortDescription}
                                </div>
                            </div>
                            <div className="basic-card__bottom" onClick={() => handleCardClick(id)}>
                                <span>Explore</span>
                                <button>
                                    <ArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="section-basic-fields__seeMore">
                    <button className="buttonDefaultArrowRight">
                        <FormattedMessage id="section-basic-fields.seeMoreBtn" />
                        <ArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}