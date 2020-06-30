import React from "react";

//Reactstrap Components
import { Container } from "reactstrap";

//Components
import FunFacts from "../components/FunFacts";

import "./about.scss";
import Testimonials from "../components/Testimonials";
import Clients from "../components/Clients";
import Presentation from "../components/Presentation";
import Header1 from "../components/Header1";
import Header2 from "../components/Header2";
import Header from "../components/Header";

export default function PageAbout() {
    return (
        <div id='main-content' className='single-page-content'>
            <div id='primary' className='content-area'>
                <div id='content' className='page-content site-content single-post' role='main'>
                    <article id='post-164' className='post-164 page type-page status-publish hentry'>
                        <div className='entry-content'>
                            <div className='fw-page-builder-content'>
                                <section className='fw-main-row  '>
                                    <div className='fw-container'>
                                        <Header />
                                    </div>
                                </section>

                                <Presentation />
                                <Clients />
                                <FunFacts />
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

