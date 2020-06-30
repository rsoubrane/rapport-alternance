import React, { Component } from "react";

//Reactstrap Component
import { FormGroup, Input } from "reactstrap";

export default class InputTextArea extends Component {
	render() {
		const {
			id,
			value,
			name,
			placeholder,
			rows,
			maxLength,
			change,
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
					type='textarea'
					className={"form-control-alternative" + (error ? " is-invalid" : "")}
					value={value}
					id={id}
					name={name}
					rows={rows}
					maxLength={maxLength}
					placeholder={placeholder}
					onChange={change}
					disabled={disabled}
					autoComplete={autoComplete}
				/>
				{error ? <div className='invalid-feedback'>{error}</div> : null}
			</FormGroup>
		);
	}
}
