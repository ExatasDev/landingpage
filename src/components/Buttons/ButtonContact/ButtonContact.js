import { FormattedMessage } from 'react-intl'
import './ButtonContact.css'

export function IconContact(){
    return (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 10.0833V9.41667H4.5V10.0833H2ZM4.77404 14.6795L4.28846 14.226L6.05929 12.476L6.51281 12.9407L4.77404 14.6795ZM6.05929 6.54487L4.28846 4.77404L4.77404 4.32052L6.49198 6.05929L6.05929 6.54487ZM14.718 15.75L10.9952 12.0273L10.1474 14.3013L8.32052 8.60898L14.0769 10.4359L11.7708 11.3157L15.4615 15.0064L14.718 15.75ZM9.09615 5.5V3H9.76283V5.5H9.09615ZM12.2997 6.52404L11.8461 6.05929L13.5849 4.32052L14.0705 4.80608L12.2997 6.52404Z" fill="#013556" fill-opacity="0.5"/>
      </svg>
    )
  }

const ButtonContact = () => {

    return (
        <a 
          href="#contact"
          className="header-full__contact-btn"
        >
        <FormattedMessage id="header.contact.btn" />
        <IconContact />
      </a>
    )
}

export default ButtonContact