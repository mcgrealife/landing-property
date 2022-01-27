import Head from 'next/head'
import Card from '../components/Card'

export default function Home() {

  return (

    <>
      <Head>
        <title>Resider</title>
      </Head>
      <div className='flex flex-col min-h-screen'>
        <div className='bg-white shadow p-4'>
          header
        </div>
        <div className='flex-1'>
          <p>title</p>
          <div className='grid grid-cols-[9.5px_255px_9.5px] grid-rows-[8px_552.2px_8.1px] justify-center '>





            <img src="/map-1.png" alt="map" className='row-start-2 row-span-4 col-start-2 col-span-2 pt-[101px] z-2' />

            <img src="/status-search-filter.svg" alt="status"
              className='row-start-2 row-span-4 col-start-2 col-span-2 z-2 shadow-lg' />

            <div className='row-start-1 row-span-4 col-start-2 col-span-1 rounded-2xl flex justify-center place-items-end z-10 overflow-x-auto scrollbar-hide pb-[28.5px] snap-x'>
              <div className='flex justify-start gap-[5.5px] snap-x'>
                <Card />
                <Card />
                <Card className='shadow-lg' />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            <div className='row-start-2 row-span-1 col-start-2 col-span-1 rounded-2xl flex justify-center place-items-end'>

            </div>

            <img src="/home.svg" alt="home" className='row-start-2 col-start-2 justify-self-center self-end pb-[5.23px] z-20' />
            {/* shadow-frame should work tailwing.conifig */}

            <img
              src='/frame-hollow.svg'
              className='row-start-1 row-span-3 col-start-1 col-span-3 z-9'
            />

          </div>
          <p>below phone</p>
        </div>
        <div className='bg-white shadow border p-4 grid'>
          <button className='bg-blue-600 border rounded text-white p-2 shadow'>Schedule Tour</button>
        </div>
      </div>
    </>

  )
}
