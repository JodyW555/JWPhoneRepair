/** @format */

//Import all dependencies, other Components
import { useState } from "react";

//Function Component
function FormCost(props) {
	//Declare multiple "state" variables: "bond" and "serviceFee"
	const [bond, setBond] = useState(0);
	const [serviceFee, setServiceFee] = useState(85);

	//Event handling
	const bondUpdate = (event) => {
		setBond(event.target.value);
	};
	const feeUpdate = (event) => {
		setServiceFee(event.target.value);
	};

	//Component UI: HTML Rendering
	return (
		<>
			<h2>Cost</h2>
			<div class="row mt-2  ms-3">
				<label class="col-12 col-md-12 col-lg-4">Bond ($)</label>
				<input
					class="col-12 col-md-12 col-lg-7"
					type="number"
					onChange={bondUpdate}
					value={props.sharedPropBond * props.sharedCustomerType}
					readonly
				/>
			</div>
			<div class="row mt-1  ms-3">
				<label class="col-12 col-md-12 col-lg-4">Service Fee ($)</label>
				<input
					class="col-12 col-md-12 col-lg-7"
					type="number"
					onChange={feeUpdate}
					value={props.sharedPropWarranty ? 0 : 85}
					readonly
				/>
			</div>
			<div class="row mt-1  ms-3">
				<label class="col-12 col-md-12 col-lg-4">Total ($)</label>
				<input
					class="col-12 col-md-12 col-lg-7"
					type="number"
					id="totalFee"
					value={props.sharedCustomerType * (props.sharedPropBond + (props.sharedPropWarranty ? 0 : 85))}
					readonly
				/>
			</div>
			<div class="row mt-1  ms-3">
				<label class="col-12 col-md-12 col-lg-4">GST ($)</label>
				<input
					class="col-12 col-md-12 col-lg-7"
					type="number"
					value={(0.15 * (Number(bond) + Number(serviceFee))).toFixed(2)}
					readonly
				/>
			</div>
			<div class="row mt-1  ms-3">
				<label class="col-12 col-md-12 col-lg-4">Total (+GST) ($)</label>
				<input
					class="col-12 col-md-12 col-lg-7"
					type="number"
					value={(1.15 * (Number(bond) + Number(serviceFee))).toFixed(2)}
					readonly
				/>
			</div>
		</>
	);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default FormCost;
