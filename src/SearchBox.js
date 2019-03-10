import React from 'react';

const SearchBox = ({searchChange})=>{
	return(
		<div className='pa2'>
			<input
				className='pa3 ba bg-lightest-blue'
				type='search'
				placeholder='Search Animal'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;