// DO NOT DELETE
import * as React from 'react';
import { useEffect, useState } from 'react';
import { BreedsSelect } from './BreedsSelect'; // BreedsSelectのインポート方法を修正

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const handleUpdate = () => {
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => setBreeds(Object.keys(data.message)))
        .catch(error => console.log(error));
    };
    handleUpdate();
  }, []);

  return (
    <div>
      {/* BreedsSelectコンポーネントを呼び出し、犬種一覧を渡す */}
      <BreedsSelect breeds={breeds} />
    </div>
  );
};
