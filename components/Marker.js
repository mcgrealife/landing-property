// https://greensock.com/react/#timelines
// https://greensock.com/react-advanced/#component-communication

// https://greensock.com/forums/topic/28797-animate-tween-independent-of-scroll-trigger/

export default function Marker({ text, state }) {
  return (
    <div className='flex flex-col drop-shadow-[0_0.654028px_2.61611px_rgba(60,64,67,0.2)]'>
      <div className={`'w-[32px] h-[17px] grid place-content-center bg-${state == 'selected' ? 'black' : 'white'} rounded-[2.62px]'`}>
        <p className='text-[7.85px] text-[rgba(60,64,67,0.5)] font-[600] text-center leading-[8px]'>{text}</p>
      </div>
      <div className='arrowDown self-center' />
    </div>
  )
}