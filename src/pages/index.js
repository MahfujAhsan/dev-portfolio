import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import dev from '/public/images/profile/dev.jpg'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightbulb from '/public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
        <title>Mahfujur_Rahman</title>
        <meta name="description" content="Software Developer" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen sm:min-h-min dark:text-light'>
        <Layout className='pt-0'>
          <div className="flex items-center justify-between md:flex-col">
            <div className='flex-1'>
              <Image
                src={dev}
                alt='Developer_Image'
                className='w-8/12 md:mx-auto lg:mr-auto lg:w-9/12 rounded-lg'
                priority
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
              />
            </div>
            <div className='flex-1 flex flex-col item-center self-center lg:w-full text-center  sm:mt-6 md:mt-10'>
              <AnimatedText text="Code is Poetry!" className=' !text-left  text-6xl xl:text-4xl lg:!text-center' />
              <p className='my-4 sm:text-base text-xl !text-left lg:!text-center'>HeY, This is Mahfujur_Rahman. As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                  <Link href="/dummy.pdf" target={"_blank"}
                  className='flex items-center bg-[#303F60] text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-[#C62228] dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light md:px-4 md:text-base'
                  download={true}
                  >
                    Resume <LinkArrow className="w-6 ml-1"/>
                    </Link>
                  <Link href="mailto:mahfujur.rahman1@outlook.com" target={"_blank"}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                  >
                    Contact
                    </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 xl:hidden'>
          <Image src={lightbulb} alt='M_R' className='w-full h-auto'/>
        </div>
      </main>
    </>
  )
}
