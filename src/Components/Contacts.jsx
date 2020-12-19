import React, {useState} from 'react'
import Formcard from './Formcard'

const Contacts = () => {
    const [isModalOpen, setisModalOpen] = useState(false)
    let switchModal = (state) => {
    setisModalOpen(state)
}
    return (
        <div className='contacts-container'>
            <h1>MY CONTACTS</h1>
            <p>Свяжитесь со мной удобным для вас способом:</p>
            <div class="contact">
				<a href="tel:+375296040848"> +375 29 <span>604-08-48</span></a>
			</div>
			<div class="email">
				<a href="mailto:daryasadoshenko@gmail.com">daryasadoshenko@gmail.com</a>
			</div>
            <div className='contact-form'>
                <p>Или заполните форму:</p>
                <button className='btn_form' onClick={switchModal}><span className='btn_form_text'>ОСТАВИТЬ ЗАЯВКУ</span></button>
            </div>
            <Formcard isOpen={isModalOpen} switchModal={switchModal} />
        </div>
    )
}

export default Contacts