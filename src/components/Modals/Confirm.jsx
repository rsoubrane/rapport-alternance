import React, { useState } from "react";

//Reactstrap Components
import { Button, Modal, ModalFooter, ModalHeader } from "reactstrap";

export default function ConfirmModal({ header, confirmAction, list }) {
	const [isOpen] = useState(true);

	const handleConfirm = () => {
		handleToggle("confirm");
	};

	const handleClose = () => {
		handleToggle();
	};

	const handleToggle = (confirm) => {
		confirmAction(confirm);
	};

	return (
		<Modal isOpen={isOpen} toggle={handleToggle} centered={false}>
			<ModalHeader>{header}</ModalHeader>
			<ModalFooter>
				<Button color='danger' onClick={handleClose}>
					Fermer
				</Button>
				<Button color='primary' onClick={handleConfirm}>
					Confirmer
				</Button>
			</ModalFooter>
		</Modal>
	);
}
