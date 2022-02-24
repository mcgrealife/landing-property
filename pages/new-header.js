import Head from 'next/head'
import Link from 'next/link'


export default function Home() {


  return (

    <>
      <Head>
        <title>Deleted</title>
      </Head>

      <div id='hero-section' className='flex flex-col place-items-center text-center'>


        <h1 id="heroText" className='mt-[24.49px] lg:mt-[24px] text-[rgba(60,64,67,1)] font-[700] text-[36px] lg:text-[56px] leading-[48px] lg:leading-[84px] tracking-[0.1px] max-w-[326px] lg:max-w-[639px]'>Page <span className='text-[rgba(54,108,165,1)]'>Deleted <br />(merged with index)</span></h1>


        <Link href="/">
          <a id="heroSubText" className='text-[rgba(96,99,103,1)] mt-[15.51px] lg:mt-[16px] font-[500] text-[18px] lg:text-[26px] leading-[30px] lg:leading-[38px] max-w-[326px] lg:max-w-[579px] mb-[24.9px] lg:mb-[24px] border rounded-lg p-2'>Back to Index</a>
        </Link>

      </div >
    </>

  )
}