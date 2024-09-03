import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Modal from './modal';
import { smallImages } from './smallImg';
import Buttons from './buttons';

console.log(`${window.innerWidth} x ${window.innerHeight}`)

// if (window.innerWidth > 720) {

// }

function splitArrayIntoFour(arr) {
    // Initialize four empty arrays
    const result = [[], [], [], [], [], []];
    // Loop through the original array
    for (let i = 0; i < arr.length; i++) {
        // Use modulo operation to distribute elements across the four arrays
        result[i % 6].push(arr[i]);
    }
    return result;
}


function GalleryPage() {

    // galleryData
    const allFilters = ["All", "ethnic", "fashion", "catalogue", "portrait", "pre-wedding", "wedding"]
    const [selectedFilter, setSelectedFilter] = useState(allFilters[0])
    const [data, setData] = useState(smallImages);

    let [arr0, arr1, arr2, arr3, arr4, arr5] = splitArrayIntoFour(data);
    let arrSize = [arr0, arr1, arr2, arr3, arr4, arr5];
    console.log(arrSize)


    // buttons
    function activeButton(value) {
        setSelectedFilter(value)
    }

    // Modal
    const [modal, setModal] = useState(false);
    const [modalImg, setModalImg] = useState('');

    useEffect(() => {
        filterItems();
    }, [selectedFilter ,filterItems]);

    function filterItems() {
        if (selectedFilter.length > 0) {
            if (selectedFilter === allFilters[0]) {
                setData(smallImages)
            }
            else {
                let tempItems = smallImages.filter(image => image.title === selectedFilter)
                setData(tempItems)
                console.log(tempItems)
            }
        }
    }



    return (
        <>
            <Modal
                openModal={modal}
                closeModal={() => setModal(false)}
            >
                <img loading="lazy" class="h-auto w-auto max-w-full max-h-[90dvh] rounded-xl " src={modalImg} alt="" />
            </Modal>

            <div className="gallery-buttons flex items-center justify-start md:justify-center py-4 px-4 overflow-x-scroll">
                {allFilters.map((item) => (
                    <Buttons
                        onChange={activeButton}
                        active={selectedFilter}
                        disabled={selectedFilter}
                        id={item}
                        key={item}
                        title={item}
                    />
                ))}
            </div>

            {/* <div className="gallery">
                {data.map((item) => (
                    <div key={item.id} onClick={() => { setModal(true); setModalImg(`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${item.id}).jpg`) }}>
                        <img loading="lazy" class="h-auto max-w-full rounded-lg" src={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/tr:w-300/(${item.id}).jpg`} alt={`image-${item.title}${item.id}`} />
                    </div>
                ))}
            </div> */}


            <div class="gallery grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">

                {/* {
                    arrSize.map((arr, idx) => {
                        <div key={idx} class="flex flex-col gap-4">
                            {
                                arr.map((item) => {
                                    <div key={item.id} onClick={() => { setModal(true); setModalImg(`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${item.id}).jpg`); }}>
                                        <img loading="lazy" class="h-auto max-w-full rounded-lg" src={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/tr:w-300/(${item.id}).jpg`} alt={`image-${item.title}${item.id}`} />
                                    </div>
                                })
                            }
                        </div>
                    })
                } */}

                <div class="flex flex-col gap-4">
                    {arr0.map((item) => (
                        <div key={item.id} onClick={() => { setModal(true); setModalImg(`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${item.id}).jpg`); }}>
                            <img loading="lazy" class="h-auto max-w-full rounded-lg" src={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/tr:w-300/(${item.id}).jpg`} alt={`image-${item.title}${item.id}`} />
                        </div>
                    ))}
                </div>

                <div class="flex flex-col gap-4">
                    {arr1.map((item) => (
                        <div key={item.id} onClick={() => { setModal(true); setModalImg(`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${item.id}).jpg`) }}>
                            <img loading="lazy" class="h-auto max-w-full rounded-lg" src={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/tr:w-300/(${item.id}).jpg`} alt={`image-${item.title}${item.id}`} />
                        </div>
                    ))}
                </div>

                <div class="flex flex-col gap-4">
                    {arr2.map((item) => (
                        <div key={item.id} onClick={() => { setModal(true); setModalImg(`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${item.id}).jpg`) }}>
                            <img loading="lazy" class="h-auto max-w-full rounded-lg" src={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/tr:w-300/(${item.id}).jpg`} alt={`image-${item.title}${item.id}`} />
                        </div>
                    ))}
                </div>

                <div class="flex flex-col gap-4">
                    {arr3.map((item) => (
                        <div key={item.id} onClick={() => { setModal(true); setModalImg(`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${item.id}).jpg`) }}>
                            <img loading="lazy" class="h-auto max-w-full rounded-lg" src={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/tr:w-300/(${item.id}).jpg`} alt={`image-${item.title}${item.id}`} />
                        </div>
                    ))}
                </div>

                <div class="flex flex-col gap-4">
                    {arr4.map((item) => (
                        <div key={item.id} onClick={() => { setModal(true); setModalImg(`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${item.id}).jpg`) }}>
                            <img loading="lazy" class="h-auto max-w-full rounded-lg" src={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/tr:w-300/(${item.id}).jpg`} alt={`image-${item.title}${item.id}`} />
                        </div>
                    ))}
                </div>

                <div class="flex flex-col gap-4">
                    {arr5.map((item) => (
                        <div key={item.id} onClick={() => { setModal(true); setModalImg(`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/(${item.id}).jpg`) }}>
                            <img loading="lazy" class="h-auto max-w-full rounded-lg" src={`https://ik.imagekit.io/Farhan007/StillMotion-ImageServer/tr:w-300/(${item.id}).jpg`} alt={`image-${item.title}${item.id}`} />
                        </div>
                    ))}
                </div>

            </div>

        </>
    )
}

export default GalleryPage
