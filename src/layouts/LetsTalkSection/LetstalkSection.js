import { FormattedMessage, useIntl } from 'react-intl'

import './LetstalkSection.css'
import ArrowRight from '../../components/Icons/ArrowRight'
export default () => {

    const intl = useIntl();

    return (
        <div className='lets-talk-section'>
            <div className='lets-talk-section__container'>
                <div className='lets-talk-section__col'>
                    <div className='title' dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: 'lets-talk-section.title' }) }} />
                </div>                
                <div className='lets-talk-section__col col-right'>
                    <div className='description' dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: 'lets-talk-section.description' }) }} />
                    <a href='#contact' className='buttonDefaultArrowRight'>
                        <FormattedMessage id="lets-talk-section.button" />
                        <ArrowRight />
                    </a>
                </div>
            </div>
        </div>
    )
}