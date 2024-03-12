import React, { useState } from 'react';
import { useAppContext } from './context';

const AppLayout = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [inputZipcode, setInputZipcode] = useState('');
  const { setSearch, state } = useAppContext();

  const handleSearch = () => {
    if (selectedCity !== '' && inputZipcode !== '') {
      setSearch(selectedCity, inputZipcode);
      setSelectedCity('');
      setInputZipcode('');
    } else {
      alert('City or Zipcode must not be empty');
    }
  };

  const handleReset = () => {
    setInputZipcode('');
    setSelectedCity('');
  };

  const addSearch = () => {
    const newSearch = {
      city: selectedCity,
      zipcode: inputZipcode,
      temperature: Math.floor(Math.random() * (100 - 0) + 0), // Generate a random temperature for demonstration
    };
    setSearch(selectedCity, inputZipcode);
    setSelectedCity('');
    setInputZipcode('');
  };

  return (
    <div>
      <div>
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Select City</option>
          <option value="mumbai">Mumbai</option>
          <option value="kolkata">Kolkata</option>
          <option value="delhi">Delhi</option>
          <option value="chennai">Chennai</option>
          <option value="none">None</option>
        </select>


        <input type="text" value={inputZipcode} onChange={(e) => setInputZipcode(e.target.value)} placeholder="Enter Zipcode" />
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleReset}>Reset</button>
      </div>


      <div>
        <h2>Searches up to 3</h2>

        {state.Searches.slice(0, 3).map((search, index) => (
          <div key={index}>
            <h3>City: {search.city}</h3>
            <h3>Zipcode: {search.zipcode}</h3>
            <h3>Temperature: {search.temperature}</h3>
          </div>
        ))}
      </div>
      {state.error && <div>Error: {state.error}</div>}
    </div>
  );
}

export default AppLayout;
