import React from 'react'
import "./map.scss"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./leaflet.css"
import Pin from '../pin/Pin'
  
const Map = ({items}) => {
  return (
    <MapContainer center={items.length === 1 ? [items[0].latitude, items[0].longitude] : [20.5937, -78.9629] } zoom={items.length === 1 ? 7 : 0} scrollWheelZoom={false} className='map'>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map(item=>(
           <Pin item={item} key={item.id}/>
        ))}
  </MapContainer>
  )
}

export default Map