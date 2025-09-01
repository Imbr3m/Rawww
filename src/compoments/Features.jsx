import React from 'react'
import { TiLocationArrow } from 'react-icons/ti'
import { useState, useRef } from 'react';

// tilt compoment
const BentoTilt = ({children, className = ''}) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef();
    
    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.97, .97, .97)`;
        setTransformStyle(newTransform);
    }
    const handleMouseLeave = () => {
        setTransformStyle("")
    }

    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{transform: transformStyle}}>
            {children}
        </div>
    )
}

const BentoCard = ({src, title, description,}) => {
    return (
        <div className='relative size-full'>
            <video src={src} loop muted autoPlay className='absolute left-0 top-0 size-full object-cover object-center'/>
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title font-hollow'>{title}</h1>
                    {description && (
                        <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>
                    )}
                </div>
            </div>
            
        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-52' id='features'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='font-hollow text-lg text-blue-50'>Become the <span className='text-wine-100'>Princess Knight</span></p>
                <p className='max-w-[40rem] font-circular-web text-lg text-blue-50 opacity-50'>
                    As the lethal hunter Hornet, adventure through a kingdom ruled by silk and song! Captured and taken to this unfamiliar world, prepare to battle mighty foes and solve ancient mysteries as you ascend on a deadly pilgrimage to the kingdoms peak.
                </p>
            </div>
        
            <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
                <BentoCard src="videos/feature-1.mp4" title={'Discover'}
                description="the fallen insect kingdom of Pharloom! Explore mossy grottos, gilded cities and misted moors as you ascend to the top of the world." 
                />
            </BentoTilt>

            <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>
                <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                    <BentoCard 
                    src="videos/feature-2.mp4" title={'Engage'} 
                    description="in lethal acrobatic action! Wield a huge suite of deadly moves as you dance between foes in swift, beautiful combat."
                    />
                </BentoTilt>

                <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                    <BentoCard 
                    src="videos/feature-3.mp4" title={'Craft'} 
                    description="powerful tools! Master an ever-expanding arsenal of weapons, traps, and mechanisms to vanquish your enemies."
                    />
                </BentoTilt>
                <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                    <BentoCard 
                    src="videos/feature-4.mp4" title={'Solve'} 
                    description="shocking quests! Hunt down rare beasts and solve ancient mysteries to grant the wishes of the downtrodden and restore the kingdom’s hope."
                    />
                </BentoTilt>

                <BentoTilt className='bento-tilt_2 '>
                    <div className='flex size-full flex-col justify-between bg-wine-100 p-5'>
                        <h1 className='bento-title special-font max-w-64 text-black'>Sept 4 Release!</h1>
                        <TiLocationArrow className='m-5 scale-[5] self-end'/>
                    </div>
                </BentoTilt>

                <BentoTilt className='bento-tilt_2'>
                    <video src="/videos/feature-5.mp4" loop muted autoPlay
                    className='size-full object-cover object-center' />
                </BentoTilt>
            </div>
        </div>
    </section>
  )
}

export default Features