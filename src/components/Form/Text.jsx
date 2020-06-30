import React, { Component } from "react";

//Reactstrap Component
import { FormGroup, Input } from "reactstrap";

export default class InputText extends Component {
	render() {
		const {
			id,
			value,
			name,
			placeholder,
			change,
			onKeyDown,
			onKeyPress,
			disabled,
			autoComplete,
			label,
			error
		} = this.props;

		return (
			<FormGroup>
				{label ? (
					<label className={"form-control-label" + (error ? " text-danger" : "")} htmlFor={id}>
						{label}
					</label>
				) : null}
				<Input
					type='text'
					className={"form-control-alternative" + (error ? " is-invalid" : "")}
					id={id}
					value={value}
					name={name}
					placeholder={placeholder}
					onChange={change}
					onKeyDown={onKeyDown}
					onKeyPress={onKeyPress}
					disabled={disabled}
					autoComplete={autoComplete}
				/>
				{error ? <div className='invalid-feedback'>{error}</div> : null}
			</FormGroup>
		);
	}
}
