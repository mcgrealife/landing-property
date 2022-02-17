import Head from 'next/head'
import Card from '../components/Card'
import Marker from '../components/Marker'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
// import { TextPlugin } from "gsap/dist/TextPlugin"
import logo from '../public/resider-logo.png'


export default function Home() {


  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  function scheduleDemoClick() {
    // return alert('💰 $100 showing, $1000 max. 50% per lease. 💰 ')
    console.log(ScrollTrigger.getAll())
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
  const leftTextFilter = useRef()
  const leftTextProperty = useRef()
  const leftTextBooking = useRef()
  const rightTextDataIntegrity = useRef()
  const rightTextMoveIn = useRef()
  const rightTextPersonalizedPage = useRef()
  const rightTextFilteredAvailability = useRef()
  const rightTextCol = useRef()
  const topLogo = useRef()
  const headerShadow = useRef()
  const section1 = useRef()
  const main = useRef()
  const mapMask = useRef()
  const wrapperMapMask = useRef()
  const frameMask = useRef()
  const frame = useRef()
  const screen = useRef()
  const carousel = useRef()
  const headerSubText = useRef()
  const spacer = useRef()
  const overlay = useRef()
  const calendar = useRef()
  const property = useRef() // svg shadow broken
  const propertyBar = useRef()
  const availability = useRef()



  const [markerStyle, setMarkerStyle] = useState('selected')
  const [markerStyle2, setMarkerStyle2] = useState('unviewed')
  const update = () => {
    setTimeout(() => {
      setMarkerStyle('viewed')
      setMarkerStyle2('selected')
    }, 500)
  }
  const reverseUpdate = () => {
    setTimeout(() => {
      setMarkerStyle('selected')
      setMarkerStyle2('viewed')
    }, 500)
  }

  useEffect(() => {


    function scrollToMain() {
      gsap.timeline()
        .to(window, { duration: 1, scrollTo: { y: main.current, offsetY: 100, autoKill: true }, ease: "power3" })
    }

    function scrollToTop() {
      gsap.timeline()
        .to(window, { duration: 1, scrollTo: { y: 0, autoKill: true }, ease: "power3" })
    }

    // use scrollDir conditional    
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


    gsap.to(headerShadow.current, {
      opacity: 100,
      scrollTrigger: {
        trigger: topLogo.current,
        end: "+=300",
        toggleActions: 'play reverse play reverse',
        scrub: true
      }
    })





    // I could probably use the same tweens in each matchMedia function, and use computed values for the dynamic parts (if mobile, move calendar up by 300px y; else if desktop, move calendar up by 400px y)
    ScrollTrigger.matchMedia({

      // Desktop
      "(min-width: 800px)": function () {

        // desktop - map intro
        gsap.timeline({
          scrollTrigger: {
            trigger: phone.current,
            start: 'top 10%',
            end: rightTextCol.current.getBoundingClientRect().height, // 100%
            onEnter: scrollToMain,
            onLeaveBack: scrollToTop,
            // probably onEnterBack function reverseIntro with smoother easing
            pin: true,
            // markers: true,
            toggleActions: "play reverse play reverse",
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
            // borderRadius: 0
          }, 0)
          .from(wrapperMapMask.current, {
            width: '525px',
            // borderRadius: 0
          }, 0)
          .from(frameMask.current, {
            width: '525px',
            height: '525px'
          }, 0)
          .to(wrapperMapMask.current, {
            width: '345px',
            height: '787px',
            ease: "power2",
            // borderRadius: 0
          }, '<75%')
          // .from(spacer.current, {
          //   height: '0'
          // })
          .set(leftText.current, {
            opacity: 100
          }, '<50%') // duration 50 fades but causes background calculations for 50 seconds

        // desktop - card swipe
        gsap.to(cards.current, {
          scrollTrigger: {
            trigger: rightTextDataIntegrity.current,
            start: 'top 60%', // when it's 60% of the phone container. good use for a label?
            end: '+=1',
            scrub: 2,
            ease: "power1.inOut",
            onEnter: update,
            onEnterBack: reverseUpdate,
          },
          x: '-312',
          ease: "power1.inOut",
        })

        let dx = (el1, el2) => {
          const topOf1 =
            el1.current.getBoundingClientRect().y

          const topOf2 =
            el2.current.getBoundingClientRect().y

          const heightOf2 =
            el2.current.getBoundingClientRect().height


          return (topOf2 - heightOf2) - topOf1
        }

        console.log(leftText.current.getBoundingClientRect())

        // desktop - leftText Search > Filter
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextDataIntegrity.current,
            start: 'bottom top',
            end: () => "+=" + dx(rightTextDataIntegrity, rightTextMoveIn),
            toggleActions: 'play reverse play reverse',
            markers: true
          }
        })
          .set(leftText.current, {
            opacity: 0
          })
          .set(leftTextFilter.current, {
            opacity: 100
          })

        // desktop - calendar
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextMoveIn.current,
            start: 'top bottom',
            end: '+=2000px',
            // ease: "power1.inOut",
            toggleActions: 'play reverse play reverse',
          },
        })
          .from(overlay.current, {
            opacity: 0,
          }, 1) //"+=3"
          .from(calendar.current, {
            y: '+456',
            ease: "power1.inOut",
            duration: 0.5
          }, 1)

        // desktop - leftText Filter > Property
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextMoveIn.current,
            start: 'bottom top',
            end: () => "+=" + dx(rightTextMoveIn, rightTextPersonalizedPage),
            toggleActions: 'play reverse play reverse',
            markers: true
          }
        })
          .set(leftTextFilter.current, {
            opacity: 0
          })
          .set(leftTextProperty.current, {
            opacity: 100
          })

        // desktop - property 
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextPersonalizedPage.current,
            start: 'top bottom+=50',
            end: '2000px',
            // ease: "power1.inOut",
            toggleActions: 'play reverse play reverse'
          },
          // duration: "0.1"
        })
          .set(leftTextFilter.current, {
            opacity: 0
          })
          .set(leftTextProperty.current, {
            opacity: 100
          }, 0)
        // possible gsap.set



        // desktop - filteredAvailability 
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextFilteredAvailability.current,
            start: 'top 80%',
            end: '2000px',
            // ease: "power1.inOut",
            toggleActions: 'play reverse play reverse'
          },
        })
          // possible gsap.set
          .to(availability.current, {
            opacity: 100,
          })

      },

      // Mobile
      "(max-width: 799px)": function () {

        let tlMainMobile = gsap.timeline({
          scrollTrigger: {
            trigger: phone.current,
            start: 'top 15%',
            end: rightTextCol.current.getBoundingClientRect().height, // 100%
            onEnter: scrollToMain,
            onLeaveBack: scrollToTop,
            // probably onEnterBack function reverseIntro with smoother easing
            pin: true,
            // markers: true,
            toggleActions: "play reverse play reverse"
          }
        })

          // mobile map-transition
          .fromTo(mapMask.current, {
            y: '-=0px',
            height: '303px',
            width: '303px',
            borderRadius: '769.01'
          }, {
            height: '623px',
            width: '303px',
            borderRadius: '30px'
          }, 0)
          .from(frame.current, {
            width: '212px'
          }, 0)
          .from(screen.current, {
            width: '197px'
          }, 0)
          .from(wrapperMapMask.current, {
            width: '303px',
            borderRadius: '0'
          }, 0)
          .fromTo(frameMask.current, {
            width: '303px',
            height: '303px'
          }, {
            width: '',
            height: '645px',
            borderRadius: '10px'
          }, 0)
          .to(wrapperMapMask.current, {
            width: '254px',
            height: '591px',
            ease: "power2",
          }, '<75%')
          // .from(spacer.current, {
          //   height: '0'
          // })
          .fromTo(leftText.current, {
            opacity: 0
          }, { opacity: 100, duration: 1 }, '<50%') // duration 50 fades but causes background calculations for 50 seconds


        // mobile - card swipe
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextDataIntegrity.current,
            start: 'top 40%',
            end: '+=1',
            ease: "power1.inOut",
            scrub: 2,
            onEnter: update,
            onEnterBack: reverseUpdate
          }
        })
          .to(cards.current, {
            x: '-224',
            ease: "power1.inOut",
          })


        // mobile - calender
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextMoveIn.current,
            start: 'top 70%',
            end: '+=2000px',
            // ease: "power1.inOut",
            toggleActions: 'play reverse play reverse'
          },
        })
          .from(overlay.current, {
            opacity: 0,
          })
          .from(calendar.current, {
            y: '+338',
            ease: "power1.inOut",
            duration: 0.5
          }, 0)

        // mobile - property
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextPersonalizedPage.current,
            start: 'top 80%',
            // ease: "power1.inOut",
            toggleActions: 'play reverse play reverse'
          },
          duration: "0.1"
        })
          // possible gsap.set
          .from(propertyBar.current, {
            opacity: 0,
          })
          .from(property.current, {
            opacity: 0,
          }, 0)


        // mobile - filteredAvailability 
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextFilteredAvailability.current,
            start: 'top 80%',
            end: '2000px',
            // ease: "power1.inOut",
            toggleActions: 'play reverse play reverse'
          },
        })
          // possible gsap.set
          .to(availability.current, {
            opacity: 100,
          })


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

          <button className='hidden lg:block bg-resider-blue-primary rounded text-white align-center font-[600] text-[14px] leading-[20px] px-[20px] py-[14px] will-change-transform' onClick={scheduleDemoClick}>Request A Demo</button>
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


      <div ref={main} id='main' className='grid grid-areas-main grid-cols-main grid-rows-main'>

        {/* reduce complexity of grid-areas by scaling svgs (then only need to define mobile?)  */}

        <div id="phone" ref={phone} className='grid  grid-in-left col-span-2 grid-areas-phone grid-cols-phoneMobile lg:grid-cols-phoneDesktop  grid-rows-phoneMobile lg:grid-rows-phoneDesktop  ml-[24px] lg:ml-[0px] h-fit  justify-start lg:justify-center frame-shadow border-none border-purple-500 justify-items-center overflow-visible'>


          <h1 id='leftText' ref={leftText} className="hidden lg:grid col-start-1 col-end-3 row-start-3 text-[72px] font-[600] text-[rgba(60,64,67,1)]  place-self-center justify-center min-w-[550px] frame-shadow-none opacity-0">
            Search
          </h1>
          <h1 id='leftTextFilter' ref={leftTextFilter} className="hidden lg:grid col-start-1 col-end-3 row-start-3 text-[72px] font-[600] text-[rgba(60,64,67,1)]  place-self-center justify-center min-w-[550px] frame-shadow-none opacity-0">
            Filter
          </h1>
          <h1 id='leftTextProperty' ref={leftTextProperty} className="hidden lg:grid col-start-1 col-end-3 row-start-3 text-[72px] font-[600] text-[rgba(60,64,67,1)]  place-self-center justify-center min-w-[550px] frame-shadow-none opacity-0">
            Property
          </h1>
          <h1 id='leftTextBooking' ref={leftTextBooking} className="hidden lg:grid col-start-1 col-end-3 row-start-3 text-[72px] font-[600] text-[rgba(60,64,67,1)]  place-self-center justify-center min-w-[550px] frame-shadow-none opacity-0">
            Booking
          </h1>



          <div id="frameMask" ref={frameMask} className=" grid grid-areas-phone grid-cols-phoneMobile lg:grid-cols-phoneDesktop  grid-rows-phoneMobile lg:grid-rows-phoneDesktop rounded-br-[769.01px] rounded-bl-[769.01px] row-start-1 row-end-6 col-start-2 col-end-7 border-none border-green-500  overflow-hidden justify-items-center justify-center">

            <img id='frame' ref={frame} src="frame-hollow.svg" alt="frame" className=' w-full col-start-3 col-end-6 row-start-2 row-end-4  z-20' />

            <div id="screen" ref={screen} className="grid col-start-4 col-end-5 row-start-3 row-end-4  grid-areas-screen grid-cols-screenMobile lg:grid-cols-screenDesktop grid-rows-screenMobile lg:grid-rows-screenDesktop overflow-hidden rounded-[20px]  lg:rounded-[42px]">

              <div id="overlay" ref={overlay} className="bg-black opacity-50 row-start-2 col-start-1 row-span-4 z-9" />


              <img src="/availability.svg" alt="availability" id="availability" ref={availability} className="z-12 grid-in-body self-start w-full opacity-0" />

              {/* property tab shadow and chip strokes broken in SVG, consider image or fixing .svg  or accepting it*/}
              <img src="/property-bar.svg" alt="property-bar" id="property-bar" ref={propertyBar} className="z-12 grid-in-body self-end w-full opacity-0" />

              <img src="/property.svg" alt="calendar" id="property" ref={property} className="z-11 grid-in-body self-start w-full opacity-0" />


              <img src="/calendar.svg" alt="calendar" id="calendar" ref={calendar} className="z-10 grid-in-body self-end w-full" />

              <div id='markers' className='flex grid-in-body z-4 place-self-center gap-4'>
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


          <div id="wrapperMapMask" ref={wrapperMapMask} className='grid col-start-4 col-end-5 row-start-1 row-end-4  overflow-hidden border-none border-pink-500 rounded-[20px] lg:rounded-[41px] self-start justify-center '>
            {/* <div id="spacer" ref={spacer} className="h-[28px]" /> */}

            <div id="mapMask" ref={mapMask} className='w-[344px] h-[744px] rounded-none lg:rounded-[41px] overflow-hidden border-none border-fuchsia-300' >

              <img id='map' src="map.png" alt="map" className='object-cover  w-[1000px] h-[1000px]' />
            </div>
          </div>

        </div>

        <div id="rightTextCol" ref={rightTextCol} className=' grid-in-right col-end-left flex flex-col gap-[500px] lg:gap-[1000px] pt-[1000px] z-10 w-fit justify-self-end lg:justify-self-center'>

          <div id='rightTextDataIntegrity' ref={rightTextDataIntegrity} className='bg-white lg:justify-self-end self-center lg:bg-transparent shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit mr-[16px] lg:mr-[59px] rounded-[8px]  flex flex-col gap-[8px] lg:gap-[16px] pl-[24px]  pr-[36px] lg:pr-[24px] pt-[36px] lg:pt-[32px] pb-[28px] lg:pb-[32px]'>

            {/* <div className="hidden lg:block h-[500px] w-10" /> */}
            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Search</div>

            <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'>Data <span className='text-resider-blue-primary '>integrity</span></h1>

            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Resider solely consists of rental properties syndicated through data API’s. With up to date and accurate listings, your clients can browse with confidence.</p>

          </div>

          <div id='rightTextMoveIn' ref={rightTextMoveIn} className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px]'>

            {/* <div className="hidden lg:block h-[500px] w-10" /> */}

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Filter</div>

            <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'><span className='text-resider-blue-primary '>Move in</span> date</h1>

            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Qualified leads are our emphasis. Allowing users to narrow down exact availability by their move in date is the first step.</p>

          </div>

          <div id='rightTextPersonalizedPage' ref={rightTextPersonalizedPage} className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px]'>

            {/* <div className="hidden lg:block h-[500px] w-10" /> */}

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Property</div>

            <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'><span className='text-resider-blue-primary '>Personalized</span> page</h1>

            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>With a beautiful display of your property,
              we highlight key aspects including
              parking, pet and utility info.</p>

          </div>


          <div id='rightTextFilteredAvailability' ref={rightTextFilteredAvailability} className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px]'>

            {/* <div className="hidden lg:block h-[500px] w-10" /> */}

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Property</div>

            <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'><span className='text-resider-blue-primary '>Filtered</span> availability</h1>

            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Grouped by floor plan, available units are based on the user’s filters to ensure eligible results, and qualified clients.</p>

          </div>



          {/* <div id="spacer3" className='h-[500px] lg:h-[1000px]' /> */}
        </div>

      </div>

      {/* <div id="spacerBottom" className='h-screen' /> */}

      <div id="demo" className='flex flex-col h-[1000px] self-center text-center justify-center pt-[20] lg:pt-[36] pl-[24px] pr-[32px]'>
        <h1 className=' font-bold text-[28px] lg:text-[48px]leading-[24px] text-[rgba(60,64,67,1)]'>Request a Demo</h1>
        <p className='text-[16px] text-[rgba(0,0,0,0.6)] leading-[24px] text-center'>Sign up to learn more about Resider.</p>
      </div>
      {/* <div className='grid grid-cols-[repeat(6, minmax(319px,527px))] grid-rows-[repeat(6,56px)] border-1'>
        <div className=''>test</div>
      </div> */}

    </div>



  )
}
