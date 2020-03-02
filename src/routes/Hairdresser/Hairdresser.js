import React, { useState } from 'react'
import { Link, useRouteMatch, useParams } from "react-router-dom"
import { Container, Grid, Card, Image, Icon } from 'semantic-ui-react'
import Coverflow from 'react-coverflow'
import './Hairdresser.css'

import hairdressers from "../../mockData.json"


const Hairdressers = () => {
  const { id: hairdresserId } = useParams();
  console.log(hairdresserId)
  const foundHairdresser = hairdressers.find(({ id }) => {console.log('asfd', id); return id === Number(hairdresserId)})

  // Show error if no hairdresser found in list
  if (!foundHairdresser) return <div>No Hairdressser Found</div>

  const {
    id,
    firstName,
    lastName,
    gender,
    location,
    bio,
    imgUrl,
    price,
    visitCount,
    rating,
    portfolioImages,
  } = foundHairdresser

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <div className="portfolio">
        <div style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}} />
        <div style={{width: '100%', maxWidth: 1920}}>
          <Coverflow
            displayQuantityOfSide={2}
            navigation={false}
            infiniteScroll={false}
            enableHeading
            media={{
              '@media (max-width: 640px)': {
                height: '220px'
              },
              '@media (min-width: 640px)': {
                height: '300px'
              },
              '@media (min-width: 768px)': {
                height: '400px'
              },
              '@media (min-width: 960px)': {
                height: '500px'
              },
              '@media (min-width: 1200px)': {
                height: '650px'
              }
            }}
          >
            {portfolioImages.map(({ url, description }) => (
              <img key={id} src={url} alt={description} />
            ))}
          </Coverflow>
        </div>
        <div style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.1)'}} />
      </div>
      <div style={{ backgroundColor: 'black', flex: 1 }}>
          <div>{firstName}{lastName}</div>
      </div>
    </div>
  )
}

export default Hairdressers