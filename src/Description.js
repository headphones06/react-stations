import React, { useState } from 'react';
import {DogImage} from './DogImage.js'

export function Description(props){
  const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/kelpie/n02105412_4932.jpg");

  function getUrl(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {setDogUrl(data.message)}
    );
  }
  
  return(
    <div>
      <p className={"description"}>このページはTechtrainにて使用した学習用教材の出力です.</p>
      <p className={"description"}>更新を押すとランダムな犬の画像が表示されます.</p>
      <DogImage url={dogUrl} />
      <p></p>
      <button onClick={() => getUrl()}>更新</button>
    </div>
  )
}
