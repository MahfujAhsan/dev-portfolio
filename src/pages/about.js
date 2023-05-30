import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import devTwo from '/public/images/profile/devTwo.jpg'
import {useInView, useMotionValue, useSpring} from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});

    useEffect(() => {
        if(isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Mahfujur_Rahman | About_Page</title>
                <meta name='description' content="any description" />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-10 lg:pt-8 md:!pb-4'>
                    <AnimatedText text="Passion Fuels Purpose!" className='text-6xl xl:text-4xl lg:!text-center lg:!mb-8 py-8 lg:!py-0' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start lg:!items-center lg:col-span-8 lg:order-2 text-left lg:text-center'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light'>Biography</h2>
                            <p className="font-medium">
                                Hey,
                                <br />
                                This is Mahfujur Rahman.
                            </p>
                            <p className='font-medium'>
                                This is introducing you to a self-learner/self-motivated programmer. I am a Full Stack developer with builds websites and web applications.
                            </p>

                            <p className='my-4 font-medium'>

                                I am passionate about my work. Because I love what I do, I have a steady source of motivation that drives me to do my best. I’m also a people person. I love meeting new people and learning about their lives and their backgrounds.

                                
                            </p>

                            <p className='font-medium'>
                                I am highly organized. I always take notes, and I use a series of tools to help myself stay on top of deadlines. So, Seeking a role as a developer to continue my passion & for doing something creative will be crazy.
                            </p>
                        </div>
                        
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light lg:col-span-8 lg:order-1'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />

                            <Image
                                src={devTwo}
                                alt='M_R'
                                className='w-8/12 mx-auto h-8/12  rounded-2xl'
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>

                        <div className='col-span-2 flex flex-col items-end justify-between lg:col-span-8 lg:flex-row xl:items-center lg:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl md:6xl sm:5xl xs:text-4xl font-bold'>
                                    <AnimatedNumbers value={2}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Companies</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl md:6xl sm:5xl xs:text-4xl font-bold'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl md:6xl sm:5xl xs:text-4xl font-bold'>
                                    <AnimatedNumbers value={2} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
                            </div>
                        </div>

                    </div>
                    <Skills />
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about