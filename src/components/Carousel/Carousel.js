import React, { useState } from 'react';
import ImageData from './slide-images';
import Slide from './Slide';
import Arrow from './Arrow';

function Carousel() {
    // const [slideIndex, setSlideIndex] = useState(0);
    const slideImages = ImageData;
    // const imagesLength = slideImages.length;

    return (
        <div className="carousel">
            <Arrow left="true" />
            <Arrow right="true" />
        </div>
    );
}

export default Carousel;
