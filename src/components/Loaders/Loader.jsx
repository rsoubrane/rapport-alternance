import React from "react";

//Assets
import loading from "../../assets/img/loading/loading-blue.gif";

export default function Loader(props) {
	return <img src={loading} alt='Loading' height='30' className={`${props.class} my-0 py-0`} />;
}
