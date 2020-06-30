import { store } from "react-notifications-component";

export const NotificationService = {
	call(type, title, message) {
		store.addNotification({
			title: title,
			message: message,
			type: type,
			insert: "top",
			container: "bottom-right",
			animationIn: ["animated", "fadeIn"],
			animationOut: ["animated", "fadeOut"],
			dismiss: { duration: 5000 },
			dismissable: { click: true },
		});
	},

	callErrors(data) {
		store.addNotification({
			title: data.title,
			message: "Veuillez corriger",
			type: "danger",
			insert: "top",
			container: "bottom-right",
			animationIn: ["animated", "fadeIn"],
			animationOut: ["animated", "fadeOut"],
			dismiss: { duration: 5000 },
			dismissable: { click: true },
		});
	},
};
