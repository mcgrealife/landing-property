import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
import logo from '../public/resider-logo.png'
import logoSquare from '../public/logo-square-4x.png'
import map from '../public/map-circle-4x.png'
import phoneHeroImgSquare from '../public/phone-hero-img-square.png'
import mapImg from '../public/map-img-4x.png'
import Card from '../components/Card'

export default function Home() {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

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
  const overlay = useRef()
  const overlayTour = useRef()
  const calendar0 = useRef()
  const calendar1 = useRef()
  const property = useRef()
  const propertyBar = useRef()
  const availability = useRef()
  const leftTextWrapper = useRef()
  const markers = useRef()
  const markersBase = useRef()
  const markersWrapper = useRef()
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
  const tabSelector = useRef()

  const isDesktop = () => {
    // workaround for next.js
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

  const imgUrl = (device, number) => {
    return `/markers-${number}-${device}.png`
  }
  const [markerImage, setMarkerImage] = useState(imgUrl("desktop", 1))
  const [leftText, setLeftText] = useState("Search")
  const rightTextBoxStyle = 'bg-white md:justify-self-end self-center  lg:bg-transparent shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit  rounded-[8px]  flex flex-col gap-[8px] md:gap-[16px] pl-[24px]  pr-[24px] md:pr-[24px] pt-[36px] md:pt-[32px] pb-[28px] md:pb-[32px]'
  const rightTextSuperTitleStyle = 'block md:hidden text-[rgba(96,99,103,1)] font-[700] text-[10px] tracking-[1.5px] leading-[10px] uppercase'
  const rightTextTitleStyle = 'text-[20px] md:text-[36px] leading-[30px] md:leading-[48px] tracking-[0.1px] text-[rgba(60,64,67,1)] font-[700]'
  const rightTextBodyStyle = 'text-[12px] md:text-[18px] font-[500] leading-[20px] md:leading-[32px] w-[232px] md:w-[356px] text-[rgba(96,99,103,1)] liga-off '

  const textFieldFlexStyle = 'flex flex-wrap justify-center gap-x-[18px] md:mx-[184px] ml-[24px] mr-[32px]'
  const textFieldStyle = 'border rounded-[4px] border-[rgba(218,220,224,1)] min-w-[319px] md:max-w-[527px] mb-[16px] md:mb-[28px] w-full h-[56px] text-left  text-[16px] font-[roboto] font-[400] leading - [24px] text - [rgba(0, 0, 0, 0.6)] py - [16px] pl - [16px]'

  const scheduleDemoClick = () => {
    gsap.to(window, { id: "longScroll", duration: 1, scrollTo: { y: demo.current, offsetY: 100, autoKill: true }, ease: "power3" })
  }

  useEffect(() => {

    ScrollTrigger.defaults({
      // preventOverlaps: true
      // fastScrollEnd: 5000
    })

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


    // Scroll down from Section-1 to phone 
    let tlDown = gsap.timeline({
      id: "tlDown",
      scrollTrigger: {
        id: "down",
        trigger: headerSubText.current,
        start: "top top+=10%",
        endTrigger: main.current,
        end: "center center",
        ease: "power3.out",
        toggleActions: "play none none none",
        fastScrollEnd: 1000,
        onEnter: () => {
          gsap.timeline({
            onStart: () => console.log("tlDOWN onEnter")
          })
            .to(heroSection.current, {
              opacity: 0,
            })
            .to(window, {
              id: "scrollTweenDown",
              duration: 0.5, scrollTo: { y: main.current, autoKill: () => gsap.getById("longScroll") == undefined ? false : true },
            }, "<")
            .set(header.current, {
              opacity: () => !isDesktop() && 0
            })
            .to(main.current, {
              opacity: 1,
              duration: 0.5
            })
            .from(markersWrapper.current, {
              y: () => isDesktop() ? '+=10' : '+=5',
              opacity: 0,
              // duration: 1,
            }, "<25%")
            .from(cards.current, {
              y: () => isDesktop() ? "+=136" : "+=102",
              ease: "Power3.out"
            }, "<10%")
        },
      },
    })

    // Scroll up from Phone to Section-1
    gsap.timeline({
      scrollTrigger: {
        id: "up",
        trigger: rightTextCol.current,
        start: 'top top+=1',
        endTrigger: heroSection.current,
        end: "top top+=77",
        toggleActions: "none none play none",
        // fastScrollEnd: 1000,
        onEnterBack: () => {
          gsap.timeline({
            onStart: () => console.log("tlUP onEnterBack")
          })
            .to(main.
              current, {
              opacity: 0,
              duration: 1,
            })
            .to(window, {
              id: "scrollTweenUp",
              duration: 1, scrollTo: {
                y: 0, autoKill: () => gsap.getById("longScroll") == undefined ? false : true
              }
            }, "<")
            .to(heroSection.current, {
              opacity: 1,
              duration: 1,
            })
            .to(header.current, {
              opacity: () => !isDesktop() && 1,
              duration: 1
            }, "<")
        },
      },
    })


    // card swipe 1
    gsap.to(cards.current, {
      scrollTrigger: {
        trigger: rightTextDataIntegrity.current,
        start: 'top 90%',
        end: '+=1',
        // scrub: true,
        // ease: "power1.inOut",
        onEnter: () => setMarkerImage(imgUrl("desktop", 2)),
        onEnterBack: () => setMarkerImage(imgUrl("desktop", 1)),
        toggleActions: "play none reverse none",
        ease: "power3.inOut"
      },
      x: () => isDesktop() ? '-=310' : '-=233',
    })
    // card swipe 2
    gsap.to(cards.current, {
      scrollTrigger: {
        trigger: rightTextDataIntegrity.current,
        start: 'top 40%',
        end: '+=1',
        // scrub: true,
        // ease: "power1.inOut",
        onEnter: () => setMarkerImage(imgUrl("desktop", 3)),
        onEnterBack: () => setMarkerImage(imgUrl("desktop", 2)),
        toggleActions: "play none reverse none",
        ease: "power3.inOut",
      },
      x: () => isDesktop() ? '-=310' : '-=233'
    })


    // calendar
    gsap.timeline({
      scrollTrigger: {
        trigger: rightTextMoveIn.current,
        start: 'top bottom+=10%',
        endTrigger: rightTextPersonalizedPage.current,
        end: "top bottom+=10%",
        // toggleActions: 'play reverse play reverse',
        scrub: true,
      },
    })
      .to(leftTextWrapper.current, {
        opacity: 0,
        duration: 0.1
      })
      .to(leftTextWrapper.current, {
        onStart: () => setLeftText("Filter"),
        onReverseComplete: () => setLeftText("Search"),
        opacity: 1,
        duration: 0.1
      })
      .from(overlay.current, {
        opacity: 0,
      })
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
        start: 'top bottom+=20%',
        endTrigger: rightTextTourType.current,
        end: "top bottom",
        // toggleActions: 'play reverse play reverse',
        scrub: true,
        // markers: { startColor: "purple", endColor: "purple" }
      },
    })

      .to(leftTextWrapper.current, {
        opacity: 0,
        duration: 0.1
      })
      .to(leftTextWrapper.current, {
        onStart: () => setLeftText("Property"),
        onReverseComplete: () => setLeftText("Filter"),
        opacity: 1,
        duration: 0.1
      }, "<")
      .from(whiteBgPropIntro.current, {
        opacity: 0,
        duration: 0.2
      }, "<")
      .from(property.current, {
        y: () => screen.current.getBoundingClientRect().height - status.current.getBoundingClientRect().height,
        duration: 0.3
      }, "<50%")
      .from(propertyBar.current, {
        y: screen.current.getBoundingClientRect().height,
        duration: 0.3
      }, "<5%")
      .to(property.current, {
        y: () => isDesktop() ? '-=235' : '-=174',
        // y: '-=235', // mobile -=174
        ease: "Power1.out",
        duration: 0.2
      }, ">20%")
      .set(propertyHeader.current, {
        display: 'block',
        duration: 5
      }, "<80%")
      .to(tabSelector.current, {
        x: () => isDesktop() ? "+=149.65" : '+=110.83',
        width: () => isDesktop() ? '+=10.09' : '+=7.48',
        ease: "power3.inOut",
        duration: 0.2
      })
      .to(availability.current, {
        display: 'block'
      }, ">")

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
        opacity: 0,
        duration: 0.1
      })
      .to(leftTextWrapper.current, {
        onStart: () => setLeftText("Booking"),
        onReverseComplete: () => setLeftText("Property"),
        opacity: 1,
        duration: 0.1
      })
      .from(overlayTour.current, {
        opacity: 0,
        duration: 0.2
      })
      .to(tourTypeSheet.current, {
        display: "block",
      }, "<")
      .to(sheetBg.current, {
        y: () => "-=" + tourTypeSheet.current.getBoundingClientRect().height,
        ease: "power1.out",
        duration: 0.2
      }, "<")
      .from(tourTypeSheet.current, {
        y: () => tourTypeSheet.current.getBoundingClientRect().height,
        ease: "power1.out",
        duration: 0.2
      }, "<")
      .to(tourTypeSheet2.current, {
        display: "block"
      }, ">25%")

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
        y: () => dx(appointment1.current, tourTypeSheet2.current, "+"),
      }, "<")
      .from(appointment1.current, {
        y: () => dx(appointment1.current, tourTypeSheet2.current, "-"),
        opacity: 0,
      }, "<")
      .to(tourTypeSheet.current, {
        y: () => dx(appointment1.current, tourTypeSheet2.current, "+"),
        opacity: 0,
        display: "none"
      }, "<")
      .to(tourTypeSheet2.current, {
        y: () => dx(appointment1.current, tourTypeSheet2.current, "+"),
        opacity: 0,
        display: "none"
      }, "<")
      .to(appointment2.current, {
        display: "block",
      }, ">70%")



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
        y: () => dx(confirmDetails.current, appointment1.current, "-"),
        opacity: 0,
        // duration: 0.5
      })
      .to(appointment2.current, {
        y: () => dx(confirmDetails.current, appointment1.current, "+"),
        opacity: 0
      }, "<")
      .to(appointment1.current, {
        y: () => dx(confirmDetails.current, appointment1.current, "+"),
        opacity: 0
      }, "<")
      .to(sheetBg.current, {
        y: () => dx(confirmDetails.current, appointment1.current, "+"),
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
      },
    })
      .to(confirmDetails.current, {
        y: () => "+=" + confirmDetails.current.getBoundingClientRect().height,
        duration: 0.5
      })
      .to(sheetBg.current, {
        y: () => "+=" + confirmDetails.current.getBoundingClientRect().height
      }, "<")
      .to(success.current, {
        display: 'block',
      })
      .from(success.current, {
        opacity: 0,
        duration: 0.3
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

      <header id="header" ref={header} className='bg-white py-[12px] w-full grid h-[78px] static md:sticky top-0 z-20 pr-[16px] pl-[24px]'>
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


      <div ref={headerShadow} className='shadow-[0_2px_4px_rgba(60,64,67,0.1)] w-full h-[78px] absolute md:fixed top-0 z-10 opacity-0' />


      <div id='hero-section' ref={heroSection} className='flex flex-col place-items-center text-center'>

        <div className="relative aspect-square h-[36px] md:h-[52px] mt-[28px] md:mt-[12px]">
          <Image
            src={logoSquare}
            layout='fill'
            objectFit='fill'
          // priority
          // objectPosition='left'
          />
        </div>

        {/* <img src="/logo-square-mobile.svg" alt="logo-square-mobile" className='block md:hidden  mt-[28px]' /> */}
        {/* h-[36px] */}

        {/* <img src="/logo-square-desktop.svg" alt="logo-square-desktop" className='hidden md:block  mt-[12px]' /> */}
        {/* h-[52px] */}

        <h1 id="heroText" ref={heroText} className='mt-[24.49px] md:mt-[24px] text-[rgba(60,64,67,1)] font-[700] text-[36px] md:text-[72px] leading-[48px] md:leading-[84px] tracking-[0.1px] max-w-[326px] md:max-w-[639px]'>A <span className='text-[rgba(54,108,165,1)]'>better</span> way to generate leads</h1>

        <p id="heroSubText" ref={headerSubText} className='text-[rgba(96,99,103,1)] mt-[15.51px] md:mt-[16px] font-[500] text-[18px] md:text-[26px] leading-[30px] md:leading-[38px] max-w-[326px] md:max-w-[575px] mb-[24.9px] md:mb-[24px] liga-off'>Resider is a smart, efficient and helpful way to qualify and schedule your prospective tenants.</p>

        <div id="phone-hero" className='grid justify-items-center justify-center rounded-br-full rounded-bl-full overflow-hidden'>

          <div ref={phoneHero} className='relative w-[303px] h-[303px] md:w-[526px] md:h-[526px] col-start-1 row-start-1 z-2'>
            <Image
              src={phoneHeroImgSquare}
              alt="phoneHeroImgSquare"
              layout="fill"
              objectFit='fill'
            // priority
            />
          </div>

          <div ref={mapHero} className='relative w-[303px] h-[303px] md:w-[526px] md:h-[526px] col-start-1 row-start-1 '>
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


      <div id="gridContainer" className='grid grid-areas-mobile md:grid-areas-desktop grid-cols-mobile md:grid-cols-desktop grid-rows-mobile md:grid-rows-desktop z-20'>

        <div id="phoneAndLeftText" ref={main} className='grid-in-left col-end-right grid grid-areas-mobile md:grid-areas-desktop grid-cols-mobile md:grid-cols-desktop grid-rows-mobile md:grid-rows-desktop self-start  h-screen sticky left-0 top-0 opacity-0'>

          <div id="leftTextWrapper" ref={leftTextWrapper} className='hidden md:block grid-in-left place-self-center text-[72px] font-[600] text-[rgba(60,64,67,1)]'>
            {leftText}
          </div>


          <div id="phone" ref={phone} className='grid-in-left md:grid-in-middle place-self-center min-w-[274px] md:min-w[370px] grid grid-areas-phone grid-cols-phoneMobile md:grid-cols-phoneDesktop  grid-rows-phoneMobile md:grid-rows-phoneDesktop rounded-[42px]  ml-[24px] md:ml-0 frame-shadow'>

            <img id='frame' ref={frame} src="frame-hollow.svg" alt="frame" className=' w-full col-start-2 col-end-5 row-start-2 row-end-4  z-30' />

            <div id="screen" ref={screen} className="grid col-start-3 col-end-4 row-start-3 row-end-4  grid-areas-screen grid-cols-screenMobile md:grid-cols-screenDesktop grid-rows-screenMobile md:grid-rows-screenDesktop overflow-hidden rounded-[20px]  md:rounded-[42px]  z-20">

              <img id="status-bar" ref={status} src="/status-bar-4x.png" alt="status-bar" className="z-20 grid-in-status self-start w-full opacity-100" />

              <div id="overlay" ref={overlayTour} className="bg-black opacity-50 grid-in-body z-15" />

              <img src="/success-4x.png" alt="success" id="success" ref={success} className="z-18 grid-in-body place-self-center max-w-[206.01px] md:max-w-[278.19px] hidden" />

              <img src="/confirm-details-4x.png" alt="confirm-details" id="confirm-details" ref={confirmDetails} className="z-17 grid-in-body self-end w-full hidden" />

              <img src="/appointment-1-4x.png" alt="appointment1" id="appointment1" ref={appointment1} className="z-16 grid-in-body self-end w-full hidden" />

              <img src="/appointment-2-chopped-4x.png" alt="appointment-2" id="appointment2" ref={appointment2} className="z-16 grid-in-body self-end w-full hidden" />

              <div id="sheet-bg" ref={sheetBg} className='grid bg-white col-start-[-2]  self-end  z-15 shadow-[0_0.918124px_5.50874px_rgba(60,64,67,0.3)] h-[381.42px] md:h-[515.07px] rounded-t-[5.44px] md:rounded-t-[7.34px]'>
                <div id="handle" className='justify-self-center mt-[5.44px] md:mt-[7.34px] rounded-full bg-[rgba(218,220,224,1)] w-[19.04px] h-[2.72px] md:w-[25.71px] md:h-[3.67px]' />
              </div>

              <img src="/tour-type-4x.png" alt="tour-type" id="tour-type" ref={tourTypeSheet} className="z-15 grid-in-body self-end w-full hidden " />

              <img src="/tour-type-2-chopped-4x.png" alt="tour-type" id="tour-type" ref={tourTypeSheet2} className="z-15 grid-in-body self-end w-full hidden" />



              <div id="white-bg-prop-intro" ref={whiteBgPropIntro} className="bg-white grid-in-body z-11" />

              <img src="/availability-4x.png" alt="availability" id="availability" ref={availability} className="z-14 grid-in-body self-start w-full hidden" />

              <img src="/property-footer-4x.png" alt="property-bar" id="property-bar" ref={propertyBar} className="z-13 grid-in-body self-end w-full" />

              <img src="/property-header-4x.png" alt="property-header-4x" id="property-bar" ref={propertyHeader} className="z-13 grid-in-body self-start w-full hidden" />


              <div ref={property} className="z-12 grid-in-body self-start w-full opacity-100 grid">
                <div id="tabSelector" ref={tabSelector} className="bg-resider-blue-primary h-[2.04px] md:h-[2.75px] w-[41.47px] md:w-[56.01px] rounded-t-[9px] md:rounded-t-full row-start-1 col-start-1 z-2 mt-[236.2px] md:mt-[318.8px] ml-[47.59px] md:ml-[64.27px] overflow-hidden" />

                <img src="/property-4x.png" alt="property-page" id="property" className='row-start-1 col-start-1 w-fit' />
              </div>

              <div id="overlay" ref={overlay} className="bg-black opacity-50 grid-in-body z-9" />


              <img src="/calendar-0-4x.png" alt="calendar0" id="calendar0" ref={calendar0} className="z-10 grid-in-body self-end w-full hidden" />

              <img src="calendar-1-4x.png" alt="calendar1" id="calendar1" ref={calendar1} className="z-10 grid-in-body self-end w-full hidden" />

              <div id="markersWrapper" ref={markersWrapper} className='grid-in-body self-start z-1 mt-[89.25px] md:mt-[123.79px]'>
                <div id="markers" ref={markers}>
                  <img src={markerImage} alt="markers-1-desktop" />
                </div>
                <div id="markersBase" ref={markersBase} >
                  <img src={imgUrl("desktop", 0)} alt="markers-1-desktop" />
                </div>

              </div>




              <img src="/search-filter-bar-4x.png" alt="search-filter"
                className='grid-in-body self-start z-2 w-full ' />


              <div id='carousel' ref={carousel} className='col-start-1 row-start-2 justify-items-end self-end z-6 overflow-x-scroll snap-x scrollbar-hide h-28px ' >
                <div ref={cards} className='flex flex-row gap-2 min-w-max pb-[17px] md:pb-[22.95px] pl-[13.6px] md:pl-[18.36px] pt-2'>
                  <Card num="1" />
                  <Card num="2" />
                  <Card num="3" />
                  <Card num="4" />
                </div>
              </div>


              <img src="/home.svg" alt="home" className=' grid-in-body justify-self-center self-end pb-[5.23px] z-20 w-[91px] md:w-[123px]' />


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

        <div id="rightTextCol" ref={rightTextCol} className='grid-in-right col-end-left md:col-end-right flex flex-col gap-[110vh] md:gap-[110vh] z-10 w-fit min-w-[280px] md:min-w-[404px] mr-[16px] md:mr-0 xl:mr-[59px] place-items-start justify-self-end md:justify-self-center lg:justify-self-end pt-[110vh]'>


          <div id='rightTextDataIntegrity' ref={rightTextDataIntegrity} className={rightTextBoxStyle}>

            <div className={rightTextSuperTitleStyle}>Search</div>

            <h1 className={rightTextTitleStyle}>Data <span className='text-resider-blue-primary '>integrity</span></h1>
            <p className={rightTextBodyStyle}>Resider solely consists of rental properties syndicated through data API’s. With up to date and accurate listings, your clients can browse with confidence.</p>

          </div>

          <div id='rightTextMoveIn' ref={rightTextMoveIn} className={rightTextBoxStyle}>

            <div className={rightTextSuperTitleStyle}>Filter</div>

            <h1 className={rightTextTitleStyle}><span className='text-resider-blue-primary '>Move in</span> date</h1>
            <p className={rightTextBodyStyle}>Qualified leads are our emphasis. Allowing users to narrow down exact availability by their move in date is the first step.</p>

          </div>

          {/* personalizedPage has padding-bottom, since more animations 
          // pb-[28px] md:pb-[32px]
          */}
          <div id='rightTextPersonalizedPage' ref={rightTextPersonalizedPage} className={rightTextBoxStyle}>

            <div className={rightTextSuperTitleStyle}>Property</div>

            <h1 className={rightTextTitleStyle}><span className='text-resider-blue-primary '>Personalized</span> page</h1>
            <p className={rightTextBodyStyle}>With a beautiful display of your property,
              we highlight key aspects including
              parking, pet and utility info.</p>
          </div>


          <div id='rightTextFilteredAvailability' ref={rightTextFilteredAvailability} className={rightTextBoxStyle}>

            <div className={rightTextSuperTitleStyle}>Property</div>

            <h1 className={rightTextTitleStyle}><span className='text-resider-blue-primary '>Filtered</span> availability</h1>

            <p className={rightTextBodyStyle}>Grouped by floor plan, available units are based on the user’s filters to ensure eligible results, and qualified clients.</p>

          </div>


          <div id='rightTextTourType' ref={rightTextTourType} className={rightTextBoxStyle}>

            <div className={rightTextSuperTitleStyle}>Booking</div>

            <h1 className={rightTextTitleStyle}><span className='text-resider-blue-primary '>Tour</span> type</h1>
            <p className={rightTextBodyStyle}>Users are able to book an in-person tour, or a remote tour using Zoom.</p>
          </div>

          <div id='rightTextInstantSchedule' ref={rightTextInstantSchedule} className={rightTextBoxStyle}>

            <div className={rightTextSuperTitleStyle}>Booking</div>

            <h1 className={rightTextTitleStyle}><span className='text-resider-blue-primary '>Instant</span> schedule</h1>
            <p className={rightTextBodyStyle}>Through the RENTCafé platform, Resider syncs to your appointment calender and allows the user to instantly schedule an available tour.</p>
          </div>


          <div id='rightTextCaptureDetails' ref={rightTextCaptureDetails} className={rightTextBoxStyle}>

            <div className={rightTextSuperTitleStyle}>Booking</div>

            <h1 className={rightTextTitleStyle}><span className='text-resider-blue-primary '>Capture</span> required details</h1>
            <p className={rightTextBodyStyle}>Before successfully booking, users are instructed to fill in mandatory information vital to the lead qualifying process.</p>
          </div>

          <div id='rightTextTourConfirmation' ref={rightTextTourConfirmation} className={rightTextBoxStyle}>

            <div className={rightTextSuperTitleStyle}>Booking</div>

            <h1 className={rightTextTitleStyle}><span className='text-resider-blue-primary '>Tour</span> confirmation</h1>
            <p className={rightTextBodyStyle}>Once a tour is booked, all captured information is logged as a guest card and stored in your RENTCafé CRM. </p>
          </div>

          <div className='h-[500px]' />

        </div>


      </div >


      <div id="demo" ref={demo} className='flex flex-col  self-center text-center justify-center pt-[2px] md:pt-[178px]  pb-[32px] md:pb-[82px] gap:[16px] md:gap-[18px]'>
        <h1 className=' font-[500] text-[28px] md:text-[48px] leading-[36px] md:leading-[56px] text-[rgba(60,64,67,1)]'>Request a Demo</h1>
        <p className='text-[16px] text-[rgba(0,0,0,0.6)] leading-[24px] text-center font-[400]'>Sign up to learn more about Resider.</p>
      </div>
      <div className={textFieldFlexStyle}>
        <div className={textFieldStyle}>Full name *</div>
        <div className={textFieldStyle}>Property name *</div>
        <div className={textFieldStyle}>Work Email *</div>
        <div className={textFieldStyle}>Property management company *</div>
        <div className={textFieldStyle}>Phone number *</div>
        <div className={textFieldStyle}>Property size</div>
      </div>

    </div >



  )
}
