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
      <Header />
      <p className={"description"}>このページはTechtrainにて使用した学習用教材の出力です.</p>
      <p>犬の種類を選択して表示を押すと、複数の犬の画像を表示します。</p>
      <DogListContainer />
      <Description />
    </div>
  )
}
