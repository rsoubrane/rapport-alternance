const global = (state = [], action) => {
	switch (action.type) {
		case "CURRENT_PAGE":
			return action.global;
		case "EDIT_PAGE":
			return action.newPage;
		default:
			return state;
	}
};

export default global;
