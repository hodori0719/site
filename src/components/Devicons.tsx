import React from 'react';

const Devicons = ({devicons, gh} : {devicons : string[], gh?: string}) => {
	const RenderedImages = []
	const BlackImages = []

	for (var devicon of devicons) {
		RenderedImages.push(<i className={"devicon-" + devicon + " colored"}></i>)
		BlackImages.push(<i className={"devicon-" + devicon}></i>)
	}

	return (
		<div className='devicons-container'>
	        <div className='devicons'>
	            {RenderedImages}
	        </div>
	        <div className='devicons-black'>
	            {RenderedImages}
	        </div>
	        {gh && 
		        <div className='gh'>
		        	<a href={gh}>
		        		<i className={"devicon-github-plain"}></i>
		        	</a>
		        </div>
	    	}
        </div>
	)
}

export default Devicons;