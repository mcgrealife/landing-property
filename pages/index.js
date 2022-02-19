import Head from 'next/head'
import Card from '../components/Card'
import Marker from '../components/Marker'
import Image from 'next/image'
import { useEffect, useImperativeHandle, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin"
// import { TextPlugin } from "gsap/dist/TextPlugin"
import logo from '../public/resider-logo.png'
import map from '../public/map-circle-4x.png'
import phoneHeroImg from '../public/phone-hero-img.png'
import phoneHeroImgSquare from '../public/phone-hero-img-square.png'
import mapImg from '../public/map-img-4x.png'
import calendarImg0 from '../public/calendar-0-4x.png'
import calendarImg1 from '../public/calendar-1-4x.png'


export default function Home() {

  const isDesktop = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 800) {
        return true
      } else {
        return false
      }
    } else console.log("not a window")
  }



  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

  function scheduleDemoClick() {

    // maybe conditional workround for pin

    gsap.to(window, { duration: 1, scrollTo: { y: demo.current, offsetY: 100, autoKill: true }, ease: "power3", invalidateOnRefresh: true })

  }


  // ScrollTrigger.create({
  //   trigger: rightTextDataIntegrity.current,
  //   animation: tlMainMobile,
  // })


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
  const headerShadow = useRef()
  const heroSection = useRef()
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
  const calendar0 = useRef()
  const calendar1 = useRef()
  const property = useRef() // svg shadow broken
  const propertyBar = useRef()
  const availability = useRef()
  const leftTextWrapper = useRef()
  const markers = useRef()
  const demo = useRef()
  const propertyHeader = useRef()
  const whiteBgPropIntro = useRef()
  const status = useRef()


  const imgUrl = (device, number) => {
    return `/markers-${number}-${device}.png`
  }

  const [markerImage, setMarkerImage] = useState(imgUrl("desktop", 1))

  const [leftText, setLeftText] = useState("Search")

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


    // onLoad Animation
    gsap.timeline({
      onStart: () => console.log("animation 'map intro' plays only once on page load/refresh")
    })
      .from(mapHero.current, {
        scale: 0,
        opacity: 0,
        // ease: "out",
      })
      .from(phoneHero.current, {
        y: () => "+=" + phoneHero.current.getBoundingClientRect().height,
        // ease: "out",
      })


    // hero outro fade
    let heroFade = gsap.timeline({
      scrollTrigger: {
        trigger: headerSubText.current,
        start: "top top",
        endTrigger: mapHero.current,
        end: "bottom top+=5%",
        scrub: true,
      }
    })
      .to(heroSection.current, {
        opacity: 0
      })





    function scrollToTop() {
      // getVelocity() to adjust ease in based on current velocity??
      gsap.to(window, { duration: 0.5, scrollTo: { y: 0, autoKill: true } })
      // ease: "power3.inOut"
    }

    function scrollToMain() {
      // getVelocity() to adjust ease in based on current velocity??
      gsap.to(window, { duration: 1, scrollTo: { y: main.current, autoKill: true }, ease: "Power2.in" })
      // ease: "power3.inOut"
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: headerSubText.current,
        start: "top top+=10%",
        endTrigger: main.current,
        end: "center center",
        onEnter: scrollToMain,
        // onEnterBack: scrollToTop,
        markers: true
      }
    })


    function vh(num) {
      if (typeof window !== "undefined") {
        return window.innerHeight * (num / 100)
      }
    }

    // desktop - map intro
    gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: 'center center',
        end: rightTextCol.current.getBoundingClientRect().height, // 100%
        pin: true,
        scrub: 2,
        toggleActions: "play pause play reverse",
      }
    })
      .to(main.current, {
        opacity: 100
      })



    ScrollTrigger.matchMedia({

      // Desktop
      "(min-width: 800px)": function () {

        // header shadow 
        gsap.to(headerShadow.current, {
          opacity: 100,
          scrollTrigger: {
            trigger: topLogo.current,
            end: "+=300",
            toggleActions: 'play reverse play reverse',
            scrub: true
          },
        })

        // desktop - card swipe
        gsap.to(cards.current, {
          scrollTrigger: {
            trigger: rightTextDataIntegrity.current,
            start: 'top 85%', //
            end: '+=1',
            scrub: 2,
            ease: "power1.inOut",
            onEnter: () => setMarkerImage(imgUrl("desktop", 2)),
            onEnterBack: () => setMarkerImage(imgUrl("desktop", 1)),
          },
          x: '-312',
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
          x: '-=312',
        })

        // desktop - leftText Search > Filter
        // gsap.to(leftTextWrapper.current, {
        //   scrollTrigger: {
        //     trigger: rightTextDataIntegrity.current,
        //     start: 'top top+=10%',
        //     end: '+=1px',
        //     markers: true,
        //     onEnter: () => setLeftText("Filter"),
        //     onEnterBack: () => setLeftText("Search")
        //   },
        // })

        // desktop - calendar
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextMoveIn.current,
            start: 'top bottom',
            endTrigger: rightTextPersonalizedPage.current,
            end: "top bottom",
            toggleActions: 'play reverse play reverse',
            scrub: true,
            markers: true,
          },
        })
          .to(leftTextWrapper.current, {
            opacity: 0,
          })
          .to(leftTextWrapper.current, {
            onStart: () => setLeftText("Filter"),
            onReverseComplete: () => setLeftText("Search"),
            opacity: 100
          })
          .from(overlay.current, {
            opacity: 0,
            duration: 1
          }, "+=100%")
          .from(calendar0.current, {
            y: () => calendar0.current.getBoundingClientRect().height,
          }, 0)
          .set(calendar1.current, {
            display: 'block'
          })
          .set(calendar0.current, {
            display: 'hidden'
          })





        // desktop - leftText Filter > Property
        // gsap.to(leftTextWrapper.current, {
        //   scrollTrigger: {
        //     trigger: rightTextMoveIn.current,
        //     start: 'top top+=10%',
        //     end: '+=1px',
        //     onEnter: () => setLeftText("Property"),
        //     onLeave: () => setLeftText("Filter"),
        //     markers: { startColor: "orange", endColor: "orange" }
        //   },
        // })


        // desktop - property
        // https://greensock.com/forums/topic/28674-what-do-tween-durations-mean-when-using-scrolltrigger/?do=findComment&comment=142241&_rid=110013
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextPersonalizedPage.current,
            start: 'top bottom',
            endTrigger: rightTextTourType.current,
            end: "top bottom",
            toggleActions: 'play reverse play reverse',
            scrub: true,
            // onEnter: () => setLeftText("Property"),
            // onLeave: () => setLeftText("Filter"),
            markers: { startColor: "purple", endColor: "purple" }
          },
        })
          .to(leftTextWrapper.current, {
            onStart: () => setLeftText("Property"),
            onReverseComplete: () => setLeftText("Filter"),
          })
          .from(whiteBgPropIntro.current, {
            opacity: 0,
          }, 0)
          .from(property.current, {
            y: () => screen.current.getBoundingClientRect().height - status.current.getBoundingClientRect().height,
          }, "<50%")
          .from(propertyBar.current, {
            y: screen.current.getBoundingClientRect().height,
          }, "<10%")
          .to(property.current, {
            y: '-=235',
            ease: "Power1.out",
          }, ">30%")
          .set(propertyHeader.current, {
            opacity: 100,
            duration: 1
          }, "<90%")
          .set(availability.current, {
            opacity: 100,
          }, ">200%")


        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextTourType.current,
            start: 'top bottom',
            endTrigger: rightTextCaptureDetails.current,
            end: "top bottom",
            toggleActions: 'play reverse play reverse',
            scrub: true,
          },
        })
          .to(leftTextWrapper.current, {
            onStart: () => setLeftText("Booking"),
            onReverseComplete: () => setLeftText("Property"),
          })


        // desktop - filteredAvailability 
        //   gsap.timeline({
        //     scrollTrigger: {
        //       trigger: rightTextFilteredAvailability.current,
        //       start: 'top 80%',
        //       end: '2000px',
        //       // ease: "power1.inOut",
        //       toggleActions: 'play reverse play reverse'
        //     },
        //   })
        //     // possible gsap.set
        //     .to(availability.current, {
        //       opacity: 100,
        //     })

      },



      // Mobile
      "(max-width: 799px)": function () {

        gsap.to(headerSubText.current, {
          scrollTrigger: {
            trigger: headerSubText.current,
            start: "top 15%",
            // markers: true,
            // onEnter: scrollToMain,
            // onLeaveBack: scrollToTop
          }

        })

        let tlMainMobile = gsap.timeline({
          scrollTrigger: {
            trigger: phone.current,
            start: 'top 15%',
            end: rightTextCol.current.getBoundingClientRect().height, // 100%
            // onEnter: scrollToMain,
            // onLeaveBack: scrollToTop,
            // probably onEnterBack function reverseIntro with smoother easing
            pin: true,
            // markers: true,
            toggleActions: "play pause play reverse"
          }
        })

          // mobile map-transition
          .from(phone.current, {
            width: '500px',
            x: "+=10%"
          })
          .from(screen.current, {
            height: '440px',
          })
          .from(markers.current, {
            y: "-=100"
          }, 0)
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
            width: '275px',
            height: '645px',
            borderRadius: '10px'
          }, 0)
          // .from(phone.current, {
          //   width: '303px'
          // }, 0)
          // .to(screen.current, {
          //   height: '552px'
          // }, 0)
          .to(wrapperMapMask.current, {
            width: '254px',
            height: '590px',
            ease: "power2",
          }, '<75%')
          // .from(spacer.current, {
          //   height: '0'
          // })

          .to(phone.current, {
            filter: 'drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0655718)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.055)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0444282)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.030926))',
          })
          .set(leftText.current, {
            opacity: 100
          }, '<50%') // duration 50 fades but causes background calculations for 50 seconds



        // mobile - card swipe
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextDataIntegrity.current,
            start: 'top 90%',
            end: '+=1',
            ease: "power1.inOut",
            scrub: 2,
            onEnter: () => setMarkerImage(imgUrl("mobile", 2)),
            onEnterBack: () => setMarkerImage(imgUrl("mobile", 1)),
          }
        })
          .to(cards.current, {
            x: '-224',
            ease: "power1.inOut",
          })


        gsap.to(cards.current, {
          scrollTrigger: {
            trigger: rightTextDataIntegrity.current,
            start: 'top 50%', // when it's 60% of the phone container. good use for a label?
            end: '+=1',
            scrub: 2,
            ease: "power1.inOut",
            onEnter: () => setMarkerImage(imgUrl("mobile", 3)),
            onEnterBack: () => setMarkerImage(imgUrl("mobile", 2)),
          },
          x: '-=224',
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
            end: "+=2000",
            // ease: "power1.inOut",
            toggleActions: 'play reverse play reverse'
          },
          // duration: "0.1"
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




      <header className='bg-white py-[12px] w-full grid h-[78px] static lg:sticky top-0 z-20 pr-[16px] pl-[24px]'>
        <div className=" relative">
          <Image
            src={logo}
            layout='fill'
            objectFit='contain'
            objectPosition='left'
          />
        </div>

        <div className="flex flex-row justify-end gap-[4px] col-start-2 row-start-1">

          <button className='block bg-resider-blue-primary rounded text-white align-center font-[600] text-[14px] leading-[20px] px-[16px] py-[14px]' onClick={scheduleDemoClick}>Request A Demo</button>
        </div>
      </header>


      <div ref={headerShadow} className='shadow-[0_2px_4px_rgba(60,64,67,0.1)] w-full h-[78px] absolute lg:fixed top-0 z-10 opacity-100 lg:opacity-0' />




      <div id='hero-section' ref={heroSection} className='flex flex-col place-items-center text-center'>

        <img src="/logo-square.svg" alt="logo-square" className='h-[36px] lg:h-[52px] mt-[28px] lg:mt-[12px]' />

        <h1 className='mt-[24.49px] lg:mt-[24px] text-[rgba(60,64,67,1)] font-[700] text-[36px] lg:text-[72px] leading-[48px] lg:leading-[84px] tracking-[0.1px] max-w-[326px] lg:max-w-[639px]'>A <span className='text-[rgba(54,108,165,1)]'>better</span> way to generate leads</h1>

        <p ref={headerSubText} className='text-[rgba(96,99,103,1)] mt-[15.15px] lg:mt-[16px] text-[18px] lg:text-[26px] leading-[30px] lg:leading-[38px] max-w-[326px] lg:max-w-[579px]'>Resider is a smart, efficient and helpful way to qualify and schedule your prospective tenants.</p>

        <div id="phone-hero" className='grid justify-items-center justify-center rounded-br-full rounded-bl-full overflow-hidden'>

          <div ref={phoneHero} className='relative w-[303px] h-[303px] lg:w-[526px] lg:h-[526px] col-start-1 row-start-1 z-2'>
            <Image
              src={phoneHeroImgSquare}
              alt="phoneHeroImgSquare"
              layout="fill"
              objectFit='fill'
              priority
            />
          </div>

          <div ref={mapHero} className='relative w-[303px] h-[303px] lg:w-[526px] lg:h-[526px] col-start-1 row-start-1 '>
            <Image
              src={map}
              alt='map'
              layout="fill"
              objectFit='fill'
              priority
            />
          </div>




        </div>


      </div>

      <div id="gridContainer" className='grid grid-areas-mobile lg:grid-areas-desktop grid-cols-mobile lg:grid-cols-desktop grid-rows-mobile lg:grid-rows-desktop z-20'>

        <div id="phoneAndLeftText" ref={main} className='grid-in-left col-end-right grid grid-areas-mobile lg:grid-areas-desktop grid-cols-mobile lg:grid-cols-desktop grid-rows-mobile lg:grid-rows-desktop self-start opacity-10 h-screen '>

          <div id="leftTextWrapper" ref={leftTextWrapper} className='grid-in-left place-self-center text-[72px] font-[600] text-[rgba(60,64,67,1)]'>
            {leftText}
          </div>


          <div id="phone" ref={phone} className='grid-in-left lg:grid-in-middle place-self-center min-w-[274px] lg:min-w[370px] grid grid-areas-phone grid-cols-phoneMobile lg:grid-cols-phoneDesktop  grid-rows-phoneMobile lg:grid-rows-phoneDesktop rounded-[42px]  ml-[24px] lg:ml-0 frame-shadow'>
            {/* row-start-1 row-end-6 col-start-1 col-end-6  */}



            <img id='frame' ref={frame} src="frame-hollow.svg" alt="frame" className=' w-full col-start-2 col-end-5 row-start-2 row-end-4  z-30' />

            <div id="screen" ref={screen} className="grid col-start-3 col-end-4 row-start-3 row-end-4  grid-areas-screen grid-cols-screenMobile lg:grid-cols-screenDesktop grid-rows-screenMobile lg:grid-rows-screenDesktop overflow-hidden rounded-[20px]  lg:rounded-[42px]  z-20">

              <img id="status-bar" ref={status} src="/status-bar-4x.png" alt="status-bar" className="z-20 grid-in-status self-start w-full opacity-100" />

              <div id="white-bg-prop-intro" ref={whiteBgPropIntro} className="bg-white grid-in-body opacity-100 z-11" />

              <img src="/availability-4x.png" alt="availability" id="availability" ref={availability} className="z-14 grid-in-body self-start w-full opacity-0" />

              <img src="/property-bar.svg" alt="property-bar" id="property-bar" ref={propertyBar} className="z-13 grid-in-body self-end w-full opacity-100" />

              <img src="/property-header-4x.png" alt="property-header-4x" id="property-bar" ref={propertyHeader} className="z-13 grid-in-body self-start w-full opacity-0" />

              <img src="/property-4x.png" alt="property-page" id="property" ref={property} className="z-12 grid-in-body self-start w-full opacity-1000" />

              <div id="overlay" ref={overlay} className="bg-black opacity-50 grid-in-body z-9" />


              {/* <div ref={calendar0} className='relative grid-in-body'>
                <Image
                  src={calendarImg0}
                  alt="calendarImg0"
                  layout='fill'
                  objectFit='cover'
                  objectPosition='bottom'
                />
              </div>


              <div id="calendar1" ref={calendar1} className='relative z-10 grid-in-body self-end w-full '>
                <Image
                  src={calendarImg1}
                  alt="calendarImg1"
                  layout="fill"
                  objectFit='fill'
                  objectPosition="bottom"
                />
              </div> */}

              <img src="/calendar-0-4x.png" alt="calendar0" id="calendar0" ref={calendar0} className="z-10 grid-in-body self-end w-full" />

              <img src="calendar-1-4x.png" alt="calendar1" id="calendar1" ref={calendar1} className="z-10 grid-in-body self-end w-full hidden" />

              <div id="markers" ref={markers} className='grid-in-body self-end z-1'>
                <img src={markerImage} alt="markers-1-desktop" />

              </div>

              {/* <div id='markers' className='flex grid-in-body z-4 place-self-center gap-4'>
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
              </div> */}

              <img src="/search-filter-bar-4x.png" alt="search-filter"
                className='grid-in-body self-start z-2 w-full ' />

              <div id='carousel' ref={carousel} className=' grid grid-in-body justify-items-end self-end z-6 pb-[17px] lg:pb-[28.5px] overflow-x-scroll scrollbar-hide snap-x  pt-2'>

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
          <div id='rightTextPersonalizedPage' ref={rightTextPersonalizedPage} className='grid-in-right col-end-left lg:col-end-right lg:justify-self-end self-center bg-white lg:bg-transparent  shadow-[0_1px_6px_rgba(60,64,67,0.24)] lg:shadow-none h-fit w-fit rounded-[8px] mr-[16px] lg:mr-[59px] z-10 flex flex-col gap-[8px] lg:gap-[16px] pl-[24px] pt-[36px] lg:pt-[32px] pr-[36px] lg:pr-[24px] pb-[28px] lg:pb-[32px] mb-[300px]'>

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

          <div className='h-1' />



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
