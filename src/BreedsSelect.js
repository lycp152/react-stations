// DO NOT DELETE
import * as React from 'react';
import PropTypes from 'prop-types';

const BreedsSelect = ({ breeds }) => {
  const [selectedBreed, setSelectedBreed] = React.useState('');

  const handleChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  return (
    <div id="dropdown">
      <p>Breeds List</p>
      {/* breedsプロップスを元に犬種のドロップダウンを作成 */}
      <select value={selectedBreed} onChange={handleChange}>
        {/* breedsが配列の場合、犬種の選択肢を生成 */}
        {Array.isArray(breeds) &&
          breeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
      </select>
    </div>
  );
};

// プロップスの検証を追加
BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { BreedsSelect }; // ファイルの最後に直接export
