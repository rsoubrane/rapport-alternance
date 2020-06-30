import React, { Component } from "react";

//Reactstrap Components
import { Button, InputGroup, InputGroupAddon } from "reactstrap";

//Components
import InputText from "../Form/Text";

export default class AutoComplete extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// The active selection's index
			activeSuggestion: 0,
			// The suggestions that match the user's input
			initialSuggestions: [],
			// Whether or not the suggestion list is shown
			showSuggestions: false,
			// What the user has entered
			userInput: ""
		};
	}

	componentDidMount() {
		this.init();
	}

	init = () => {
		const { suggestions, suggestionKey, selected, selectedKey } = this.props;

		let initialSuggestions = [];
		suggestions.map(suggestion => {
			let find = false;
			selected.map(select => {
				if (suggestion[suggestionKey] === select[selectedKey]) find = true;
				return find;
			});
			if (!find) initialSuggestions.push(suggestion);
			return find;
		});
		this.setState({ initialSuggestions });
	};

	getLabel = suggestion => {
		const textLabel = [];
		this.props.labelKeys.map(labelKey => {
			textLabel.push(suggestion[labelKey].toLowerCase());
			return textLabel;
		});
		return textLabel.join(" ");
	};

	handleOnChange = e => {
		const userInput = e.currentTarget.value;

		// Filter our suggestions that don't contain the user's input
		const filteredSuggestions = this.state.initialSuggestions.filter(suggestion => {
			let full_name = suggestion.first_name + " " + suggestion.last_name;
			return full_name.toLowerCase().indexOf(userInput.toLowerCase()) > -1;
		});

		this.setState({
			activeSuggestion: 0,
			filteredSuggestions,
			showSuggestions: true,
			userInput: e.currentTarget.value
		});
	};

	handleOnClick = (label, selected) => {
		this.setState({
			activeSuggestion: 0,
			filteredSuggestions: [],
			showSuggestions: false,
			userInput: label,
			selected: selected
		});
	};

	handleOnKeyDown = e => {
		const { activeSuggestion, filteredSuggestions } = this.state;

		// User pressed the enter key
		if (e.keyCode === 13) {
			if (filteredSuggestions) {
				const userInput = this.getLabel(filteredSuggestions[activeSuggestion]);
				this.setState({
					activeSuggestion: 0,
					showSuggestions: false,
					userInput,
					selected: filteredSuggestions[activeSuggestion]
				});
			}
			if (this.state.userInput.length) this.addUser();
		}
		// User pressed the up arrow
		else if (e.keyCode === 38) {
			if (activeSuggestion === 0) {
				return;
			}
			this.setState({ activeSuggestion: activeSuggestion - 1 });
		}
		// User pressed the down arrow
		else if (e.keyCode === 40) {
			if (activeSuggestion - 1 === filteredSuggestions.length) {
				return;
			}
			this.setState({ activeSuggestion: activeSuggestion + 1 });
		}
		//User pressed the esc key
		else if (e.keyCode === 27) {
			this.setState({ showSuggestions: false });
		}
	};

	addUser = () => {
		this.setState({ userInput: "" }, () => {
			this.props.addUser(this.state.selected);
		});
	};

	render() {
		const {
			handleOnChange,
			handleOnClick,
			handleOnKeyDown,
			state: { activeSuggestion, filteredSuggestions, showSuggestions, userInput }
		} = this;

		let suggestionsListComponent;

		if (showSuggestions && userInput) {
			if (filteredSuggestions.length) {
				suggestionsListComponent = (
					<ul className='suggestions'>
						{filteredSuggestions.map((suggestion, index) => {
							let label = this.getLabel(suggestion);
							return (
								<li
									className={index === activeSuggestion ? "suggestion-active" : null}
									key={index}
									onClick={() => handleOnClick(label, suggestion)}>
									{label}
								</li>
							);
						})}
					</ul>
				);
			} else {
				suggestionsListComponent = (
					<div className='no-suggestions'>
						<em>Aucun utilisateur trouvé !</em>
					</div>
				);
			}
		}

		return (
			<div className='autocomplete'>
				<InputGroup>
					<InputText
						className='input_text'
						id={"autocomplete"}
						name={"autocomplete"}
						value={userInput}
						change={handleOnChange}
						onKeyDown={handleOnKeyDown}
						placeholder={this.props.placeholder}
					/>

					<InputGroupAddon addonType='append'>
						<Button onClick={() => this.addUser()} color='primary'>
							+
						</Button>
					</InputGroupAddon>
				</InputGroup>
				{suggestionsListComponent}
			</div>
		);
	}
}
