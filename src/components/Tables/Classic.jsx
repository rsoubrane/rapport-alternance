import React from "react";

//Utils
import { Table } from "reactstrap";

export default function ExportClassic() {
	return (
		<Table striped bordered hover>
			<thead>
				<tr>
					<th>#</th>
					<th>Utilisateur</th>
					<th>Campagne</th>
					<th>Étude</th>
					<th>Question</th>
					<th>Réponse</th>
					<th>Correct</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope='row'>1</th>
					<th>Utilisateur</th>
					<th>Campagne</th>
					<th>Étude</th>
					<th>Question</th>
					<th>Réponse</th>
					<th>Correct</th>
				</tr>
				<tr>
					<th scope='row'>2</th>
					<th>Utilisateur</th>
					<th>Campagne</th>
					<th>Étude</th>
					<th>Question</th>
					<th>Réponse</th>
					<th>Correct</th>
				</tr>
				<tr>
					<th scope='row'>3</th>
					<th>Utilisateur</th>
					<th>Campagne</th>
					<th>Étude</th>
					<th>Question</th>
					<th>Réponse</th>
					<th>Correct</th>
				</tr>
			</tbody>
		</Table>
	);
}
