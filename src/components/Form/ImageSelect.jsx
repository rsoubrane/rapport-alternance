import React, {Component} from "react";

//Reactstrap Components
import {Row, Col, FormGroup, Label} from "reactstrap";

//Utils
import ReactDropzone from "react-dropzone";

//Images
import logoFree from "../../assets/img/free/Logo Free.png";

export default class ImageSelect extends Component {
	state = {
		image: "",
		upload: "",
		file: null,
	};

	componentDidMount() {
		if (this.props.image) this.setState({image: this.props.image});
	}

	componentDidUpdate(prevProps) {
		if (prevProps.image !== this.props.image)
			this.setState({
				image: this.props.image,
				upload: "",
				file: null,
			});
	}

	onPreviewDrop = (files) => {
		if (files.length) {
			let reader = new FileReader();
			reader.onload = (e) => {
				this.setState({
					file: e.target.result,
					upload: e.target.result,
				});
				this.props.returnImage(e.target.result);
			};
			reader.readAsDataURL(files[0]);
		} else
			alert("Veuillez insérer une Image");
	};

	render() {
		const {file, image, upload} = this.state;

		const previewStyle = {
			display: "block",
			maxWidth: 250,
			maxHeight: 150,
		};

		return (
			<Row>
				{file || image ?
					<Col xs='5'>
						<FormGroup>
							<Label className='form-control-label'>{this.props.label}</Label>
							<img
								alt='Preview'
								src={image ? `data:${image.type};base64, ${image.base_64}` : upload ? upload : logoFree}
								style={previewStyle}
							/>
						</FormGroup>
					</Col> : null}
				<Col xs={file || image ? 7 : 12}>
					<FormGroup>
						<label className='form-control-label' htmlFor='input-username'>
							Changer d'image
						</label>
						<div className='app'>
							<ReactDropzone accept='image/*' onDrop={this.onPreviewDrop}>
								{({getRootProps, getInputProps}) => (
									<section className='drop_csv'>
										<div className='drop_csv_enter' {...getRootProps()}>
											<div className='drop_csv_border'>
												<input {...getInputProps()} />
												<span className='fa fa-cloud-upload-alt'/>
												<strong>DRAG & DROP</strong>
												<button onClick={(e) => e.preventDefault()}>OU SELECTIONNER</button>
											</div>
										</div>
									</section>
								)}
							</ReactDropzone>
						</div>
					</FormGroup>
				</Col>
			</Row>
		);
	}
}
