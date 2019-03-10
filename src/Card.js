import React from 'react';

const Card = ( {id,name} ) =>{
	return(
		<div className='tc bg-washed-green dib br2 pa2 ma2 grow bw2 shadow-5'>
	    	<a href={`https://en.wikipedia.org/wiki/${name}`}> <img alt='robo' width='300' height='300' src={require(`./Pics/${id}.jpeg`)}  /></a>
	    	<div>
	    		<h2>{name}</h2>
	    	</div>
    	</div>
	);
}

export default Card;