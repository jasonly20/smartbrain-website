import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, boxes}) => {
	const boxFaces = boxes.map((box, i) => {
						return (
							<div key={i} className='bounding-box' 
							style={{top: boxes[i].topRow, right: boxes[i].rightCol, 
								bottom: boxes[i].bottomRow, left: boxes[i].leftCol}}></div>
						);
					});
	return (
		<div className='center ma'>
			<div className='absolute mt2'>
				<img id='inputimage' src={imageUrl} alt='' width='500px' height='auto'/>
				{
					boxFaces
				}
			</div>
		</div>
	);
}

export default FaceRecognition;