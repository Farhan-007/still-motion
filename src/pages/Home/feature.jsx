import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Feature() {
    return (
        <>
            <div className=" flex items-center justify-center">

                <Carousel
                    showThumbs={false}
                    swipeable={true}
                    infiniteLoop={true}
                    className='flex '>
                    <div>
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/1200x600" />
                        {/* <p className="legend">Legend 1</p> */}
                    </div>
                    <div>
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/1200x600" />
                        {/* <p className="legend">Legend 2</p> */}
                    </div>
                    <div>
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/1200x600" />
                        {/* <p className="legend">Legend 3</p> */}
                    </div>
                </Carousel>

            </div>
        </>
    )
}

export default Feature
