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


export default function Home() {


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
  const calendar = useRef()
  const property = useRef() // svg shadow broken
  const propertyBar = useRef()
  const availability = useRef()
  const leftTextWrapper = useRef()
  const markers = useRef()
  const demo = useRef()


  const imgUrl = (device, number) => {
    return `/markers-${number}-${device}.svg`
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


    function scrollToMain() {
      gsap.to(window, { duration: 1, scrollTo: { y: main.current, offsetY: 100, autoKill: true }, ease: "power3", invalidateOnRefresh: true })
    }

    function scrollToTop() {
      gsap.to(window, { duration: 1, scrollTo: { y: 0, autoKill: true }, ease: "power3" })
    }


    // dynamic for mobile, probably move to MatchMedia. or use computed values
    gsap.to(headerShadow.current, {
      opacity: 100,
      scrollTrigger: {
        trigger: topLogo.current,
        end: "+=300",
        toggleActions: 'play reverse play reverse',
        scrub: true
      }
    })


    // onLoad Animation
    gsap.timeline({
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



    // // scrollToSubHeaderTransitionToMain
    // gsap.to(headerSubText.current, {
    //   scrollTrigger: {
    //     trigger: headerSubText.current,
    //     start: "top 15%",
    //     onEnter: () => gsap.to(window, { duration: 1, scrollTo: { y: main.current, offsetY: 110, autoKill: true }, ease: "power3" }),
    //     onLeaveBack: scrollToTop,
    //     // markers: true,
    //     // invalidateOnRefresh: true,
    //   },
    //   opacity: 100
    // })


    // hero outro fade
    gsap.timeline({
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

    ScrollTrigger.matchMedia({

      // Desktop
      "(min-width: 800px)": function () {

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
          .set(leftTextWrapper.current, {
            opacity: 100
          }, "<10%")


        // desktop - card swipe
        gsap.to(cards.current, {
          scrollTrigger: {
            trigger: rightTextDataIntegrity.current,
            start: 'top 60%', // when it's 60% of the phone container. good use for a label?
            end: '+=1',
            scrub: 2,
            ease: "power1.inOut",
            onEnter: () => setMarkerImage(imgUrl("desktop", 2)),
            onEnterBack: () => setMarkerImage(imgUrl("desktop", 1)),
          },
          x: '-312',
          ease: "power1.inOut",
        })

        gsap.to(cards.current, {
          scrollTrigger: {
            trigger: rightTextDataIntegrity.current,
            start: 'top 40%', // when it's 60% of the phone container. good use for a label?
            end: '+=1',
            scrub: 2,
            ease: "power1.inOut",
            onEnter: () => setMarkerImage(imgUrl("desktop", 3)),
            onEnterBack: () => setMarkerImage(imgUrl("desktop", 2)),
            // markers: true
          },
          x: '-=312',
          ease: "power1.inOut",
        })

        // desktop - leftText Search > Filter
        gsap.to(leftTextWrapper.current, {
          scrollTrigger: {
            trigger: rightTextDataIntegrity.current,
            start: 'bottom top',
            // markers: true,
            onEnter: () => setLeftText("Filter"),
            onEnterBack: () => setLeftText("Search")
          },

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
          }, 1)
          .from(calendar.current, {
            y: '+456',
            ease: "power1.inOut",
            duration: 0.5
          }, 1)

        // desktop - leftText Filter > Property
        gsap.to(leftTextWrapper.current, {
          scrollTrigger: {
            trigger: rightTextMoveIn.current,
            start: 'bottom top',
            // markers: true,
            onEnter: () => setLeftText("Property"),
            onEnterBack: () => setLeftText("Filter")
          },

        })

        // desktop - property 
        gsap.timeline({
          scrollTrigger: {
            trigger: rightTextPersonalizedPage.current,
            start: 'top bottom',
            end: '2000px',
            // ease: "power1.inOut",
            toggleActions: 'play reverse play reverse'
          },
          duration: "0.1"
        })
          .from(propertyBar.current, {
            opacity: 0,
          })
          .from(property.current, {
            opacity: 0,
          }, 0)



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


      <header className='bg-white py-[12px] w-full grid h-[78px] sticky top-0 z-20 pr-[16px] pl-[24px]'>
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


      <div ref={headerShadow} className='shadow-[0_2px_4px_rgba(60,64,67,0.1)] w-full grid h-[78px] fixed top-0 z-10 opacity-0' />

      <div id='hero-section' ref={heroSection} className='flex flex-col place-items-center text-center'>

        <img src="/logo-square.svg" alt="logo-square" className='h-[36px] lg:h-[52px] mt-[12px]' />

        <h1 className='mt-[24.49px] lg:mt-[24px] text-[rgba(60,64,67,1)] font-[700] text-[36px] lg:text-[72px] leading-[48px] lg:leading-[84px] tracking-[0.1px] max-w-[326px] lg:max-w-[639px]'>A <span className='text-[rgba(54,108,165,1)]'>better</span> way to generate leads</h1>

        <p ref={headerSubText} className='text-[rgba(96,99,103,1)] mt-[15.15px] lg:mt-[16px] text-[18px] lg:text-[26px] leading-[30px] lg:leading-[38px] max-w-[326px] lg:max-w-[579px]'>Resider is a smart, efficient and helpful way to qualify and schedule your prospective tenants.</p>

        <div id="phone-hero" className='grid justify-items-center justify-center rounded-br-full rounded-bl-full overflow-hidden'>
          {/* <img src="/phone-hero.svg" alt="phone-hero" 
        className='align-end row-start-1 col-start-1 z-2 w-full' /> */}

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

      <div id='spacer' className='h-[100px]' />

      <div id="gridContainer" className='grid grid-areas-mobile lg:grid-areas-desktop grid-cols-mobile lg:grid-cols-desktop grid-rows-mobile lg:grid-rows-desktop z-20'>

        <div id="phoneAndLeftText" ref={main} className='grid-in-left col-end-right grid grid-areas-mobile lg:grid-areas-desktop grid-cols-mobile lg:grid-cols-desktop grid-rows-mobile lg:grid-rows-desktop self-start'>

          <div id="leftTextNew" ref={leftTextWrapper} className='grid-in-left place-self-center text-[72px] font-[600] text-[rgba(60,64,67,1)] opacity-100'>
            {leftText}
          </div>


          <div id="phone" ref={phone} className='grid-in-left lg:grid-in-middle place-self-center min-w-[274px] lg:min-w[370px]'>
            <div className='bg-red-500 h-96 w-96 ml-[24px] lg:ml-0 frame-shadow' />
          </div>

        </div>

        <div id="rightTextCol" ref={rightTextCol} className='grid-in-right col-end-left lg:col-end-right flex flex-col gap-[500px] lg:gap-[1000px] pt-[1000px] z-10 w-fit min-w-[280px] lg:min-w-[404px] mr-[16px] lg:mr-[59px] place-items-start justify-self-end'>



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





            {/* <div id="spacer3" className='h-[500px] lg:h-[1000px]' /> */}
          </div>
        </div>


      </div>



      <div className='grid  grid-in-left lg:grid-in-middle col-span-2 grid-areas-phone col-end-right grid-cols-phoneMobile lg:grid-cols-phoneDesktop  grid-rows-phoneMobile lg:grid-rows-phoneDesktop  ml-[24px] lg:ml-[0px] h-fit w-[303px] lg:w-fit  justify-start   lg:justify-center  border-none border-purple-500 justify-items-center overflow-visible'>


        <div id="frameMask" ref={frameMask} className=" grid grid-areas-phone grid-cols-phoneMobile lg:grid-cols-phoneDesktop  grid-rows-phoneMobile lg:grid-rows-phoneDesktop rounded-br-[769.01px] rounded-bl-[769.01px]  row-start-1 row-end-6 col-start-1 col-end-6 border-none border-green-500  overflow-hidden justify-items-center justify-center">

          <img id='frame' ref={frame} src="frame-hollow.svg" alt="frame" className=' w-full col-start-2 col-end-5 row-start-2 row-end-4  z-20' />

          <div id="screen" ref={screen} className="grid col-start-3 col-end-4 row-start-3 row-end-4  grid-areas-screen grid-cols-screenMobile lg:grid-cols-screenDesktop grid-rows-screenMobile lg:grid-rows-screenDesktop overflow-hidden rounded-[20px]  lg:rounded-[42px] border-none border-orange-500 z-20">



            <img src="/availability.svg" alt="availability" id="availability" ref={availability} className="z-12 grid-in-body self-start w-full opacity-0" />

            {/* property tab shadow and chip strokes broken in SVG, consider image or fixing .svg  or accepting it*/}
            <img src="/property-bar.svg" alt="property-bar" id="property-bar" ref={propertyBar} className="z-12 grid-in-body self-end w-full opacity-100" />

            <img src="/property.svg" alt="calendar" id="property" ref={property} className="z-11 grid-in-body self-start w-full opacity-1000" />

            <div id="overlay" ref={overlay} className="bg-black opacity-50 grid-in-body z-9" />

            <img src="/calendar.svg" alt="calendar" id="calendar" ref={calendar} className="z-10 grid-in-body self-end w-full" />

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

            <img src="/status-search-filter.svg" alt="status"
              className='grid-in-status z-2 shadow-lg w-full ' />

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

          </div>
        </div>


        <div id="wrapperMapMask" ref={wrapperMapMask} className='grid col-start-3 col-end-4 row-start-1 row-end-4  overflow-hidden border-none border-pink-500 rounded-[20px] lg:rounded-[41px] self-start justify-center '>
          {/* <div id="spacer" ref={spacer} className="h-[28px]" /> */}

          <div id="mapMask" ref={mapMask} className='w-[344px] h-[744px] rounded-none lg:rounded-[41px] overflow-hidden border-none border-fuchsia-300' >

            <img id='map' src="map-5.png" alt="map" className='object-cover  w-[800px] h-[800px]' />
          </div>
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
