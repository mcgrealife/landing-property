import GoogleMapReact from 'google-map-react'

export default function GoogleMap() {

  function createMapOptions(maps) {
    return {
      mapTypeControl: false,
      fullscreenControl: false,
      disableDefaultUI: true,
    }
  }

  const handleApiLoaded = (map, maps) => {

  }

  const AnyReactComponent = ({ text }) => <div>{text}</div>


  return (
    <div className='h-full w-full'>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyAfrRnPgzwuy1tuze6ex7JeL14G9kgQ9nI'
        }}
        defaultCenter={{
          lat: 41.8863678,
          lng: -87.6379609
        }}
        defaultZoom={14}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        options={createMapOptions}
      >
        <AnyReactComponent
          lat={41.890409}
          lng={-87.6301587}
          text="MARKERRRRR"
        />
      </GoogleMapReact>
    </div >
  )
}

