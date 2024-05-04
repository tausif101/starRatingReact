import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import "./StarRating.css";

const StarRating = ({ nStars }) => {
    
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        // console.log(getCurrentIndex);
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex) {
        // console.log(getCurrentIndex);\
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(getCurrentIndex) {
        // console.log(getCurrentIndex);
        setHover(rating);
    }



    return (
        <div>
      <h2>Enter your rating:</h2>
      <div className='star-rating'>
          {[...Array(nStars)].map((_, index) =>
          {
              index += 1;
              return <FaStar
                  key={index}
                  className={index <= (hover || rating) ? 'active' : 'inactive'}
                  onClick={()=>handleClick(index)}
                  onMouseMove={()=>handleMouseEnter(index)}
                  onMouseLeave={()=>handleMouseLeave()}
                  size={40}
              />
          })};
            </div>
        </div>
  )
}

export default StarRating