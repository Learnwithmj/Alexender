import React from 'react'
import Header from '../Header/Header'
import { crowsel } from '../../database'
import KidsCrowsel from '../Home/Maincrowsel'
import Fetch from './Fetch';

function Kids() {
  return (
    <div>
      <Header/>
      <KidsCrowsel images = {crowsel.kids} />
      <Fetch/>
    </div>
  )
}

export default Kids
