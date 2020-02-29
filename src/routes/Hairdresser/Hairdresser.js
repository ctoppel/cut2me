import React, { useState } from 'react'
import { Link, useRouteMatch, useParams } from "react-router-dom"
import { Container, Grid, Card, Image, Icon } from 'semantic-ui-react'
import Coverflow from 'react-coverflow'
import './Hairdresser.css'

import hairdressers from "../../mockData.json"


const Hairdressers = () => {
  let { id } = useParams();

  return (
    <div style={{width: '100%'}}>
      <Coverflow
        displayQuantityOfSide={2}
        navigation={false}
        infiniteScroll={false}
        enableHeading
        media={{
          '@media (max-width: 768px)': {
            height: '300px'
          },
          '@media (min-width: 768px)': {
            height: '600px'
          },
          '@media (min-width: 1200px)': {
            height: '800px'
          }
        }}
      >
        {hairdressers.map(({
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
        }) => (
          <img key={id} src={imgUrl} alt='Album one' />
        ))}
      </Coverflow>
      {id}
    </div>
  )
}

export default Hairdressers