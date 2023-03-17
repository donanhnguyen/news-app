import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import DisplayNews from './DisplayNews';
import { useNavigate } from 'react-router-dom';

const API_KEY = "WNiS9hiaDj828hcgupjd14r0Xees78WR";

var myHeaders = new Headers();
myHeaders.append("apikey", API_KEY);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function App() {

  const [selectedCountryState, setCountryState] = useState(null);
  const navigate = useNavigate();

  const countries = [
    {country: "USA", code: "us"},
    {country: "UK", code: "uk"},
    {country: "Australia", code: "au"},
    {country: "Canada", code: 'ca'},
    {country: "China", code: 'cn'},
  ]

  function selectCountry(e) {
    setCountryState(e.target.value);
    fetch(`https://api.apilayer.com/world_news/search-news?&source-countries=${e.target.value}&number=5`, requestOptions)
    .then(response => response.text())
    .then(result => navigate(`/displayNews/${e.target.value}`, {state: {news: JSON.parse(result).news, country: e.target.innerText} }))
    .catch(error => console.log('error', error));
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1>World News</h1>
          <p>Click on the country below to see top stories:</p>
          {countries.map((country, i) => {
            return (
              <div key={country+i}>
                <button className='btn btn-primary btn-lg' onClick={(e) => selectCountry(e)} value={`${country.code}`}>{country.country}</button>
              </div>
            )
          })}

        </header>
      </div>
    );

}

export default App;
