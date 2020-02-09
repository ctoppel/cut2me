import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Button, Segment, Header, Form } from 'semantic-ui-react'
import './Home.css'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import LocationSearchInput from '../../components/LocationSearchInput/LocationSearchInput'
// import { DateInput, TimeInput, DateTimeInput, DatesRangeInput } from 'semantic-ui-calendar-react'

const Home = () => {
  // const [state, setState] = useState({
  //   date: '',
  //   time: '',
  //   dateTime: '',
  //   datesRange: ''
  // })
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('');

  // const handleChange = (event, {name, value}) => {
  //   setState({ [name]: value });
  // }
  // function handleSubmit(that) {
  //   alert(that.searchTerm.value)
  //   return false
  // }

  return (
    <div className="home">
      <div className="home-upper-section" />
      <div className="home-middle-section">
        <Segment inverted className="appointment-search-container">
          <Header as='h1'>Find hairdressers who come to you</Header>
          <Form inverted>
            <Form.Field>
              <label>Where</label>
              <LocationSearchInput />
            </Form.Field>
            <Form.Field>
              <label>When</label>
              <DatePicker
                placeholderText={'Enter Time'}
                selected={date}
                onChange={date => setDate(date)}
                showTimeSelect
                timeFormat="h:mm aa"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </Form.Field>
            <Link to="/hairdressers">
              <Button fluid type='submit' color="teal">Search</Button>
            </Link>
            
          </Form>
        </Segment>
      </div>
      <div className="home-lower-section" />
    </div>
  )
}

export default Home