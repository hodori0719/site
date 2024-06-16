import React from 'react';
import {Link} from 'react-router-dom';
import Devicons from './Devicons';
import { BlogTitle } from '../pages/BlogIndex'

const BlogEntry = ({props} : {props : BlogTitle}) => {
    const link: string = (props.isProject ? "/projects/" : "/writing/") + encodeURI(props.title.replaceAll(" ", "-").replaceAll(/,|:/g, '').toLowerCase())

    return (
        <div className='pageTitle'>
            <Link className='blogEntry' to={link}>
                <h2 className={'blogTitle'}>{props.title}</h2>
                <span className='blogTime'>{props.date}</span>
            </Link>
            <div className='metadata'>
                {props.tech && <Devicons devicons={props.tech} gh={props.gh}/>}
                {props.imgSrc &&
                    <div className='portalImg'>
                        <Link to={link}>
                            <img src={props.imgSrc} alt=""></img>
                        </Link>
                    </div>
                }
                {props.desc}
            </div>
        </div>
    )
}

export default BlogEntry;