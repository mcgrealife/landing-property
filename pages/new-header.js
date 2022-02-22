import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
// import { TextPlugin } from "gsap/dist/TextPlugin"
import logo from '../public/resider-logo.png'
import logoSquare from '../public/logo-square-4x.png'
import map from '../public/map-circle-4x.png'
import phoneHeroImgSquare from '../public/phone-hero-img-square.png'
import mapImg from '../public/map-img-4x.png'


export default function Home() {

  const isDesktop = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 800) {
        return true
      } else {
        return false
      }
    } else {
      console.log("not a window")
    }
  }

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


  // return jsx with <span> for titles. or split the titles
  const rightText = [
    {
      blueTitle: "..",
      darkTitle: "..",
      title: "Data integrity",
      body: "Resider solely consists of rental properties syndicated through data API’s. With up to date and accurate listings, your clients can browse with confidence.",
    },
    {
      title: "Move in date",
      body: "Qualified leads are our emphasis. Allowing users to narrow down exact availability by their move in date is the first step.",
    }

  ]

  const heroText = useRef()
  const phoneHero = useRef()
  const mapHero = useRef()
  const cards = useRef()
  const phone = useRef()
  const rightTextDataIntegrity = useRef()
  const rightTextMoveIn = useRef()
  const rightTextPersonalizedPage = useRef()
  const rightTextFilteredAvailability = useRef()
  const rightTextTourType = useRef()
  const rightTextInstantSchedule = useRef()
  const rightTextCaptureDetails = useRef()
  const rightTextTourConfirmation = useRef()
  const rightTextCol = useRef()
  const topLogo = useRef()
  const header = useRef()
  const headerShadow = useRef()
  const heroSection = useRef()
  const main = useRef()
  const frame = useRef()
  const screen = useRef()
  const carousel = useRef()
  const headerSubText = useRef()
  const spacer = useRef()
  const overlay = useRef()
  const overlayTour = useRef()
  const calendar0 = useRef()
  const calendar1 = useRef()
  const property = useRef()
  const propertyBar = useRef()
  const availability = useRef()
  const leftTextWrapper = useRef()
  const markers = useRef()
  const demo = useRef()
  const propertyHeader = useRef()
  const whiteBgPropIntro = useRef()
  const status = useRef()
  const tourTypeSheet = useRef()
  const tourTypeSheet2 = useRef()
  const appointment1 = useRef()
  const appointment2 = useRef()
  const confirmDetails = useRef()
  const success = useRef()
  const sheetBg = useRef()



  const imgUrl = (device, number) => {
    return `/markers-${number}-${device}.png`
  }

  const [markerImage, setMarkerImage] = useState(imgUrl("desktop", 1))

  const [leftText, setLeftText] = useState("Search")


  function scheduleDemoClick() {
    console.log("click")
    gsap.to(window, { duration: 1, scrollTo: { y: demo.current, offsetY: 100, autoKill: true }, ease: "power3" })

    //this scrollTo function must force all scrollTriggers to end position (or something). maybe get their progress. or just add a fastScrollEnd to EACH scrolltrigger. so if scroll is happening super fast, then 
    // ScrollTrigger.config(
    //   {
    //     fastScrollEnd: 2000
    //   }
    // )

  }

  // use Velocity somehow

  const fastScrollEndValue = 3000

  useEffect(() => {

    // onLoad map Animation
    gsap.timeline({
    })
      .from(mapHero.current, {
        scale: 0,
        opacity: 0,
      })
      .from(phoneHero.current, {
        y: () => "+=" + phoneHero.current.getBoundingClientRect().height,
      })

    // hero > phone scroll down fade
    ScrollTrigger.create({
      fastScrollEnd: 1000,
      trigger: headerSubText.current,
      start: "top top+=10%",
      endTrigger: main.current,
      end: "center center",
      // duration: 1.2,
      ease: "power3.out",
      onEnter: () => {
        // possibly trigger timeline here
        gsap.timeline()
          .to(heroSection.current, {
            opacity: 0,
            onStart: () => console.log("heroSection fade out onStart")
          })
          .to(window, {
            duration: 0.5, scrollTo: { y: main.current, autoKill: false },
          }, "<")
          .to(main.current, {
            opacity: 1,
            duration: 1
          })
          .from(markers.current, {
            y: () => isDesktop() ? '+=10' : '+=5',
            opacity: 0,
            duration: 1
          }, "<25%")
          .to(cards.current, {
            display: 'block'
          }, "<50%")
          .from(cards.current, {
            y: () => isDesktop() ? "+=136" : "+=102",
            ease: "Power3.out"
          }, "<")
          .set(header.current, {
            opacity: () => !isDesktop() && 0
          })
      },
      // toggleActions: "play none none none",
    })



    // phone > hero / header scroll up tl

    gsap.timeline({
      scrollTrigger: {
        fastScrollEnd: 1000,
        trigger: rightTextCol.current,
        start: 'top top+=1',
        endTrigger: heroSection.current,
        end: "top top+=77",
        toggleActions: "none none play none",
        // preventOverlaps: true,
      },
    })
      .to(main.
        current, {
        opacity: 0,
        duration: 1,
        // ease: "power1.in"
      })
      .to(window, {
        duration: 1, scrollTo: {
          y: 0, autoKill: false
        }
      }, "<")
      .to(heroSection.current, {
        opacity: 1,
        duration: 1,
        // ease: "power4.out"
      })
      .to(header.current, {
        opacity: () => !isDesktop() && 1,
        duration: 1
      }, "<")

    // card swipe

    gsap.to(cards.current, {
      scrollTrigger: {
        trigger: rightTextDataIntegrity.current,
        start: 'top 90%', //
        end: '+=1',
        scrub: 2,
        ease: "power1.inOut",
        onEnter: () => setMarkerImage(imgUrl("desktop", 2)),
        onEnterBack: () => setMarkerImage(imgUrl("desktop", 1)),
      },
      x: () => isDesktop() ? '-315' : '-233',
    })

    gsap.to(cards.current, {
      scrollTrigger: {
        trigger: rightTextDataIntegrity.current,
        start: 'top 50%',
        end: '+=1',
        scrub: 2,
        ease: "power1.inOut",
        onEnter: () => setMarkerImage(imgUrl("desktop", 3)),
        onEnterBack: () => setMarkerImage(imgUrl("desktop", 2)),
      },
      x: () => isDesktop() ? '-=315' : '-=233'
    })


    // calendar
    gsap.timeline({
      scrollTrigger: {
        trigger: rightTextMoveIn.current,
        start: 'top bottom',
        endTrigger: rightTextPersonalizedPage.current,
        end: "top bottom+=10%",
        // toggleActions: 'play reverse play reverse',
        scrub: true,
      },
    })
      .to(leftTextWrapper.current, {
        onStart: () => setLeftText("Filter"),
        onReverseComplete: () => setLeftText("Search"),
        opacity: 100
      })
      .from(overlay.current, {
        opacity: 0,
      }, "<")
      .to(calendar0.current, {
        display: 'block'
      }, "<")
      .from(calendar0.current, {
        y: () => calendar0.current.getBoundingClientRect().height,
      }, "<")
      .to(calendar1.current, {
        display: 'block'
      })
      .to(calendar0.current, {
        display: 'none'
      })

    // probably move white bg fade into end of filter section (or move property trigger up)

    gsap.timeline({
      scrollTrigger: {
        trigger: rightTextPersonalizedPage.current,
        start: 'top bottom+=10%',
        endTrigger: rightTextTourType.current,
        end: "top bottom",
        // toggleActions: 'play reverse play reverse',
        scrub: true,
        // markers: { startColor: "purple", endColor: "purple" }
      },
    })
      .from(whiteBgPropIntro.current, {
        opacity: 0,
        duration: 0.3
      })
      .to(leftTextWrapper.current, {
        onStart: () => setLeftText("Property"),
        onReverseComplete: () => setLeftText("Filter"),
      }, "<30%")
      .from(property.current, {
        y: () => screen.current.getBoundingClientRect().height - status.current.getBoundingClientRect().height,
        duration: 0.3
      }, "<15%")

      .from(propertyBar.current, {
        y: screen.current.getBoundingClientRect().height,
        duration: 0.3
      }, "<5%")
      .to(property.current, {
        y: () => isDesktop() ? '-=235' : '-=174',
        // y: '-=235', // mobile -=174
        ease: "Power1.out",
        duration: 0.3
      }, ">30%")
      .set(propertyHeader.current, {
        display: 'block',
        duration: 5
      }, "<80%")
      .to(availability.current, {
        display: 'block'
      })

    gsap.timeline({
      scrollTrigger: {
        trigger: rightTextTourType.current,
        start: 'top bottom',
        endTrigger: rightTextInstantSchedule.current,
        end: "top bottom",
        // toggleActions: 'play reverse play reverse',
        scrub: true,
        // markers: true
      },
    })
      .to(leftTextWrapper.current, {
        onStart: () => setLeftText("Booking"),
        onReverseComplete: () => setLeftText("Property"),
      })
      .from(overlayTour.current, {
        opacity: 0,
      })
      .to(tourTypeSheet.current, {
        display: "block",
      }, "<")
      .to(sheetBg.current, {
        y: () => "-=" + tourTypeSheet.current.getBoundingClientRect().height,
        ease: "power1.out"
      }, ">")
      .set(tourTypeSheet.current, {
        opacity: 100
      }, "<")
      .from(tourTypeSheet.current, {
        y: () => tourTypeSheet.current.getBoundingClientRect().height,
        ease: "power1.out"
      }, "<")
      .to(tourTypeSheet2.current, {
        display: "block"
      }, ">25%")
      .set(tourTypeSheet.current, {
        display: "none",
        opacity: 0
      }, "<")

    let dx = (el1, el2, sign, log) => {
      let a = el1.getBoundingClientRect().height
      let b = el2.getBoundingClientRect().height
      let dx = b - a

      if (log) {
        console.log("el2", b)
        console.log("el1", a)
        console.log(b - a)
      }

      return `${sign}=${dx}`
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: rightTextInstantSchedule.current,
        start: 'top bottom',
        endTrigger: rightTextCaptureDetails.current,
        end: "top bottom",
        // toggleActions: 'play reverse play reverse',
        scrub: true,
        // markers: true
      },
    })
      .to(appointment1.current, {
        display: "block",
      })
      .to(sheetBg.current, {
        y: () => dx(appointment1.current, tourTypeSheet2.current, "+")
      }, "<")
      .to(tourTypeSheet2.current, {
        y: () => dx(appointment1.current, tourTypeSheet2.current, "+"),
        opacity: 0
      }, "<")
      .from(appointment1.current, {
        y: () => dx(appointment1.current, tourTypeSheet2.current, "-"),
        opacity: 0
      }, "<")
      .to(tourTypeSheet2.current, {
        display: "none"
      })
      .set(appointment2.current, {
        display: "block",
      }, ">90%")
      .set(appointment1.current, {
        display: "none",
      }, "<")



    gsap.timeline({
      scrollTrigger: {
        trigger: rightTextCaptureDetails.current,
        start: 'top bottom',
        endTrigger: rightTextTourConfirmation.current,
        end: 'top bottom',
        // toggleActions: 'play reverse play reverse',
        scrub: true,
        // markers: true
      },
    })
      .set(confirmDetails.current, {
        display: 'block',
      })
      .from(confirmDetails.current, {
        y: () => dx(confirmDetails.current, appointment2.current, "-"),
        opacity: 0
      })
      .to(appointment2.current, {
        y: () => dx(confirmDetails.current, appointment2.current, "+"),
        opacity: 0
      }, "<")
      .to(sheetBg.current, {
        y: () => dx(confirmDetails.current, appointment2.current, "+"),
      }, "<")
      .to(tourTypeSheet2.current, {
        display: "none"
      })
      .set(appointment2.current, {
        display: 'none',
      }, "<")


    gsap.timeline({
      scrollTrigger: {
        trigger: rightTextTourConfirmation.current,
        start: 'top bottom',
        // end: '1px',
        end: 'top center',
        // endTrigger: rightTextCol.current,
        // end: 'bottom bottom',
        // toggleActions: 'play pause reverse pause',
        scrub: true,
        // markers: true
      },
    })
      .to(confirmDetails.current, {
        y: () => "+=" + confirmDetails.current.getBoundingClientRect().height,
      })
      .to(sheetBg.current, {
        y: () => "+=" + confirmDetails.current.getBoundingClientRect().height
      }, "<")
      .to(success.current, {
        display: 'block',
      })
      .from(success.current, {
        opacity: 0
      }, "<")




    ScrollTrigger.matchMedia({

      // Desktop
      "(min-width: 800px)": function () {

        // header shadow desktop override only
        gsap.to(headerShadow.current, {
          opacity: 100,
          scrollTrigger: {
            trigger: topLogo.current,
            end: "+=300",
            // toggleActions: 'play reverse play reverse',
            scrub: true
          },
        })

      },

      // Mobile
      "(max-width: 799px)": function () {


      }
    })

  }, [])




  return (

    <div id='parent' className='scrollbar-hide font-[gilroy]'>
      <Head>
        <title>Resider</title>

      </Head>

      <header id="header" ref={header} className='bg-white py-[12px] w-full grid h-[78px] static lg:sticky top-0 z-20 pr-[16px] pl-[24px]'>
        <div className=" relative">
          <Image
            src={logo}
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>

        <div className="flex flex-row justify-end gap-[4px] col-start-2 row-start-1">

          <button className='block bg-resider-blue-primary rounded text-white align-center font-[600] text-[14px] leading-[20px] px-[16px] py-[14px] z-20' onClick={scheduleDemoClick}>Request A Demo</button>
        </div>
      </header>


      <div ref={headerShadow} className='shadow-[0_2px_4px_rgba(60,64,67,0.1)] w-full h-[78px] absolute lg:fixed top-0 z-10 opacity-0' />


      <div id='hero-section' ref={heroSection} className='flex flex-col place-items-center text-center'>

        <div className="relative aspect-square h-[36px] lg:h-[52px] mt-[28px] lg:mt-[12px]">
          <Image
            src={logoSquare}
            layout='fill'
            objectFit='fill'
          // priority
          // objectPosition='left'
          />
        </div>

        {/* <img src="/logo-square-mobile.svg" alt="logo-square-mobile" className='block lg:hidden  mt-[28px]' /> */}
        {/* h-[36px] */}

        {/* <img src="/logo-square-desktop.svg" alt="logo-square-desktop" className='hidden lg:block  mt-[12px]' /> */}
        {/* h-[52px] */}

        <h1 id="heroText" ref={heroText} className='mt-[24.49px] lg:mt-[24px] text-[rgba(60,64,67,1)] font-[700] text-[36px] lg:text-[72px] leading-[48px] lg:leading-[84px] tracking-[0.1px] max-w-[326px] lg:max-w-[639px]'>A <span className='text-[rgba(54,108,165,1)]'>better</span> way to generate leads</h1>

        <p id="heroSubText" ref={headerSubText} className='text-[rgba(96,99,103,1)] mt-[15.51px] lg:mt-[16px] font-[500] text-[18px] lg:text-[26px] leading-[30px] lg:leading-[38px] max-w-[326px] lg:max-w-[579px] mb-[24.9px] lg:mb-[24px]'>Resider is a smart, efficient and helpful way to qualify and schedule your prospective tenants.</p>

        <div id="phone-hero" className='grid justify-items-center justify-center rounded-br-full rounded-bl-full overflow-hidden'>

          <div ref={phoneHero} className='relative w-[303px] h-[303px] lg:w-[526px] lg:h-[526px] col-start-1 row-start-1 z-2'>
            <Image
              src={phoneHeroImgSquare}
              alt="phoneHeroImgSquare"
              layout="fill"
              objectFit='fill'
            // priority
            />
          </div>

          <div ref={mapHero} className='relative w-[303px] h-[303px] lg:w-[526px] lg:h-[526px] col-start-1 row-start-1 '>
            <Image
              src={map}
              alt='map'
              layout="fill"
              objectFit='fill'
            // priority
            />
          </div>

        </div>
      </div>


      <div id="gridContainer" className='grid grid-areas-mobile lg:grid-areas-desktop grid-cols-mobile lg:grid-cols-desktop grid-rows-mobile lg:grid-rows-desktop z-20'>

        <div id="phoneAndLeftText" ref={main} className='grid-in-left col-end-right grid grid-areas-mobile lg:grid-areas-desktop grid-cols-mobile lg:grid-cols-desktop grid-rows-mobile lg:grid-rows-desktop self-start  h-screen sticky left-0 top-0 opacity-0'>

          <div id="leftTextWrapper" ref={leftTextWrapper} className='hidden lg:block grid-in-left place-self-center text-[72px] font-[600] text-[rgba(60,64,67,1)]'>
            {leftText}
          </div>


          <div id="phone" ref={phone} className='grid-in-left lg:grid-in-middle place-self-center min-w-[274px] lg:min-w[370px] grid grid-areas-phone grid-cols-phoneMobile lg:grid-cols-phoneDesktop  grid-rows-phoneMobile lg:grid-rows-phoneDesktop rounded-[42px]  ml-[24px] lg:ml-0 frame-shadow'>

            <img id='frame' ref={frame} src="frame-hollow.svg" alt="frame" className=' w-full col-start-2 col-end-5 row-start-2 row-end-4  z-30' />

            <div id="screen" ref={screen} className="grid col-start-3 col-end-4 row-start-3 row-end-4  grid-areas-screen grid-cols-screenMobile lg:grid-cols-screenDesktop grid-rows-screenMobile lg:grid-rows-screenDesktop overflow-hidden rounded-[20px]  lg:rounded-[42px]  z-20">

              <img id="status-bar" ref={status} src="/status-bar-4x.png" alt="status-bar" className="z-20 grid-in-status self-start w-full opacity-100" />

              <div id="overlay" ref={overlayTour} className="bg-black opacity-50 grid-in-body z-15" />

              <img src="/success-4x.png" alt="success" id="success" ref={success} className="z-18 grid-in-body place-self-center max-w-[206.01px] lg:max-w-[278.19px] hidden" />

              <img src="/confirm-details-4x.png" alt="confirm-details" id="confirm-details" ref={confirmDetails} className="z-17 grid-in-body self-end w-full hidden" />

              <img src="/appointment-1-4x.png" alt="appointment1" id="appointment1" ref={appointment1} className="z-16 grid-in-body self-end w-full hidden" />

              <img src="/appointment-2-4x.png" alt="appointment-2" id="appointment2" ref={appointment2} className="z-16 grid-in-body self-end w-full hidden" />

              <div id="sheet-bg" ref={sheetBg} className='grid bg-white col-start-[-2]  self-end  z-15 shadow-[0_0.918124px_5.50874px_rgba(60,64,67,0.3)] h-[381.42px] lg:h-[515.07px] rounded-t-[5.44px] lg:rounded-t-[7.34px]'>
                <div id="handle" className='justify-self-center mt-[5.44px] lg:mt-[7.34px] rounded-full bg-[rgba(218,220,224,1)] w-[19.04px] h-[2.72px] lg:w-[25.71px] lg:h-[3.67px]' />
              </div>

              <img src="/tour-type-4x.png" alt="tour-type" id="tour-type" ref={tourTypeSheet} className="z-15 grid-in-body self-end w-full hidden opacity-0" />

              <img src="/tour-type-2-4x.png" alt="tour-type" id="tour-type" ref={tourTypeSheet2} className="z-15 grid-in-body self-end w-full hidden" />



              <div id="white-bg-prop-intro" ref={whiteBgPropIntro} className="bg-white grid-in-body z-11" />

              <img src="/availability-4x.png" alt="availability" id="availability" ref={availability} className="z-14 grid-in-body self-start w-full hidden" />

              <img src="/property-footer-4x.png" alt="property-bar" id="property-bar" ref={propertyBar} className="z-13 grid-in-body self-end w-full" />

              <img src="/property-header-4x.png" alt="property-header-4x" id="property-bar" ref={propertyHeader} className="z-13 grid-in-body self-start w-full hidden" />

              <img src="/property-4x.png" alt="property-page" id="property" ref={property} className="z-12 grid-in-body self-start w-full opacity-100" />

              <div id="overlay" ref={overlay} className="bg-black opacity-50 grid-in-body z-9" />


              <img src="/calendar-0-4x.png" alt="calendar0" id="calendar0" ref={calendar0} className="z-10 grid-in-body self-end w-full hidden" />

              <img src="calendar-1-4x.png" alt="calendar1" id="calendar1" ref={calendar1} className="z-10 grid-in-body self-end w-full hidden" />

              <div id="markers" ref={markers} className='grid-in-body self-end z-1'>
                <img src={markerImage} alt="markers-1-desktop" />

              </div>


              <img src="/search-filter-bar-4x.png" alt="search-filter"
                className='grid-in-body self-start z-2 w-full ' />


              <div id='carousel' ref={carousel} className=' grid-in-body justify-items-end self-end z-6 overflow-x-scroll scrollbar-hide snap-x h-28px'>

                <img src="/cards-4x-padded.png" ref={cards} alt="cards" className=' grid-in-body justify-self-start self-end z-6 min-w-[927.38px] lg:min-w-[1252.31px] overflow-visible' />

              </div>

              <img src="/home.svg" alt="home" className=' grid-in-body justify-self-center self-end pb-[5.23px] z-20 w-[91px] lg:w-[123px]' />


              <div className='relative grid-in-body'>
                <Image
                  src={mapImg}
                  alt="mapImg"
                  layout="fill"
                  objectFit="contain"
                  objectPosition="bottom"
                />
              </div>



            </div>

          </div>

        </div>

        <div id="rightTextCol" ref={rightTextCol} className='grid-in-right col-end-left lg:col-end-right flex flex-col gap-[70vh] lg:gap-[70vh]  z-10 w-fit min-w-[280px] lg:min-w-[404px] mr-[16px] lg:mr-[59px] place-items-start justify-self-end pt-[110vh]'>


          <div id='rightTextDataIntegrity' ref={rightTextDataIntegrity} className='bg-white lg:justify-self-end self-center lg:bg-transparent shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit mr-[16px] lg:mr-[59px] rounded-[8px]  flex flex-col gap-[8px] lg:gap-[16px] pl-[24px]  pr-[36px] lg:pr-[24px] pt-[36px] lg:pt-[32px] pb-[28px] lg:pb-[32px]'>

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Search</div>

            <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'>Data <span className='text-resider-blue-primary '>integrity</span></h1>
            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Resider solely consists of rental properties syndicated through data API’s. With up to date and accurate listings, your clients can browse with confidence.</p>

          </div>

          <div id='rightTextMoveIn' ref={rightTextMoveIn} className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px]'>

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Filter</div>

            <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'><span className='text-resider-blue-primary '>Move in</span> date</h1>
            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Qualified leads are our emphasis. Allowing users to narrow down exact availability by their move in date is the first step.</p>

          </div>

          {/* personalizedPage has padding-bottom, since more animations */}
          <div id='rightTextPersonalizedPage' ref={rightTextPersonalizedPage} className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px] '>

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Property</div>

            <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'><span className='text-resider-blue-primary '>Personalized</span> page</h1>
            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>With a beautiful display of your property,
              we highlight key aspects including
              parking, pet and utility info.</p>
          </div>


          <div id='rightTextFilteredAvailability' ref={rightTextFilteredAvailability} className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px]'>

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Property</div>

            <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'><span className='text-resider-blue-primary '>Filtered</span> availability</h1>

            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Grouped by floor plan, available units are based on the user’s filters to ensure eligible results, and qualified clients.</p>

          </div>


          <div id='rightTextTourType' ref={rightTextTourType} className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px]'>

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Booking</div>

            <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'><span className='text-resider-blue-primary '>Tour</span> type</h1>
            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Users are able to book an in-person tour, or a remote tour using Zoom.</p>
          </div>

          <div id='rightTextInstantSchedule' ref={rightTextInstantSchedule} className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px]'>

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Booking</div>

            <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'><span className='text-resider-blue-primary '>Instant</span> schedule</h1>
            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Through the RENTCafé platform, Resider syncs to your appointment calender and allows the user to instantly schedule an available tour.</p>
          </div>


          <div id='rightTextCaptureDetails' ref={rightTextCaptureDetails} className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px]'>

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Booking</div>

            <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'><span className='text-resider-blue-primary '>Capture</span> required details</h1>
            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Before successfully booking, users are instructed to fill in mandatory information vital to the lead qualifying process.</p>
          </div>

          <div id='rightTextTourConfirmation' ref={rightTextTourConfirmation} className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px]'>

            <div className="block lg:hidden text-[rgba(96,99,103,1)] font-bold text-[10px] tracking-[1.5px] leading-[10px] uppercase">Booking</div>

            <h1 className='text-[20px] lg:text-[34px] leading-[30px] lg:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1) font-[700]'><span className='text-resider-blue-primary '>Tour</span> confirmation</h1>
            <p className='text-[12px] lg:text-[18px] font-medium w-[232px] lg:w-[356px] text-[rgba(96,99,103,1)]'>Once a tour is booked, all captured information is logged as a guest card and stored in your RENTCafé CRM. </p>
          </div>

          <div className='h-[500px]' />

        </div>


      </div>


      <div id="demo" ref={demo} className='flex flex-col h-[1000px] self-center text-center justify-center pt-[20] lg:pt-[36] pl-[24px] pr-[32px]'>
        <h1 className=' font-bold text-[28px] lg:text-[48px]leading-[24px] text-[rgba(60,64,67,1)]'>Request a Demo</h1>
        <p className='text-[16px] text-[rgba(0,0,0,0.6)] leading-[24px] text-center'>Sign up to learn more about Resider.</p>
      </div>
      {/* <div className='grid grid-cols-[repeat(6, minmax(319px,527px))] grid-rows-[repeat(6,56px)] border-1'>
        <div className=''>test</div>
      </div> */}

    </div >



  )
}
