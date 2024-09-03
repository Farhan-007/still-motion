import React from 'react'

function Hero() {
    return (
        <>
            <section className="hero-bg-image p-[10rem] px-5 h-full w-full ">
                <div className=" flex flex-col">
                    <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Capturing Moments That Last a Lifetime</h1>
                    <p class="max-w-2xl mb-6  text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">At stillmotionpictures, we specialize in creating visually stunning photographs and films that tell your unique story. Our team of exceptional photographers and cinematographers are passionate about capturing the moments that matter most to you.</p>
                    <div class="flex items-center">
                        <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-1 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
                    </div>
                </div>
                {/* <img src="https://pasteboard.co/aO3grc4lver7.jpg" alt="" /> */}
                
            </section>


            {/* <section class="bg-white dark:bg-gray-900 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center justify-center text-center">
                        <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Capturing Moments That Last a Lifetime</h1>
                        <p class="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">At stillmotionpictures, we specialize in creating visually stunning photographs and films that tell your unique story. Our team of exceptional photographers and cinematographers are passionate about capturing the moments that matter most to you.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src="/assets/intro/r.jpg" />
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Hero
