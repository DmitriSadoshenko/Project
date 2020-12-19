import React from 'react';
import FormTitle from './Form';
import Instagram from './Instagram';
import PhotoCarousel from './Slider';

const Main = () => {
    return (
        <div className='app-wrapper'>
            <PhotoCarousel />
            <FormTitle />
            <Instagram />
        </div>
    )
}

export default Main