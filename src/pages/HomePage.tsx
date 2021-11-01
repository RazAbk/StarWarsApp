import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return (
        <>
            <Link to="/movies" className="movies-btn">Go to movies</Link>
            <div className="home-page">
                <div className="fade"></div>

                <section className="star-wars">

                    <div className="crawl">

                        <div className="title">
                            <p>Episode IV</p>
                            <h1>A New Episode</h1>
                        </div>

                        <p>Hey, I'm Raz,</p>
                        <p>a Full-Stack / Front-End developer</p>
                        <p>I’m looking for a meaningful position, a one that will challenge me and allow me to create value for others.</p>
                        <p>I am a dedicated employee, a quick learner and willing to envole.</p>
                        <p>Creative, flexible and a problem solver, I love working with people and believe I have a lot to contribute to a team.</p>

                    </div>

                </section>
            </div>
        </>
    )
}
