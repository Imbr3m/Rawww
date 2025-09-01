import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger)



const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,
        })
    })

    return (
    <div id="about" className="min-h-screen w-screen">
        <div className="relative mb-8 my-36 flex flex-col items-center gap-5">
            <h2 className="font-general text-blue-50 text-sm uppercase md:text-[10px]">Made bt Raining</h2>

            <AnimatedTitle title="Ascend to the Peak of a Haunted Kingdom" containerClass={"mt-5 !text-black text-center"}/>

            <div className="about-subtext !text-blue-50">
                <p>Hollow Knight: Silksong is the epic sequel to Hollow Knight</p>
                <p>Fight and survive as you ascend to the peak of a land ruled by silk and song.</p>
            </div>
        </div>
        
        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
                <img 
                src="img/about.png" alt="Background" className="absolute top-0 left-0 size-full object-cover" />
            </div>
        </div>
    </div>
    )
}

export default About