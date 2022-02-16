import Head from 'next/head'
import Card from '../components/Card'
import Marker from '../components/Marker'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
import logo from '../public/resider-logo.png'


export default function Home() {


  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  function scheduleDemoClick() {
    return alert('💰 $50 showing, $1000 max. 50% per lease. 💰 ')
  }


  function updateLeftTextFilter() {
    return 'Filter'
  }

  function updateLeftTextSearch() {
    return 'Search'
  }



  const rightText = [
    {
      title: "Data integrity",
      body: "Resider solely consists of rental properties syndicated through data API’s. With up to date and accurate listings, your clients can browse with confidence.",
    },
    {
      title: "Move in date",
      body: "Qualified leads are our emphasis. Allowing users to narrow down exact availability by their move in date is the first step.",
    }

  ]


  const cards = useRef()
  const phone = useRef()
  const leftText = useRef()
  const rightTextDataIntegrity = useRef()
  const rightTextMoveIn = useRef()
  const rightTextCol = useRef()
  const topLogo = useRef()
  const headerShadow = useRef()
  const section1 = useRef()
  const main = useRef()
  const mapMask = useRef()
  const wrapperMapMask = useRef()
  const frameMask = useRef()
  const screen = useRef()
  const carousel = useRef()
  const headerSubText = useRef()
  const spacer = useRef()



  // const [markerStyle, setMarkerStyle] = useState('selected')
  // const [markerStyle2, setMarkerStyle2] = useState('unviewed')
  // const update = () => {
  //   setTimeout(() => {
  //     setMarkerStyle('viewed')
  //     setMarkerStyle2('selected')
  //   }, 500)
  // }

  // const reverseUpdate = () => {
  //   setTimeout(() => {
  //     setMarkerStyle('selected')
  //     setMarkerStyle2('viewed')
  //   }, 500)
  // }

  useEffect(() => {

    // fromTo(mapMask, {
    // from desktop: w-[526px] h-[526px]
    // })




    function scrollToMain() {
      gsap.timeline()
        .to(window, { duration: 1, scrollTo: { y: main.current, offsetY: 100, autoKill: true }, ease: "power3" })
    }

    function scrollToTop() {
      gsap.timeline()
        .to(window, { duration: 1, scrollTo: { y: 0, autoKill: true }, ease: "power3" })
    }

    function reverseIntro() {
      // do I need to kill the previous timeline so it's not pinned? (if so put other timeline in variable, then variable.kill() a the of of this function )
      gsap.timeline()
        .fromTo(mapMask.current, {
          y: '-=0px',
          height: '525px',
          width: '525px',
          borderRadius: '769.01'
        }, {
          height: '844px',
          width: '525px',
        }, 0)
        .from(wrapperMapMask.current, {
          width: '525px',
          borderRadius: '0'
        }, 0)
        .from(frameMask.current, {
          height: '525px'
        }, 0)
        .to(wrapperMapMask.current, {
          width: '345px',
          height: '787px',
          ease: "power2",
        }, '<75%')
        .from(spacer.current, {
          height: '0'
        })

    }


    gsap.timeline({
      scrollTrigger: {
        trigger: phone.current,
        start: 'top 30%',
        onEnter: scrollToMain,
        onLeaveBack: scrollToTop,
      }
    })



    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: phone.current,
        start: 'top 20%',
        pin: true,
        markers: true,
        toggleActions: "play reverse reverse reverse"
        // probably onEnterBack function reverseIntro with smoother easing

      }
    })
      .fromTo(mapMask.current, {
        y: '-=0px',
        height: '525px',
        width: '525px',
        borderRadius: '769.01'
      }, {
        height: '844px',
        width: '525px',
      }, 0)
      .from(wrapperMapMask.current, {
        width: '525px',
        borderRadius: '0'
      }, 0)
      .from(frameMask.current, {
        height: '525px'
      }, 0)
      .to(wrapperMapMask.current, {
        width: '345px',
        height: '787px',
        ease: "power2",
      }, '<75%')
      .from(spacer.current, {
        height: '0'
      })
    // .to(leftText.current, {
    //   y: () => window.innerHeight / 2
    // }, 0)



    //   .to(mapMask.current, {
    //     width: '820px',
    //     height: '820px',

    //   })
    //   // .to(phoneMask.current, {
    //   //   height: '820px',
    //   //   width: '820px',
    //   //   borderBottomLeftRadius: '0',
    //   //   borderBottomRightRadius: '0'

    //   // }, 0)
    //   .to(wrapperMapMask.current, {
    //     width: '345px',
    //     height: '800px',
    //     // borderRadius: '10%'
    //   }, '<10%')


    gsap.to(headerShadow.current, {
      opacity: 100,
      scrollTrigger: {
        trigger: topLogo.current,
        end: "+=300",
        toggleActions: 'play reverse play reverse',
        scrub: true
      }
    })


    ScrollTrigger.matchMedia({
      "(min-width: 800px)": function () {

        gsap.to(cards.current, {
          scrollTrigger: {
            trigger: rightTextDataIntegrity.current,
            start: 'top center',
            end: '+=1',
            scrub: 2,
            ease: "power1.inOut",
            // onEnter: update,
            // onEnterBack: reverseUpdate,
          },
          x: '-312',
          ease: "power1.inOut",
        })
      },
      "(max-width: 799px)": function () {
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextDataIntegrity.current,
            start: 'top 40%',
            end: '+=1',
            ease: "power1.inOut",
            scrub: 2,
            // onEnter: update,
            // onEnterBack: reverseUpdate
          }
        })
          .to(cards.current, {
            x: '-224',
            ease: "power1.inOut",
          })
      }
    })


    gsap.timeline({
      scrollTrigger: {
        trigger: rightTextDataIntegrity.current,
        start: 'top 60%',
        // end: "+=50px",
        scrub: true,
      }
    })
      .from(leftText.current, {
        opacity: 0,
      })



    gsap.timeline({
      scrollTrigger: {
        trigger: rightTextDataIntegrity.current,
        start: 'top 60%',
        end: '1px',

      }
    })
      .from(leftText.current, {
        opacity: 0,
      })

    let phoneHeight = phone.current.getBoundingClientRect().height

    gsap.to(leftText.current, {
      opacity: '100',
      y: () => leftText.current.getBoundingClientRect().x / window.innerHeight,
      // ease: 'none',
      scrollTrigger: {
        trigger: phone.current,
        start: 'top 20%',
        end: phoneHeight,
        onUpdate: console.log(window.innerHeight / 2)
      },
      onUpdate: console.log(leftText.current.getBoundingClientRect().x)
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

      <div id='section-1' ref={section1} className='flex flex-col place-items-center text-center'>

        <img src="/logo-square.svg" alt="logo-square" className='h-[36px] lg:h-[52px] mt-[12px]' />

        <h1 className='mt-[24.49px] lg:mt-[24px] text-[rgba(60,64,67,1)] font-[700] text-[36px] lg:text-[72px] leading-[48px] lg:leading-[84px] tracking-[0.1px] max-w-[326px] lg:max-w-[639px]'>A <span className='text-[rgba(54,108,165,1)]'>better</span> way to generate leads</h1>

        <p ref={headerSubText} className='text-[rgba(96,99,103,1)] mt-[15.15px] lg:mt-[16px] text-[18px] lg:text-[26px] leading-[30px] lg:leading-[38px] max-w-[326px] lg:max-w-[579px]'>Resider is a smart, efficient and helpful way to qualify and schedule your prospective tenants.</p>


      </div>



      <div id='spacer' className='h-[100px]' />


      <div ref={main} id='main' className='grid grid-areas-mobile lg:grid-areas-desktop grid-cols-mobile lg:grid-cols-desktop grid-rows-mobile lg:grid-rows-desktop'>

        <h1 id='leftText' ref={leftText} className="hidden lg:block text-[82px] font-[600] text-[rgba(60,64,67,1)] grid-in-left self-start place-self-center">
          Platform
        </h1>

        {/* reduce complexity of grid-areas by scaling svgs (then only need to define mobile?)  */}

        <div id="phone" ref={phone} className='grid  grid-in-left lg:grid-in-middle  grid-areas-phone grid-cols-phoneMobile lg:grid-cols-phoneDesktop  grid-rows-phoneMobile lg:grid-rows-phoneDesktop  ml-[24px] lg:ml-[0px] h-full col-end-right lg:justify-center frame-shadow border-none border-purple-500 justify-items-center'>


          <div id="frameMask" ref={frameMask} className=" grid grid-areas-phone grid-cols-phoneMobile lg:grid-cols-phoneDesktop  grid-rows-phoneMobile lg:grid-rows-phoneDesktop rounded-br-[769.01px] rounded-bl-[769.01px] row-start-1 row-end-6 col-start-1 col-end-6 border-none border-green-500  overflow-hidden justify-center">

            <img id='frame' src="frame-hollow.svg" alt="frame" className=' w-full row-start-2 row-end-4 col-start-2 col-end-5 z-20' />

            <div id="screen" ref={screen} className="grid row-start-3 row-end-4 col-start-3 col-end-4  grid-areas-screen grid-cols-screenMobile lg:grid-cols-screenDesktop grid-rows-screenMobile lg:grid-rows-screenDesktop ">

              <img src="/status-search-filter.svg" alt="status"
                className='grid-in-status z-2 shadow-lg w-full ' />

              <div id='carousel' ref={carousel} className=' grid-in-body self-end z-6 pb-[28.5px] overflow-x-scroll scrollbar-hide snap-x  pt-2'>

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

              <img src="/home.svg" alt="home" className=' grid-in-body justify-self-center self-end pb-[5.23px] z-20 w-[91px] lg:w-[123px]' />

            </div>
          </div>


          <div id="wrapperMapMask" ref={wrapperMapMask} className='grid row-start-1 row-end-4 col-start-3 col-end-4  overflow-hidden border-none border-pink-500 rounded-[41px] self-start justify-center '>
            {/* <div id="spacer" ref={spacer} className="h-[28px]" /> */}

            <div id="mapMask" ref={mapMask} className='w-[344px] h-[744px]  rounded-[41px] overflow-hidden border-none border-fuchsia-300' >

              <img id='map' src="map.png" alt="map" className='object-cover  w-[1000px] h-[1000px]' />
            </div>
          </div>

        </div>




        {/* <div id='phone' ref={phone} className='grid grid-cols-[9.5px_255px_9.5px] lg:grid-cols-[13px_344.5px_12.5px] grid-rows-[8px_552.2px_8.1px] lg:grid-rows-[11px_745px_11px] ml-[24px] lg:ml-[0px] font-[gilroy] grid-in-left  lg:grid-in-middle col-end-right h-full lg:justify-center overflow-auto will-change-transform frame-shadow'>


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
        </div> */}




        <div id="rightTextCol" ref={rightTextCol} className='grid-in-right flex flex-col gap-96'>
          <div id='rightTextDataIntegrity' className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px]'>

            <div className="hidden lg:block h-[500px] w-10" />

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Platform</div>

            <h1 ref={rightTextDataIntegrity} className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'>Data <span className='text-resider-blue-primary '>integrity</span></h1>

            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Resider solely consists of rental properties syndicated through data API’s. With up to date and accurate listings, your clients can browse with confidence.</p>

          </div>



          <div id='rightTextMoveIn' className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px]'>

            <div className="hidden lg:block h-[500px] w-10" />

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Platform</div>

            <h1 ref={rightTextMoveIn} className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'><span className='text-resider-blue-primary '>Move in</span> date</h1>

            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Qualified leads are our emphasis. Allowing users to narrow down exact availability by their move in date is the first step.</p>

          </div>
        </div>




      </div>

    </div>



  )
}
