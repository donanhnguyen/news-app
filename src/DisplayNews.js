import {Link, useParams, useLocation, useNavigate} from 'react-router-dom';

function DisplayNews () {

    const params = useParams();
    const location = useLocation();
    const {countryCode} = params;
    const {state} = location;
    const navigate = useNavigate();

    function navigateToStory (story) {
        navigate(`/displayNews/${countryCode}/${story.id}`, {state: {story: story, country: state.country, news: state.news} } )
    }

    function displayTheNews () {
        const displayedNews = state.news.map((story, i) => {
            return (
                <div onClick={() => navigateToStory(story)} key={story+i} className='single-story'>
                    <h1>{story.title}</h1>
                    <p>Written by {story.author}</p>
                    <p>Published on: {story.publish_date}</p>
                    <img src={story.image} alt={story.title}></img>
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