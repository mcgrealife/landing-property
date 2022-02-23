import card1 from '../public/card1-4x.png'
import card2 from '../public/card2-4x.png'
import card3 from '../public/card3-4x.png'
import card4 from '../public/card4-4x.png'

export default function Cards({num}) {

  const cardStyle = 'w-[227.77px] lg:w-[307.57px] h-[81.59px] lg:h-[110.17px] snap-center shadow-[0_0.679899px_4.0794px_rgba(60,64,67,0.24) lg:shadow-[0_0.918114px_5.50869px_rgba(60,64,67,0.24)]'
  
  return (
      <img id={"card" + num} src={`/card${num}-4x.png`} alt={"card"+num} className='w-[227.77px] lg:w-[307.57px] h-[81.59px] lg:h-[110.17px] bg-white rounded-[8px] lg:rounded-[7.34px] snap-center shadow-[0_0.679899px_4.0794px_rgba(60,64,67,0.24)] lg:shadow-[0_0.918114px_5.50869px_rgba(60,64,67,0.24)]'/>
  )

}