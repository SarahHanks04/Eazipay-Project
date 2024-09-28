import React from 'react'
import { NavLink } from 'react-router-dom';

const SettingsButton = () => {
  return (
    <div>
      <NavLink>Cancel</NavLink>
      <NavLink>Save</NavLink>
    </div>
  )
}

export default SettingsButton;
