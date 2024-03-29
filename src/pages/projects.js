import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '/public/images/projects/task-dashboard.png'
import project2 from '/public/images/projects/tech-note.png'
import project3 from '/public/images/projects/computer-manager.png'
import project4 from '/public/images/projects/bistro-boss.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summery, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2  sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link}
                className=' cursor-pointer overflow-hidden rounded-lg w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>

            <div className=' flex flex-col items-start justify-between pl-6  w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 text-left w-full text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summery}</p>

                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank'
                        className='w-10'
                    >
                        {" "}
                        <GithubIcon />
                        {" "}
                    </Link>

                    <Link className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base' href={link} target='_blank'>
                        Visit Project
                    </Link>
                </div>
            </div>


        </article>
    )
}

const Project = ({ title, type, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-start justify-between rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 h-full'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 xs:h-[102%] xs:w-[101%] xs:rounded-[1.5rem]' />
            <Link href={link}
                className=' cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                />
            </Link>

            <div className=' flex flex-col items-start justify-between mt-4 lg:w-full lg:pl-0'>
                <span className='text-primary font-medium text-lg dark:text-primaryDark lg:!text-sm md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 text-left w-full text-3xl font-bold lg:!text-xl'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link className='text-lg font-semibold underline md:text-base' href={link} target='_blank'>
                        Visit
                    </Link>

                    <Link href={github} target='_blank'
                        className='w-8 md:w-6'
                    >
                        <GithubIcon />
                    </Link>


                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Mahfujur_Rahman | Projects_Page</title>
                <meta name='description' content="any description" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16 xl:py-8 xl:px-6 flex-none'>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='text-6xl xl:text-4xl lg:!text-center lg:!mb-8 py-8 lg:!py-0' />
                    <div className='w-full grid grid-cols-12 gap-y-16 sm:gap-y-8 lg:!w-11/12 lg:!mx-auto gap-x-8 sm:!gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                img={project4}
                                title="Bistro Boss"
                                summery="
                                • Secured API & safe user login authorized by JWT.
                                • Attractive UI with awesome user experience,(Registration, Toast Notification, Error Handling, Animation etc).
                                • All CRUD Operations built with ExpressJS using mongoose database.
                                "
                                link="https://bistro-boss-restro.web.app/"
                                type="Restaurant Management System"
                                github="https://github.com/MahfujAhsan/restro-boss"
                            />
                        </div>

                        

                        <div className='col-span-6 md:col-span-12'>
                            <Project
                                img={project2}
                                title="techNotes"
                                summery="
                                • Registered & Role base Login with Secured API.
                                • Scalable solution by using ReduxJS, Mongoose & Express.
                                • Role base actions with Dynamic User Interface. 
                                "
                                link="https://technotesclient.onrender.com"
                                type="Business Management System"
                                github="https://github.com/MahfujAhsan/technote-client"
                            />
                        </div>
                        <div className='col-span-6 md:col-span-12'>
                            <Project
                                img={project1}
                                title="Task_Manager"
                                summery="
                                • Secured API & safe user login authorized by JWT.
                                • Attractive UI with awesome user experience,(Registration, Toast Notification, Error Handling, Animation etc).
                                • All CRUD Operations built with ExpressJS using mongoose database."
                                link="https://task-dashboard-2ce0d.web.app"
                                type="ToDo Dashboard"
                                github="https://github.com/MahfujAhsan/task-dashboard"
                            />
                        </div>
                        <div className='col-span-6 md:col-span-12'>
                            <Project
                                img={project3}
                                title="Computer Manager"
                                summery="Developed modern UI with ReactJS, Tailwindcss & several react component libraries. Back-end implemented with node, express, MongoDB. App-Features: Firebase Login, Authentication verified by JSON Web Token, Dynamic Admin & User Dashboard, Ordered List, Customers Review, Inventory Management, Product Management, Stripe payment method, Secured APIs, and Multi-themed UI."
                                link="https://computer-manager-3faf4.web.app/"
                                type="Manufacturer Company"
                                github="https://github.com/MahfujAhsan/computer-manager-client"
                            />
                        </div>

                        <div className='col-span-6 md:col-span-12'>
                            <Project
                                img={project4}
                                title="Bistro Boss"
                                summery="• Authentication & Authorized (Role) base Login with Secured API.
                                •Scalable solution by using ReduxJS, Mongoose & Express.
                                •All CRUD oparetions with Error Handling."
                                link="https://bistro-boss-restro.web.app/"
                                type="Restaurant Management System"
                                github="https://github.com/MahfujAhsan/restro-boss"
                            />
                        </div>
                    </div>


                </Layout>
            </main>
        </>
    )
}

export default projects