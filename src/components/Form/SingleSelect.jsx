import React, { Component } from "react";

//Utils
import Select, { components } from "react-select";

const { Option } = components;
const IconOption = props => (
	<Option {...props} className='inline-block'>
		<div className='select2-icon float-left'>{props.data.icon}</div>
		{props.data.label}
	</Option>
);

export default class SingleSelect extends Component {
	render() {
		const { options, id, value, change, placeholder, disabled, label, error } = this.props;

		return (
			<div className='form-group select2'>
				{label ? (
					<label className={"form-control-label" + (error ? " text-danger" : "")} htmlFor={id}>
						{label}
					</label>
				) : null}

				<Select
					className={`${error ? " reactselect-invalid" : ""}`}
					id={id}
					name={id}
					options={options}
					value={value}
					onChange={change}
					placeholder={placeholder}
					isDisabled={disabled}
					components={{ Option: IconOption }}
				/>

				{this.props.error ? <div className='invalid-feedback'>{this.props.error}</div> : null}
			</div>
		);
	}
}
