import React, {useState} from 'react';
import Formcard from './Formcard';

const FormTitle = (props) => {
const [isModalOpen, setisModalOpen] = useState(false)
let switchModal = (state) => {
    setisModalOpen(state)
}

    return (
        <div className='form_title'>
            <h1>Забронируйте дату вашей съемки</h1>
            <p>Если вы хотите пригласить меня в качестве фотографа, 
                оставьте заявку на вашу фотосессию. 
                Расскажите о вашем событии, месте, 
                опишите все пожелания и предпочтения, которые у вас есть. 
                Я свяжусь с вами в течение 24 часов и 
                мы обсудим детали вашей съемки.
            </p>
            <button className='btn_form' onClick={switchModal}><span className='btn_form_text'>ОСТАВИТЬ ЗАЯВКУ</span></button>
            <Formcard isOpen={isModalOpen} switchModal={switchModal} />
        </div>
    )
}

export default FormTitle