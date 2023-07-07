import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../data/data.json';
import staractive from '../../images/star-active.png'
import starinactive from '../../images/star-inactive.png'

const Rating = () => {
    const { id } = useParams();
    const pageData = Data.find((item) => item.id === id);
    const rating = pageData.rating;

    if (rating === "5") {
        return (
            <div><img alt="img" src={staractive}/><img alt="img" src={staractive}/><img alt="img" src={staractive}/><img alt="img" src={staractive}/><img alt="img" src={staractive}/></div>
        );
    }
    
    if (rating === "4") {
        return (
            <div><img alt="img" src={staractive}/><img alt="img" src={staractive}/><img alt="img" src={staractive}/><img alt="img" src={staractive}/><img alt="img" src={starinactive}/></div>

        );
    }

    if (rating === "3") {
        return (
            <div><img alt="img" src={staractive}/><img alt="img" src={staractive}/><img alt="img" src={staractive}/><img alt="img" src={starinactive}/><img alt="img" src={starinactive}/></div>

        );
    }

    if (rating === "2") {
        return (
            <div><img alt="img" src={staractive}/><img alt="img" src={staractive}/><img alt="img" src={starinactive}/><img alt="img" src={starinactive}/><img alt="img" src={starinactive}/></div>

        );
    }

    if (rating === "1") {
        return (
            <div><img alt="img" src={staractive}/><img alt="img" src={starinactive}/><img alt="img" src={starinactive}/><img alt="img" src={starinactive}/><img alt="img" src={starinactive}/></div>

        );
    }
    
    if (rating === "0") {
        return (
            <div><img alt="img" src={starinactive}/><img alt="img" src={starinactive}/><img alt="img" src={starinactive}/><img alt="img" src={starinactive}/><img alt="img" src={starinactive}/></div>

        );
    }
}

export default Rating;