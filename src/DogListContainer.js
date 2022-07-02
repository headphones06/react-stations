// DO NOT DELETE
import React, {useState, useEffect} from 'react';
import {BreedsSelect} from './BreedsSelect'

export function DogListContainer(props){
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
  const [dogList, setDogList] = useState([]);
  const handleChange = e => setSelectedBreed(e.target.value)

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data => {
      if(data.status === "success"){
        const newbreeds = data.message
        setBreeds(newbreeds)
      }
    });
  },[])
  
  function getAPI(type){
    fetch("https://dog.ceo/api/breed/" + type + "/images/random/12")
    .then(res => res.json())
    .then(data => {setDogList(data.message)}
    );
    console.log(dogList)
  }

  const breedImges = dogList.map((image) => {
    return(
      <div className='dogImage' key={image}>
        <img src={image} key={image} />
      </div>
    )
  })

  return(
    <dev>
      <BreedsSelect breeds = {breeds} value = {selectedBreed} change = {handleChange} />
      <button onClick={() => getAPI(selectedBreed)}>表示</button>
      <br />
      {breedImges}
    </dev>
  )
}