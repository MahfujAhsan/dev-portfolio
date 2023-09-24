import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='font-bold text-2xl sm:text-xl xs:text-lg text-primary capitalize dark:text-primaryDark'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className='my-24 sm:!my-8'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center lg:text-6xl md:!text-4xl md:mb-16'>
                Training & Courses
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:[w-2px] left-[28px] xs:!left-[20px]' />
                <ul className='flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        type="Think in a Redux Way"
                        time="Sept, 2022 - Feb, 2023"
                        place="Online"
                        info="Learn with Sumit (Largest Programming Community in the City)"
                    />
                    <Details
                        type="Complete Web Development Course"
                        time="Dec, 2022 - Aug, 2022"
                        place="Online"
                        info="Programming Hero (EdTech Company)"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Education