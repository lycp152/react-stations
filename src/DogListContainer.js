// DO NOT DELETE
import * as React from 'react'
import { useState, useEffect } from 'react';

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState('https://dog.ceo/api/breeds/list/all');

  breeds

  useEffect(() => {
    const handleUpdate = () => {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => setBreeds(data.message))
        .catch(error => console.log(error));
    };
    handleUpdate()
  }, []  )

  return (
    <div>
    </div>
  );
};
