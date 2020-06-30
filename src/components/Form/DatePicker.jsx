import React, { Component } from "react";

//Utils
import DateTime from "react-datetime";

export default class DatePicker extends Component {
	render() {
		const { id, name, change, placeholder, value, defaultValue, valid, label, error } = this.props;

		return (
			<div className='form-group select2'>
				{label ? (
					<label className={`datepicker form-control-label ${error ? " text-danger" : ""}`} htmlFor={id}>
						{label}
					</label>
				) : null}

				<DateTime
					className={`datepicker form-control-alternative ${error ? " is-invalid" : ""}`}
					inputProps={{
						placeholder,
						name,
						id,
					}}
					value={value}
					defaultValue={defaultValue}
					locale='fr-fr'
					isValidDate={valid}
					onChange={change}
					dateFormat={"DD/MM/YYYY"}
					timeFormat={false}
				/>

				{error ? <div className='invalid-feedback'>{error}</div> : null}
			</div>
		);
	}
}
