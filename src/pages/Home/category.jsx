import React from 'react'

function Category() {
    return (
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Unforgettable Moments Through Photography and Cinematography </h2>
                    </div>
                    <div className="flex items-center gap-5 overflow-y-scroll no-scrollbar">
                        <span className=" block h-[70vh] aspect-[2/3] bg-black"></span>
                        <span className=" block h-[70vh] aspect-[2/3] bg-black"></span>
                        <span className=" block h-[70vh] aspect-[2/3] bg-black"></span>
                        <span className=" block h-[70vh] aspect-[2/3] bg-black"></span>
                        <span className=" block h-[70vh] aspect-[2/3] bg-black"></span>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Category
