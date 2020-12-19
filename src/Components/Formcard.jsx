import React from 'react';

const Formcard = (props) => {
    const closeModal = () => {
        props.switchModal(false)
    }
    const submitModal = () => {
        props.switchModal(false)
        return alert('Спасибо, я с вами обязательно свяжусь')
    }

    if(props.isOpen) {
        return (
            <div className='formcard'>
                <div className='modal-wrapper'>
                    <span onClick={closeModal} className='close'></span>   
                    <h2>ЗАБРОНИРОВАТЬ ДАТУ</h2>
                    <p>Чтобы забронировать дату фотосессии, заполните форму:</p>
                    <div className='form-container'>
                        <div className='form-block'>
                            <input placeholder="Имя" required type="text" name="name" />
                            <input placeholder="E-mail" required type="email" name="email" />
                            <input placeholder="Телефон" required type="tel" name="phone" />
                            <select>
                                <option value="" disabled selected>Тип съемки</option>
                                <option value="">Свадьба</option>
                                <option value="">Love Story</option>
                                <option value="">Семейная</option>
                                <option value="">Портретная</option>
                            </select>
                            <input type="date" placeholder="Дата события"/>
                        </div>
                        <div className='form-block-text'>
                            <textarea name="" id="" cols="30" rows="10" placeholder='Опишите планируемое событие...'></textarea>

                        </div>

                    </div>
                    <button onClick={submitModal} className='btn_modal' type='submit'><span className='btn_form_text'>ОТПРАВИТЬ ЗАЯВКУ</span></button>
                </div>
            </div>
        )
    }
    else {
        return <></>
    }
    
}

export default Formcard