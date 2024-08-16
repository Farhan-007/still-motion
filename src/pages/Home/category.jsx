import React from 'react'
import { categoryImages } from '../../myData'

function Category() {
    return (
        <>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                    <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Unforgettable Moments Through Photography and Cinematography </h2>
                        <p class="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            //idhar pe categories daalenge
                        </p>
                    </div>
                    <div className="flex items-center gap-5 overflow-y-scroll no-scrollbar">

                        {
                            categoryImages.map(I => {
                                return <>
                                    <span key={I.id} className=" h-[70vh] aspect-[2/3]" >
                                        <img class="object-cover bg-center rounded" alt={I.id} src={I.src} />
                                    </span>
                                </>
                            })

                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Category
