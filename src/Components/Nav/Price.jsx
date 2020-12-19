import React from 'react';
import img1 from '../img/Price/IMG_8044.jpg'
import img2 from '../img/Price/IMG_8411.jpg'
import img3 from '../img/Price/IMG_8119.jpg'

const Price = () => {
    return (
        <div className='price-container'>
            <h1>PRICE</h1>
            <div className='basic'>
                <img src={img1} alt=""/>
                <div>
                    <h2>BASIC</h2>
                    <ul>
                        <li>Съёмка продолжительностью 1-1,5 ч</li>
                        <li>40 фотографий в обработке</li>
                        <li>Консультация и помощь с выбором одежды</li>
                        <li>Готовность снимков в течение двух недель</li>
                        <li><b>100$</b></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className='medium'>
                <div>
                    <h2>MEDIUM</h2>
                    <ul>
                        <li>Съёмка продолжительностью 1,5 ч</li>
                        <li>60 фотографий в обработке</li>
                        <li>Консультация и помощь с выбором одежды</li>
                        <li>Возможность совместного отбора исходного материла</li>
                        <li>Готовность снимков в течение двух недель</li>
                        <li>Печать 10 фотографий 180*140мм</li>
                        <li><b>170$</b></li>
                    </ul>
                </div>
                <img src={img2} alt=""/>
            </div>
            <hr/>
            <div className='basic'>
                <img src={img3} alt=""/>
                <div>
                    <h2>GOLD</h2>
                    <ul>
                        <li>Съёмка продолжительностью 1,5 ч</li>
                        <li>80 фотографий в обработке</li>
                        <li>Консультация и помощь с выбором одежды</li>
                        <li>Возможность совместного отбора исходного материла</li>
                        <li>Готовность снимков в течение двух недель</li>
                        <li>Печать книги 28*20см  в твердом переплете</li>
                        <li><b>240$</b></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Price