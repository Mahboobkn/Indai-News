import React, { useState } from 'react'
import axios from 'axios'

const FetchNews = () => {
    const [news, setNews] = useState([])
    const fetchNews = async () => {
        try {
            const result = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=6564f45664754be8a44be2a1650db4bf')
            console.log(result.data.articles);
            const response = result.data.articles
            setNews(response)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <button className='btn btn-primary' onClick={fetchNews}>Fetch News</button>
            <div className="container">
                <div className="row">
                    {
                        news.map((item, i) => {
                            return (
                                <div className="col-md-4 col-sm-6" key={i}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={item.urlToImage} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">  {item.title} </h5>
                                            <p className="card-text"> {item.description} </p>
                                            <a href="#" className="btn btn-primary">Main</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default FetchNews