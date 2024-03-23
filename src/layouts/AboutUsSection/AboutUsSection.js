import { FormattedMessage, useIntl } from 'react-intl'
import './AboutUsSection.css'
import { useEffect, useState } from 'react';
import data, { authors } from './data';
import ArrowRight from '../../components/Icons/ArrowRight';
import { isDesktop, isMobile } from 'react-device-detect';

export default () => {
    const [optionSelected, setOptionSelected] = useState(1)
    const [content, setContent] = useState('')
    const intl = useIntl();

    const handleOptionClick = (id) => {
        setOptionSelected(id)
    }    

    useEffect(() => {
        data.forEach(({id, content}) => {
            if(id == optionSelected) setContent(content)
        })
    }, [optionSelected])

    return (
        <div className='aboutus-section' id="about-us">
            <div className='aboutus-section__container'>
                <div className='aboutus-section__title'>
                    <h1>
                        <FormattedMessage id="aboutus-section.title" />
                    </h1>
                    <span>
                        <FormattedMessage id="aboutus-section.subTitle" />
                    </span>
                </div>

                <div className='aboutus-section__dropdown'>
                    <div className='aboutus-section__selectoptions'>
                        {data.map(({id, select}) => (
                            <div className={`option ${id == optionSelected && "active"}`} onClick={() => handleOptionClick(id)}>
                                <span className='option-title' dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: select }) }} />
                                
                                <div className="option-icon">
                                    <ArrowRight />
                                </div>
                            </div>
                        ))}
                    </div>                    
                    <div className='aboutus-section__content'>
                        {content && (
                            <div className='text' dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: content }) }} />
                        )}
                        {/* {optionSelected == 1 && (
                            <div className='authors-container'>
                                {authors.map(({profile, name, attributes}) => (
                                    <div className='author'>
                                        <div className='author__profile'>
                                            <img src={profile} />
                                        </div>
                                        <div className='author__name'>
                                            {name}
                                        </div> 
                                        <div className='author__attributes'>
                                            {attributes}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )} */}
                    </div>
                </div>

            </div>
        </div>
    )
}