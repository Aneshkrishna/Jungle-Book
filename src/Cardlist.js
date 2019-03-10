import React from 'react';
import Card from './Card';

const Cardlist=({Robots})=>{
	return(
		<div>{
			Robots.map((user,i)=>{
				return (<Card id={Robots[i].id} name={Robots[i].name}/>);
			})
		}
		</div>
	);
}

export default Cardlist;