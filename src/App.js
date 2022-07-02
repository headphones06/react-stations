// DO NOT DELETE

import React from 'react';
import './App.css' 
import {Header} from './Header.js'
import {Description} from './Description.js'
import {DogListContainer} from './DogListContainer.js'

/**
 * 
 * @type {React.FC}
 */
export const App = () => {

  return (
    <div>
      <DogListContainer />
      <Header />
      <Description />
    </div>
  )
}
