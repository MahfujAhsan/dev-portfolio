import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col justify-between md:w-[80%]'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type: "spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position} &nbsp;<a href={companyLink} target='_blank' className='text-primary capitalize dark:text-primaryDark'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className='mt-24 sm:!my-16'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center lg:text-6xl md:!text-4xl md:mb-16'>
              Industrial  Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%]  md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:[w-2px] left-[28px] xs:!left-[20px]' />
                <ul className='flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Full Stack Developer"
                        company="bPlugins LLC."
                        time="Jan, 2023 - Present"
                        address="Uttara, Dhaka - 1230, BD"
                        work="MERN Stack Development"
                        companyLink="#"
                    />

                    <Details
                        position="React Developer (Intern)"
                        company="QuickStay Private Ltd."
                        time="Aug, 2022 - Dec, 2022"
                        address="Gurugaon, Hyrana, India"
                        work="Full Stack Development"
                        companyLink="#"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience