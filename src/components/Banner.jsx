import { useEffect, useState } from "react";
import L1 from '../assets/L4.jpeg'
const Banner = () => {
    const text = [
        "Welcome to Your Language Learning Journey",
        "Start Learning German with Confidence",
        "Build Vocabulary, Grammar, and Speaking Skills",
        "Learn German Anytime, Anywhere"
    ];

    const [currentState, setCurrentState] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentState(prevIndex => {
                if(prevIndex + 1 <text.length) {
                    return prevIndex + 1;
                } else {
                    return 0;
                }
            })
        }, 3000);
        return () => clearInterval(interval)
    },[text.length])
    return (
        <div>
            <section className="relative">
                <img src={L1} alt="" className='w-full h-screen sm:h-[300px] lg:h-[400px] xl:h-[600px]'/>
                <div className="absolute inset-0 flex justify-center items-center w-[95%] sm:w-4/5 xl:w-1/2 text-lg">
                    <p className="bg-black/30 text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white/90 font-semibold sm:px-6 px-4 py-2 sm:py-4 sm:tracking-wide tracking-tight sm:leading-relaxed rounded-md backdrop-blur-sm text-center max-w-[90%] mx-auto">
                        {text[currentState]}
                    </p>

                    {/* <p className="bg-black/30  text-xl sm:text-2xl lg:text-4xl text-white font-semibold px-4 py-2 rounded-md  backdrop-blur-sm">{text[currentState]}</p> */}
                </div>
            </section>
        </div>
    );
};

export default Banner;