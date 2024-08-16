import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { featureImages } from "../../myData"

function Feature() {
    return (
        <>
            <div className=" flex items-center justify-center p-5">

                <Carousel
                    showThumbs={false}
                    swipeable={true}
                    infiniteLoop={true}
                    // autoPlay={true}
                    autoFocus={true}
                    interval='1000'
                    className=''>

                    {
                        featureImages.map(I => {
                            return <>
                                <div key={I.id} className=" h-[600px] ">
                                    <img class="object-cover bg-center rounded" alt="hero" src={I.src} />
                                </div>
                            </>
                        })
                    }
                    {/* <div>
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/1200x600" />
                    </div>
                    <div>
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/1200x600" />
                    </div>
                    <div>
                        <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/1200x600" />
                    </div> */}

                </Carousel>

            </div>
        </>
    )
}

export default Feature
