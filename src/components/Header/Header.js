import React, { useState } from 'react'
import { Popup, Button, Menu, Input, Label } from 'semantic-ui-react'
import './Header.css'
import logo from '../../logo.svg'
import cut2me_text from '../../cut2me_text.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const [activeItem, setActiveItem] = useState('inbox')

  const handleItemClick = (e, { name }) => setActiveItem(name)

  return (
    <header>

      {/* Logo */}
      <Link to="/" className="App-logo">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={cut2me_text} className="App-logo" alt="logo" />
      </Link>

      {/* Settings */}
      <Popup
        trigger={
          <Button icon='bars' basic className="hamburger-menu" />
        }
        content={
          <Menu vertical>
          <Menu.Item
            name='inbox'
            active={activeItem === 'inbox'}
            onClick={handleItemClick}
          >
            <Label color='teal'>1</Label>
            Inbox
          </Menu.Item>

          <Menu.Item
            name='spam'
            active={activeItem === 'spam'}
            onClick={handleItemClick}
          >
            <Label>51</Label>
            Spam
          </Menu.Item>

          <Menu.Item
            name='updates'
            active={activeItem === 'updates'}
            onClick={handleItemClick}
          >
            <Label>1</Label>
            Updates
          </Menu.Item>
          <Menu.Item>
            <Input icon='search' placeholder='Search mail...' />
          </Menu.Item>
        </Menu>
        }
        on='click'
        position='bottom center'
        pinned
        basic
      />

    </header>
  )
}

export default Header