import { FormattedMessage, useIntl } from 'react-intl'
import './ContactSection.css'
import ArrowRight from '../../components/Icons/ArrowRight';
import { useState } from 'react';
import SuccessIcon from '../../components/Icons/Success';
import addLead from '../../services/addLead'

export default () => {
    const intl = useIntl();
    const [formSent, setFormSent] = useState(false)
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: ''
      });

      const [error, setError] = useState('');

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Basic validation
        if (!formData.fullname || !formData.email || !formData.phone || !formData.message) {
          setError('Please fill in all fields.');
          return;
        }
    
        // Prepare data to send to Firebase
        const dataToSend = {
          fullname: formData.fullname,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        };
    
        // Here you can send dataToSend to Firebase
        console.log('Data to send:', dataToSend);
        setFormSent(true)
        await addLead(dataToSend)
    
        // Clear form data and error after submission
        setFormData({
          fullname: '',
          email: '',
          phone: '',
          message: ''
        });
        setError('');

        // setInterval(() => {
        //     setFormSent(false)
        // }, [5000])
      };


    return (
    <div className="contact-section" id="contact">
        <div className="contact-section__container">
            <div className="contact-section__col-left">
                <div className='contact-section__title'>
                    <FormattedMessage id="contact-section.title" />
                </div>                
                <div className='contact-section__subTitle'>
                    <span  dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "contact-section.subTitle" }) }} />
                </div>               
                <div className='contact-section__phone'>
                    <span  dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "contact-section.phone" }) }} />
                </div>
            </div>
            <div className="contact-section__col-right">
                <div className='form-wrapper'>
                    <h1 className='form-title'>
                        <FormattedMessage id="contact-section.form-title" />
                    </h1>                    
                    <span className='form-subTitle'>
                        <FormattedMessage id="contact-section.form-subTitle" />
                    </span>
                    {formSent ? (
                        <div className='form-sent'>
                            <SuccessIcon />
                            <div className='text'  dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "contact-section.form.success" }) }} />
                        </div>
                    ) : (
                        <form id="form-contact" onSubmit={handleSubmit}>
                            <div className="input-container">
                                <input 
                                type="text" 
                                id="fullname" 
                                name="fullname" 
                                className="input-field" 
                                value={formData.fullname}
                                onChange={handleChange} 
                                required placeholder="" />

                                <label for="fullname" className="input-label">
                                    <FormattedMessage id="contact-section.form-input.fullname" />
                                </label>
                            </div>

                            <div className="input-container">
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="input-field" 
                                value={formData.email}
                                onChange={handleChange} 
                                required placeholder="" />
                                <label for="email" className="input-label">
                                    <FormattedMessage id="contact-section.form-input.email" />
                                </label>
                            </div>                                 
                            <div className="input-container">
                                <input 
                                type="tel" 
                                id="phone" 
                                name="phone" 
                                className="input-field" 
                                value={formData.phone}
                                onChange={handleChange} 
                                required placeholder="" />
                                <label for="phone" className="input-label">
                                    <FormattedMessage id="contact-section.form-input.phone" />
                                </label>
                            </div>                        
                            <div className="input-container">
                                <textarea 
                                type="text" 
                                id="message" 
                                name="message" 
                                rows={5} 
                                className="input-field" 
                                value={formData.message}
                                onChange={handleChange} 
                                required placeholder="" />
                                <label for="message" className="input-label">
                                    <FormattedMessage id="contact-section.form-input.message" />
                                </label>
                            </div>
                            {error && <p>{error}</p>}
                            <button type='submit' className='buttonSecondaryArrowRight form-submit'>
                                <FormattedMessage id="contact-section.form.btn-submit" />
                                <ArrowRight />
                            </button>
                        </form>
                    )}

                </div>
            </div>
        </div>
    </div>
    )   
}