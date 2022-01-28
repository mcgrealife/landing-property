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

  const textColor = () => {
    let resultString = ''
    switch (state) {
      case 'selected':
        resultString = 'text-white'
        break
      case 'viewed':
        resultString = 'text-[rgba(60, 64, 67, 0.5)]'
        break
      case 'unviewed':
        resultString = 'text-[rgba(51,51,51,1)]'
        break
      default:
        resultString = ''
    }
    return resultString
  }


  const className = `${textColor} + text-[7.85px] font-[600] text-center leading-[8px]`


  return (
    <div className='flex flex-col drop-shadow-[0_0.654028px_2.61611px_rgba(60,64,67,0.2)]'>
      <div className={` px-[3.92px]  pt-[3.27px] pb-[2.62px] grid place-content-center ${state == 'selected' ? 'bg-[rgba(54,108,165,1)]' : 'bg-white'} rounded-[2.62px]`}>
        <p className={`text-[7.85px] ${state == 'selected' ? 'text-white' : state == 'viewed' ? 'text-[rgba(60,64,67,0.5)]' : 'text-[rgba(51,51,51,1)]'}  font-[600] text-center leading-[8px]`}>{text}</p>
      </div>
      <div className={`${state == 'selected' ? 'arrowDownBlue' : 'arrowDownWhite'} self-center`} />
    </div>
  )
}