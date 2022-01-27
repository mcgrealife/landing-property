import Head from 'next/head'
import Card from '../components/Card'
// import Marker from '../components/Marker'
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
  const marker1Viewed = useRef()
  const marker1Selected = useRef()
  const marker2Viewed = useRef()
  const marker2Unviewed = useRef()
  const marker2Selected = useRef()

  useEffect(() => {


    tl.to(cards.current, {
      x: -327,
    })
    tl.to(floatingText1.current, { y: -1000 }, "<1%")
    tl.to(marker1Selected.current, { opacity: 100 }, "<1%")
    tl.to(marker1Viewed.current, { opacity: 0 }, "<1%")


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

      <div className='flex flex-col min-h-screen font-[gilroy] overscroll-none'>

        <div className='grow'>

          <div ref={frameContainer} className='grid grid-cols-[9.5px_255px_9.5px] grid-rows-[8px_552.2px_8.1px] ml-[24px]'>
            <div className='row-start-2 col-start-2 z-4 place-self-center'>
              <img src="/markers/marker1-selected.svg" alt="marker1-selected" ref={marker1Selected} />
              <img src="/markers/marker1-viewed.svg" alt="marker1-viewed" ref={marker1Viewed} />
              <img src="/markers/marker2-selected.svg" alt="marker2-selected" ref={marker2Selected} />
              <img src="/markers/marker2-viewed.svg" alt="marker2-viewed" ref={marker2Viewed} />
              <img src="/markers/marker2-unviewed.svg" alt="marker2-unviewed" ref={marker2Unviewed} />





            </div>


            <img src="/map-1.png" alt="map" className='row-start-2 row-span-4 col-start-2 col-span-2 pt-[101px] z-2' />

            <img src="/status-search-filter.svg" alt="status"
              className='row-start-2 row-span-4 col-start-2 col-span-2 z-2 shadow-lg' />

            <div className='row-start-2 col-start-2 self-end z-6 pb-[28.5px] overflow-x-scroll scrollbar-hide snap-x  pt-2'>

              <div ref={cards} className='flex flex-row min-w-max gap-2 px-4 overflow-visible'>
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
          <div ref={scheduleTour} className='bg-white shadow-[0_-2px_4px_rgba(60,64,67,0.1)]  p-[8px] w-full grid fixed bottom-0 z-20'>
            <button className='bg-resider-blue-primary  rounded text-white p-2 shadow-[0_1px_2px_rgba(60,64,67,0.3)] align-center font-[500] text-[14px] leading-[18px] tracking-[0.2px] px-[32px] py-[15px]'>Schedule Demo</button>
          </div>

        </div>



        <div ref={floatingText1} className='grid bg-white  rounded shadow-[0_1px_6px_rgba(60,64,67,0.24)] h-fit w-fit self-end mr-[12px]'>
          <div className='py-[32px] px-[24px] flex flex-col gap-[16px] rounded-[12px]'>
            <h1 className='font-bold text-[18px]'>Platform <span className='text-resider-blue-primary '>integrity</span></h1>
            <p className='text-[12px] font-medium max-w-[244px] text-resider-text-p'>Resider solely consists of rental properties syndicated through data API’s. With up to date and accurate listings, your clients can browse with confidence.</p>
          </div>
        </div>



      </div>

    </>

  )
}
