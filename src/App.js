import './App.css';
import axios from 'axios';
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

  const navigate = useNavigate();

  const countries = [
    {country: "USA", code: "us"},
    {country: "UK", code: "uk"},
    {country: "Australia", code: "au"},
    {country: "Canada", code: 'ca'},
    {country: "China", code: 'cn'},
    {country: "Thailand", code: 'th'},
    {country: "South Korea", code: 'kr'},
    {country: "Japan", code: 'jp'},
    {country: "India", code: 'in'},
    {country: "Germany", code: 'de'},
    {country: "France", code: 'fr'},
  ]

  function selectCountry(e) {
    fetch(`https://api.apilayer.com/world_news/search-news?&source-countries=${e.target.id}&number=5`, requestOptions)
    .then(response => response.text())
    .then(result => navigate(`/displayNews/${e.target.id}`, {state: {news: JSON.parse(result).news, country: e.target.innerText} }))
    .catch(error => console.log('error', error));
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1>World News</h1>
          <p>Click on the country below to see top stories:</p>

          <div className='countries-container'>
            {countries.map((country, i) => {
              return (
                <div className={`${country.code}`} key={country+i} onClick={(e) => selectCountry(e)} id={`${country.code}`} >{country.country}
                </div>
              )
            })}
          </div>

        </header>
      </div>
    );

}

export default App;
