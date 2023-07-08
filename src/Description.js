// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react';

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://images.dog.ceo/breeds/shiba/shiba-16.jpg');

  const handleUpdate = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
      .catch(error => console.log(error));
  };

  return (
    <div>
      <div id="flex">
        <h2>愛しいわんこを眺めるためのサイトです</h2>
        <img src={dogUrl} alt="わんこの画像" /><br/>
      </div>
      <button type="button" onClick={handleUpdate}>
          更新
      </button>
    </div>
  );
};
