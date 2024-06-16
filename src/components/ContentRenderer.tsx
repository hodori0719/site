import React from 'react';
import Home from '../pages/Home.md';
import Projects from '../pages/Projects.md';
import Writing from '../pages/Writing.md';
import Music from '../pages/Music.md';
import Vita from '../pages/Vita.md';
import Page from '../routes/Page';
import { Route, Routes, Navigate } from 'react-router-dom';
import { BlogIndex, ProjectIndex } from '../pages/BlogIndex';

const ContentRenderer = () => {
    const BlogRoutes = []
    const BlogTitles = []
    const ProjTitles = []
    for (var index of BlogIndex) {
        BlogRoutes.push(<Route path={"/writing/"+encodeURI(index.titleElem.title.replaceAll(" ", "-").replaceAll(/,|:/g, '').toLowerCase())} element={<Page pagetitles={[index.titleElem]} markdown={index.markdown}/>}></Route>);
        BlogTitles.push(index.titleElem);
    }
    for (var proj of ProjectIndex) {
        BlogRoutes.push(<Route path={"/projects/"+encodeURI(proj.titleElem.title.replaceAll(" ", "-").replaceAll(/,|:/g, '').toLowerCase())} element={<Page pagetitles={[proj.titleElem]} markdown={proj.markdown}/>}></Route>);
        ProjTitles.push(proj.titleElem);
    }

    return (
        <div className="content">
            <Routes>
                <Route path="/" element={<Page markdown={Home}/>} />
                <Route path="/about" element={<Navigate to="/"/>} />
                <Route path="/vita" element={<Page markdown={Vita}/>} />
                <Route path="/projects" element={<Page pagetitles={ProjTitles} markdown={Projects}/>}/>
                <Route path="/writing" element={<Page pagetitles={BlogTitles} markdown={Writing}/>}/>
                {BlogRoutes}
                <Route path="/music" element={<Page markdown={Music}/>}/>
            </Routes>
        </div>
    )
}

export default ContentRenderer;