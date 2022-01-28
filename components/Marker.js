// https://greensock.com/react/#timelines
// https://greensock.com/react-advanced/#component-communication

// https://greensock.com/forums/topic/28797-animate-tween-independent-of-scroll-trigger/

export default function Marker({ text, state }) {

  // when using bgColor inside tailwind className, it returns the entire funciton instead of a string? Inline ternary works though. Strange.
  const bgColor = () => {
    switch (state) {
      case 'selected':
        return 'black'
      default:
        return 'white'
    }
  }


  // ${state == 'selected' ? 'white' : '[rgba(60,64,67,0.5)]'}

  // ${state == 'selected' ? '[rgba(54,108,165,1)]' : 'white'}

  // text - [rgba(60, 64, 67, 0.5)]

  return (
    <div className='flex flex-col drop-shadow-[0_0.654028px_2.61611px_rgba(60,64,67,0.2)]'>
      <div className={` px-[3.92px]  pt-[3.27px] pb-[2.62px] grid place-content-center bg-${state == 'selected' ? '[rgba(54,108,165,1)]' : 'white'} rounded-[2.62px]`}>
        <p className={`text-[7.85px] text-${state == 'selected' ? 'white' : '[rgba(60,64,67,0.5)]'} font-[600] text-center leading-[8px]`}>{text}</p>
      </div>
      <div className={`${state == 'selected' ? 'arrowDownBlue' : 'arrowDownWhite'} self-center`} />
    </div>
  )
}