import {Link, useParams, useLocation} from 'react-router-dom';

function DisplayNews () {

    const params = useParams();
    const location = useLocation();
    const {countryCode} = params;
    const {state} = location;

    function displayTheNews () {
        const displayedNews = state.news.map((story, i) => {
            return (
                <div key={story+i} className='single-story'>
                    <h1>{story.title}</h1>
                    <p style={{color: 'red'}}>Written by {story.author}</p>
                    <p>Published on: {story.publish_date}</p>
                    <img src={story.image}></img>
                </div>
            )
        })
        return displayedNews;
    }

    return (
        <div className="App">
            <div className='App-header'> 

            <h1>{state.country} News</h1>

            <div className='display-news-container'>
                {displayTheNews()}
            </div>

            <Link className="btn btn-primary btn-lg" to='/'>Back to Home</Link>
            </div>
        </div>
    )
}

export default DisplayNews;