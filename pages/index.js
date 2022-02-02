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
    return alert('💰 $50 showing, $1000 max. 50% per lease. 💰 ')
  }

  const cards = useRef()
  const phone = useRef()
  const leftText = useRef()
  const rightText = useRef()
  const topLogo = useRef()
  const headerShadow = useRef()




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

  // let tl = useRef()

  useEffect(() => {

    gsap.to(headerShadow.current, {
      opacity: 100,
      scrollTrigger: {
        trigger: topLogo.current,
        end: "+=300",
        toggleActions: 'play reverse play reverse',
        scrub: true
      }
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: phone.current,
        start: 'top 148px',
        end: "+=1000",
        toggleActions: 'play, pause, reverse, pause',
        // markers: true,
        pin: true,
        scrub: 1,
      },
    })

    ScrollTrigger.matchMedia({
      "(min-width: 800px)": function () {

        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: rightText.current,
            start: 'top center',
            end: '+=20%',
            ease: "easeInOut",
            scrub: 2,
            markers: true,
          }
        })
        tl.to(cards.current, {
          x: '-312',
          onComplete: update,
          onReverseComplete: reverseUpdate
        })
      },
      "(max-width: 799px)": function () {
        gsap.timeline({
          scrollTrigger: {
            trigger: rightText.current,
            start: 'top center',
            end: '+=20%',
            ease: "easeInOut",
            scrub: 2,
            markers: true
          }
        })
          .to(cards.current, {
            x: '-224',
            onComplete: update,
            onReverseComplete: reverseUpdate
          })
      }
    })





    // gsap.to(cards.current, {
    //   scrollTrigger: {
    //     trigger: rightText.current,
    //     start: 'top center',
    //     end: '+=25%', //decrease for faster card swipe
    //     markers: true,
    //     scrub: true
    //   },
    //   x: -230, // different mobile vs desktop
    //   onStart: update, // markers need to change halfway through card swipe, or end of swipe
    //   onReverseComplete: reverseUpdate
    // })


    gsap.to(leftText.current, {
      y: () => window.innerHeight / 2,
      ease: 'none',
      scrollTrigger: {
        trigger: leftText.current,
        start: 'top center',
        end: "+=50%",
        invalidateOnRefresh: true,
        scrub: true,
      }
    })


  }, [])

  return (

    <div id='parent' className='scrollbar-hide font-[gilroy]'>
      <Head>
        <title>Resider</title>

      </Head>


      <header className='bg-white py-[14px]  w-full grid h-[78px] sticky top-0 z-20 pr-[20px] pl-[24px]'>
        <div className=" relative">
          <Image
            src={logo}
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>

        <div className="flex flex-row justify-end gap-[12px] col-start-2 row-start-1">
          <button className='hidden lg:block bg-white rounded text-resider-blue-primary border border-[rgba(218,220,224,1)] align-center font-[600] text-[14px] leading-[20px] px-[20px] py-[14px] will-change-transform' onClick={scheduleDemoClick}>Contact us</button>
          <button className='hidden lg:block bg-resider-blue-primary rounded text-white align-center font-[600] text-[14px] leading-[20px] px-[20px] py-[14px] will-change-transform' onClick={scheduleDemoClick}>Schedule Demo</button>
          <img src='/menu_black_24dp.svg'
            alt='menu-icon'
            className='lg:hidden  w-[24px] min-w-[24px]' />
        </div>
      </header>


      <div ref={headerShadow} className='shadow-[0_2px_4px_rgba(60,64,67,0.1)] w-full grid h-[78px] fixed top-0 z-10 opacity-0' />

      <div id='section-1' className='flex flex-col place-items-center text-center'>

        <img src="/logo-square.svg" alt="logo-square" className='h-[36px] lg:h-[52px] mt-[12px]' />

        <h1 className='mt-[24.49px] lg:mt-[24px] text-[rgba(60,64,67,1)] font-[700] text-[36px] lg:text-[72px] leading-[48px] lg:leading-[84px] tracking-[0.1px] max-w-[326px] lg:max-w-[639px]'>A <span className='text-[rgba(54,108,165,1)]'>better</span> way to generate leads</h1>

        <p className='text-[rgba(96,99,103,1)] mt-[15.15px] lg:mt-[16px] text-[18px] lg:text-[26px] leading-[30px] lg:leading-[38px] max-w-[326px] lg:max-w-[579px]'>Resider is a smart, efficient and helpful way to qualify and schedule your prospective tenants.</p>

        <img src="/hero.svg" alt="hero" className='h-[318px] lg:h-[526px] mt-[24.49px] lg:mt-[24px]' />

      </div>

      <div id='spacer' className='h-[300px]' />

      <div id='section-2' className='grid grid-areas-mobile lg:grid-areas-desktop grid-cols-mobile lg:grid-cols-desktop grid-rows-mobile lg:grid-rows-desktop'>


        <h1 id='leftText' ref={leftText} className="hidden lg:block text-[82px] font-[600] text-[rgba(60,64,67,1)] grid-in-left self-center place-self-center">
          Platform
        </h1>

        <div id='phone' ref={phone} className='grid grid-cols-[9.5px_255px_9.5px] lg:grid-cols-[13px_344.5px_12.5px] grid-rows-[8px_552.2px_8.1px] lg:grid-rows-[11px_745px_11px] ml-[24px] lg:ml-[0px] font-[gilroy] grid-in-left  lg:grid-in-middle col-end-right h-full lg:justify-center overflow-auto will-change-transform frame-shadow'>


          <div id='markers' className='flex row-start-2 col-start-2 z-4 place-self-center gap-4'>
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

          <img src="/map-4x.png" alt="map" className='row-start-2 col-start-2 col-span-1 pt-[101px] z-2 rounded-xl h-full object-cover' />

          <img src="/status-search-filter.svg" alt="status"
            className='row-start-2 row-span-4 col-start-2 col-span-1 z-2 shadow-lg w-full ' />

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


          <img src="/home.svg" alt="home" className='row-start-2 col-start-2 justify-self-center self-end pb-[5.23px] z-20 w-[91px] lg:w-[123px]' />

          <img
            src='/frame-hollow.svg'
            className='row-start-1 row-span-3 col-start-1 col-span-3 z-5 w-full'
          />
        </div>


        <div ref={rightText} id='rightText' className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px]'>

          <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Platform</div>

          <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'>Data <span className='text-resider-blue-primary '>integrity</span></h1>

          <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Resider solely consists of rental properties syndicated through data API’s. With up to date and accurate listings, your clients can browse with confidence.</p>

        </div>

        {/* <div className='h-[1000px] will-change-transform' /> */}





      </div>

      <div id='spacer' className='h-[1000px]' />

    </div>



  )
}
