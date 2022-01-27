import Head from 'next/head'
import Card from '../components/Card'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"



export default function Home() {

  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline()

  const cards = useRef()
  const scheduleTour = useRef()
  const frameContainer = useRef()
  const floatingText1 = useRef()

  useEffect(() => {


    tl.to(cards.current, {
      x: -327,
    })
    tl.to(floatingText1.current, { y: -1000 }, "<1%")

    ScrollTrigger.create({
      animation: tl,
      trigger: frameContainer.current,
      pin: true,
      scrub: 2
    })

  })


  return (


    <>
      <Head>
        <title>Resider</title>
      </Head>

      <div className='flex flex-col min-h-screen '>

        <div className='grow'>

          <div ref={frameContainer} className='grid grid-cols-[9.5px_255px_9.5px] grid-rows-[8px_552.2px_8.1px] justify-center '>

            <img src="/map-1.png" alt="map" className='row-start-2 row-span-4 col-start-2 col-span-2 pt-[101px] z-2' />

            <img src="/status-search-filter.svg" alt="status"
              className='row-start-2 row-span-4 col-start-2 col-span-2 z-2 shadow-lg' />

            <div className='row-start-2 col-start-2 self-end z-6 pb-[28.5px] overflow-x-scroll scrollbar-hide snap-x'>

              <div ref={cards} className='flex flex-row min-w-max gap-2 px-4 '>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>

            </div>


            <img src="/home.svg" alt="home" className='row-start-2 col-start-2 justify-self-center self-end pb-[5.23px] z-20' />
            {/* shadow-frame should work tailwing.conifig */}

            <img
              src='/frame-hollow.svg'
              className='row-start-1 row-span-3 col-start-1 col-span-3 z-5'
            />



          </div>
          <div ref={scheduleTour} className='bg-white shadow border p-4 w-full grid fixed bottom-0 z-20'>
            <button className='bg-blue-primary border rounded text-white p-2 shadow align-center'>Schedule Tour</button>
          </div>

        </div>



        <div ref={floatingText1} className='grid self-center justify-center bg-white border-2 rounded shadow h-full w-80'>
          <p>floating text</p>
          <p>floating text</p>
          <p>floating text</p>
        </div>



      </div>

    </>

  )
}
