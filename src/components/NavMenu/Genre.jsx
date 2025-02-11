import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

export default function GenreSelector ({ selectedGenres, setSelectedGenres }) {
  const genres = [
    { name: 'Action', id: 1 },
    { name: 'Adventure', id: 2 },
    { name: 'Biography', id: 3 },
    { name: 'Comedy', id: 4 },
    { name: 'Crime', id: 5 },
    { name: 'Drama', id: 6 },
    { name: 'Fantasy', id: 7 },
    { name: 'History', id: 8 },
    { name: 'Horror', id: 9 },
    { name: 'Mystery', id: 10 },
    { name: 'Romance', id: 11 },
    { name: 'Thriller', id: 12 },
    { name: 'Sci-Fi', id: 13 },
    { name: 'War', id: 14 },
  ];

  const onSelect = (selectedList, selectedItem) => {
    setSelectedGenres(selectedList)
  }

  const onRemove = (selectedList, removedItem) => {
    setSelectedGenres(selectedList)
  }

  console.log(selectedGenres)

  return (
    <div>
      <Multiselect
        options={genres}
        selectedValues={selectedGenres}
        onSelect={onSelect}
        onRemove={onRemove}
        displayValue="name"
        showCheckbox
        placeholder="Select Genres"
      />
    </div>
  )
}
