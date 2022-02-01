import Head from 'next/head'
import Card from '../components/Card'
import Marker from '../components/Marker'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import logo from '../public/resider-logo.png'



export default function Home() {

  gsap.registerPlugin(ScrollTrigger)

  function scheduleDemoClick() {
    return alert('💰 $50 showing, $500 max. 50% per lease. 💰 ')
  }

  const cards = useRef()
  const trigger = useRef()


  const [markerStyle, setMarkerStyle] = useState('selected')
  const [markerStyle2, setMarkerStyle2] = useState('unviewed')
  const update = () => {
    setMarkerStyle('viewed')
    setMarkerStyle2('selected')
  }

  const reverseUpdate = () => {
    setMarkerStyle('selected')
    setMarkerStyle2('viewed')
  }

  let tl = useRef()

  useEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: 'top 40%', // https://greensock.com/docs/v3/Plugins/ScrollTrigger/
        end: "+=1",
        onEnter: () => {
          gsap.to(cards.current, {
            x: -230,
            // ease: 'power4.out',
            // duration: 1,
            onStart: update,
          })
        },
        onEnterBack: () => {
          gsap.to(cards.current, {
            x: '+=230',
            // ease: 'power4.out', https://greensock.com/docs/v3/Eases
            onStart: reverseUpdate,
          })
        },
        onLeave: () => { console.log('onLeave') },
        onScrubComplete: () => { console.log('onScrubComplete') },
        onLeaveBack: () => { console.log('onLeaveBack') },
        onRefresh: () => { console.log('onRefresh') },
        onfullscreenchange: () => { console.log('onFullScreenChange') },
        onSnapComplete: () => { console.log('onSnacpComplete') },
        onToggle: () => { console.log('onToggle') },
        // pin: true,
        // scrub: 2,
        // anticipatePin: 1,
        markers: true
      }, paused: true
    })
    // .to(floatingText1.current, {
    //   y: '=+1000'
    // }, "<1%")

  }, [])

  return (



    <div className='scrollbar-hide font-[gilroy]'>
      <div className="grid grid-cols-2 sticky top-0 shadow-md z-20">
        <div className='bg-white shadow-[0_2px_4px_rgba(60,64,67,0.1)] p-[8px] w-full row-start-1 col-start-1 col-span-3 grid grid-cols-2 sticky top-0 z-20 will-change-transform overflow-visible'>
          <div className="col-start-1 relative ml-4">
            <Image
              src={logo}
              layout='fill'
              objectFit='contain'
              objectPosition='left'
            />
          </div>
          <div className="flex flex-row justify-end gap-2 col-start-2 row-start-1">
            <button className='bg-white rounded text-resider-blue-primary p-2 border align-center font-[500] text-[14px] leading-[18px] tracking-[0.2px] px-[32px] py-[15px] will-change-transform' onClick={scheduleDemoClick}>Contact Us</button>
            <button className='bg-resider-blue-primary rounded text-white p-2 shadow-[0_1px_2px_rgba(60,64,67,0.3)] align-center font-[500] text-[14px] leading-[18px] tracking-[0.2px] px-[32px] py-[15px] will-change-transform' onClick={scheduleDemoClick}>Schedule Demo</button>
          </div>

        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-3 will-change-transform'>
        <Head>
          <title>Resider</title>

        </Head>

        <div className='grid grid-cols-[9.5px_255px_9.5px] grid-rows-[8px_552.2px_8.1px] ml-[24px] font-[gilroy] col-start-1 lg:col-start-2 h-screen lg:justify-center overflow-hidden sticky will-change-transform frame-shadow'>


          <div className='flex row-start-2 col-start-2 z-4 place-self-center gap-4'>
            <Marker
              text='5 units'
              state={markerStyle}
            />

            <Marker
              text='$3000'
              state={markerStyle2}
            />

            <Marker
              text='$2700'
              state='unviewed'
            />

          </div>

          <img src="/map-4x.png" alt="map" className='row-start-2 col-start-2 col-span-1 pt-[101px] z-2 rounded-xl' />

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

          <img
            src='/frame-hollow.svg'
            className='row-start-1 row-span-3 col-start-1 col-span-3 z-5'
          />
        </div>

        <div ref={trigger} className='h-[1000px]  will-change-transform' />

        <div className='col-start-3 grid bg-white  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none rounded h-fit w-fit self-end mr-[12px] z-10 will-change-transform'>
          <div className='py-[32px] px-[24px] flex flex-col gap-[16px] rounded-[12px]'>
            <h1 className='font-bold text-[18px] lg:text-[24px]'>Platform <span className='text-resider-blue-primary '>integrity</span></h1>
            <p className='text-[12px] lg:text-[16px] font-medium max-w-[244px] text-resider-text-p'>Resider solely consists of rental properties syndicated through data API’s. With up to date and accurate listings, your clients can browse with confidence.</p>
          </div>
        </div>

        <div className='h-[1000px] will-change-transform' />




      </div>
    </div>

  )
}
