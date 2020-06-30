import React, { Component } from "react";

//Utils
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

export default class MultiSelect extends Component {
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
					isMulti
					closeMenuOnSelect={false}
					className={`${error ? " reactselect-invalid" : ""}`}
					id={id}
					name={id}
					options={options}
					value={value}
					onChange={change}
					placeholder={placeholder}
					isDisabled={disabled}
					components={animatedComponents}
					theme={(theme) => ({
						...theme,
						colors: {
							...theme.colors,
							primary: "rgb(255, 255, 255)",
							primary25: "rgb(40, 40, 40)",
							primary50: "rgb(70, 70, 70)",
							primary75: "rgb(100, 100, 100)",
							neutral0: "rgb(0, 0, 0)",
							neutral20: "rgb(140, 140, 140)",
							neutral30: "rgb(165, 165, 165)",
							neutral40: "rgb(180, 180, 180)",
							neutral50: "rgb(195, 195, 195)",
							neutral60: "rgb(60, 60, 40)",
							neutral70: "rgb(50, 50, 45)",
							neutral80: "rgb(40, 40, 40)",
							neutral90: "rgb(30, 30, 30)",
						},
					})}
				/>

				{this.props.error ? <div className='invalid-feedback'>{this.props.error}</div> : null}
			</div>
		);
	}
}
