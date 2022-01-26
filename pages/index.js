import Head from 'next/head'
import Card from '../components/Card'
import GoogleMap from '../components/GoogleMap'

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
          <div className='grid grid-cols-[11px_209px_11px] grid-rows-[10px_452px_10px] justify-center'>
            <img
              src='/iphone-frame.svg'
              className='row-start-1 row-span-3 col-start-1 col-span-3'
            />


            <div className='row-start-2 row-span-1 col-start-2 col-span-1 rounded-2xl flex justify-center place-items-end z-10'>
              <div className='pb-[8px] overflow-hidden'>

                <div className='flex justify-center overflow-x-auto scrollbar-hide gap-1 snap-x '>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                </div>

              </div>
            </div>
            <div className='row-start-2 row-span-1 col-start-2 col-span-1 rounded-2xl flex justify-center place-items-end'>
              <GoogleMap />
            </div>

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
