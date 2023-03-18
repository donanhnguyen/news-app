import {Link, useParams, useLocation, useNavigate} from 'react-router-dom';

function DisplayNewsStory () {

    const params = useParams();
    const location = useLocation();
    const {countryCode} = params;
    const {state} = location;
    const {story} = state;
    const navigate = useNavigate();

    function goBackToCountryNews () {
        navigate(`/displayNews/${countryCode}`, {state: {country: state.country, news: state.news}})
    }

    return (
        <div className="App">
            <button onClick={goBackToCountryNews} className='btn btn-danger btn-lg'>Go back to {state.country} news</button><Link className="btn btn-primary btn-lg" to='/'>Back to Home</Link>
            <div className='App-header'> 

            <article className='single-news-story-container'>
                <h1>{story.title}</h1>
                <p>Written by: {story.author}</p>
                <p>Published on: {story.publish_date}</p>
                <img src={story.image} alt={story.title}></img>
                <br></br>
                <a href={story.url}>Link to full story</a>
                <p className='story-text'>{story.text}</p>
            </article>

        </div>
    </div>
    )

}

export default DisplayNewsStory;