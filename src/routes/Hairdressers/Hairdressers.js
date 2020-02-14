import React, { useState } from 'react'
import { Link, useRouteMatch } from "react-router-dom"
import { Grid, Card, Image, Icon } from 'semantic-ui-react'
import './Hairdressers.css'

import hairdressers from "../../mockData.json"


const Hairdressers = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="hairdressers">
      <Grid stackable doubling columns={4} container>
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
          <Grid.Column key={id}>
            <Link to={`${url}/${id}`}>
              <Card fluid>
                  <Image src={imgUrl} wrapped ui={false} size="small"/>
                  <Card.Content>
                    <Card.Header>{`${firstName} ${lastName}`}</Card.Header>
                    <Card.Meta>{location}</Card.Meta>
                    <Card.Description>{bio}</Card.Description>
                  </Card.Content>
                <Card.Content extra>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> 
                    <div>{`$${price/100}`}</div>
                    <div>
                      <span>★★★★☆</span>{' '}
                      <span>{rating}</span>{' '}
                      <span>({visitCount})</span>
                    </div>
                  </div>
                </Card.Content>
              </Card>    
            </Link>
          </Grid.Column>
        ))}
      </Grid>
    </div>
  )
}

export default Hairdressers