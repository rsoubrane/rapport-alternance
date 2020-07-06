import React from "react";

import Chart from "react-google-charts";

//Reactstrap Components
import { Row, Col } from "reactstrap";

//Components
import BlockTitle from "./BlockTitle";

export default function Position() {
	return (
		<>
			<BlockTitle title='Fun Facts' />

			<Chart
				width={"500px"}
				height={"300px"}
				chartType='PieChart'
				loader={<div>Loading Chart</div>}
				data={[
					["Données", "Pourcentage"],
					["Bouygues", 13],
					["Free", 23],
					["Orange", 42],
					["SFR", 22],
				]}
				options={{
					title: "FAI (2019)",
					// Just add this option
					is3D: true,
					slices: {
						1: { offset: 0.2 },
					},
				}}
				rootProps={{ "data-testid": "2" }}
			/>
		</>
	);
}
