"use client";
import React, { useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';

export default function Loading() {
    console.log('loading')
    // return <div className='w-full h-screen relative flex justify-center items-center'>
    //     <div class="lds-heart">
    //         <div className='bg-blue-500 after:bg-blue-500 before:bg-blue-500' />
    //     </div>
    // </div>

    useEffect(() => {
        anime.timeline({ loop: true })
            .add({
                targets: '.ml8 .circle-white',
                scale: [0, 3],
                opacity: [1, 0],
                easing: "easeInOutExpo",
                rotateZ: 360,
                duration: 1100
            }).add({
                targets: '.ml8 .circle-container',
                scale: [0, 1],
                duration: 1100,
                easing: "easeInOutExpo",
                offset: '-=1000'
            }).add({
                targets: '.ml8 .circle-dark',
                scale: [0, 1],
                duration: 1100,
                easing: "easeOutExpo",
                offset: '-=600'
            }).add({
                targets: '.ml8 .letters-left',
                scale: [0, 1],
                duration: 1200,
                offset: '-=550'
            }).add({
                targets: '.ml8 .bang',
                scale: [0, 1],
                rotateZ: [45, 15],
                duration: 1200,
                offset: '-=1000'
            }).add({
                targets: '.ml8',
                opacity: 0,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1400
            });

        anime({
            targets: '.ml8 .circle-dark-dashed',
            rotateZ: 360,
            duration: 8000,
            easing: "linear",
            loop: true
        });
    }, []);
    return (
        <>

            <h1 class="ml8">
                <span class="letters-container">
                    <span class="letters letters-left">Hi</span>
                    <span class="letters bang">!</span>
                </span>
                <span class="circle circle-white"></span>
                <span class="circle circle-dark flex justify-center items-center">
                    <div className=''>
                        <div className='font-light text-lg'>
                            <span className='text-gray-700'>&lt;</span>
                            <span className='text-blue-700'>
                                AE
                            </span>
                            <span className='text-gray-700'>/&gt;</span>
                        </div>
                    </div>
                </span>
                <span class="circle circle-container"><span class="circle circle-dark-dashed"></span></span>
            </h1>
        </>
    )
}
