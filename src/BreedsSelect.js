// DO NOT DELETE
import React, {useState, useEffect} from 'react';

export function BreedsSelect(props){    
  const breedArray = Object.keys(props.breeds)

  return (
    <select onChange = {props.change} value={props.value}>
      <option>select</option>
      {
        breedArray.map((val) => {
          <option key = {val} value = {val}>
            {val}
          </option>
        })
      }
    </select>
  )
}

/*
  const listNames = breedArray.map((val) => {
    <option key = {val} value = {val}>
      {val}
    </option>
  })
*/