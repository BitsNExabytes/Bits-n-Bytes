import React from 'react';
import PropTypes from 'prop-types';



const Rating = ({value,text,color})=>{

    return(

       <div className = 'rating'>

            {/* The value helps us to determine how many stars to fill in */}
            {/*  if value is greater than or equal to one show full star, if greater than or equal to 0.5 show half star else show an empty star */}
           <span>
               <i  style= {{color}} className={ value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
           </span>
           <span>
               <i style ={{color}}  className={ value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
           </span>
           <span>
               <i  style ={{color}} className={ value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
           </span>
           <span>
               <i  style ={{color}} className={ value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
           </span>
           <span>
               <i style ={{color}} className={ value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
           </span>

           
        {/* If there is text then show it */}
        <span>{text && text}</span>
       </div>
    )

}

Rating.propTypes = {

    text: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,


}


// Sets a default property for the prop
Rating.defaultProps ={

    color: "yellow"
}

export default Rating