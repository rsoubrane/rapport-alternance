import React from "react";

export default function Spacer({ padding }) {
	return (
		<div
			className='fw-divider-space'
			style={{
				paddingTop: padding,
			}}></div>
	);
}
