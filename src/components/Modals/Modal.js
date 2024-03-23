import React, { useEffect, useState } from 'react';
import { EventEmitter } from 'eventemitter3';
import './Modal.css';
import CloseIcon from '../Icons/Close';
import ModalBasicField from './ModalBasicField';
import ModalDetailedField from './ModalDetailedField';

const emitter = new EventEmitter();

export default () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dataContent, setDataContent] = useState('')
    const [modalType, setModalType] = useState('basic')


    useEffect(() => {
        const openModalHandler = () => {
            setIsOpen(true)
            document.body.style.overflow = 'hidden';
        };
        const closeModalHandler = () => {
            setIsOpen(false)
            document.body.style.overflow = ''; 
        };
        const setDataContentHandler = (data) => setDataContent(data);
        const setModalTypeHandler = (type) => setModalType(type);
    
        emitter.on('openModal', openModalHandler);
        emitter.on('closeModal', closeModalHandler);
        emitter.on('setDataContent', setDataContentHandler);
        emitter.on('setModalType', setModalTypeHandler);
    
        return () => {
            emitter.off('openModal', openModalHandler);
            emitter.off('closeModal', closeModalHandler);
            emitter.off('setDataContent', setDataContentHandler);
            emitter.off('setModalType', setModalTypeHandler);
        };
      }, []);
    
      return (
        <>
          {isOpen && (
            <div className="modal-overlay">
              <div className="modal">
                <button className="close-btn" onClick={() => emitter.emit('closeModal')}>
                    <CloseIcon />
                </button>
                <div className="modal-content">
                  {modalType == 'basic' && <ModalBasicField data={dataContent} />}
                  {modalType == 'detailed' && <ModalDetailedField data={dataContent} />}
                </div>
              </div>
            </div>
          )}
        </>
      );
}

export {emitter}