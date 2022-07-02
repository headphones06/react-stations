// DO NOT DELETE
import React, {useState, useEffect} from 'react';
import {BreedsSelect} from './BreedsSelect'

export function DogListContainer(props){
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");
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
  
  return(
    <BreedsSelect breeds = {breeds} value = {selectedBreed} change = {handleChange} />
  )
}