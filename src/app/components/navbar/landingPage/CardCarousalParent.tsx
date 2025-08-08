import { CardCarousel } from '@/components/ui/card-carousel';
import React from 'react';

const CardCarousalParent = () => {
    const images=[
        {src:'/images/Card1.webp',alt:'Image 1'},
        {src:'/images/Card2.webp',alt:'Image 1'},
        {src:'/images/Card3.webp',alt:'Image 1'},
    ]
    return (
        <div>
            <CardCarousel images={images} />
        </div>
    )
}

export default CardCarousalParent; 