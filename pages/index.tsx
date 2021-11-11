import Head from 'next/head'
import CustomLink from '../components/example/CustomLink'
import Footer from '../components/example/Footer'
import Main from '../components/example/Main'
import constants from '../lib/constants'
import dataLink from '../__data/dataLinks'

const Home = () => {
  const { appname } = constants

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2 bg-base-300'>
      <Head>
        <title>{appname}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Main>
        <h1 className='text-6xl font-bold mb-10'>
          Welcome to <br />
          <span className='text-purple-400'>
            Boilerplate of <br />
            Next.js with Tailwindcss <br />
            using Typsescript!
          </span>
        </h1>

        <p className='mt-3 text-2xl'>
          Get started by editing{' '}
          <code className='p-3 font-mono text-lg bg-gray-300 text-neutral rounded-md'>
            pages/index.js
          </code>
        </p>

        <div className='flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full'>
          {dataLink.map((item) => (
            <CustomLink href={item.link}>
              <h3 className='text-2xl font-bold'>{item.title} &rarr;</h3>
              <p className='mt-4 text-xl'>{item.subtitle}</p>
            </CustomLink>
          ))}
        </div>
      </Main>
      <Footer />
    </div>
  )
}

export default Home
