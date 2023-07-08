// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react';

export const Description = () => {
  const handleUpdate = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
      .catch(error => console.log(error));
  };
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/shiba/shiba-16.jpg');
  return (
    <img src={dogUrl} alt="わんこの画像" />
  );
};
