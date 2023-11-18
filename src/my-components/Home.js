/** @format */

//Import all dependencies, other Components
import FormCustomerDetail from "./FormCustomerDetail";
import FormRepairDetail from "./FormRepairDetail";
import FormCourtesyPhone from "./FormCourtesyPhone";
import FormCost from "./FormCost";
import FormButtons from "./FormButtons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Function Component
function Home() {
	//Parent Components
	//Bond
	const updateSharedState = (value) => setsharedBond(value); //Child1(FormCourtesyPhone) pass data to Child2
	const [sharedBond, setsharedBond] = useState(0); //Child2(FormCost) receive data from Child1
	//Bond if under warranty

	const updateWarranty = (value) => setsharedWarranty(value); //Child1(FormCourtesyPhone) pass data to Child2
	const [sharedWarranty, setsharedWarranty] = useState(false); //Child2(FormCost) receive data from Child1

	//Parent Component "Home"
	const updateCustomerType = (value) => setSharedCustomerType(value); //Child1 pass data to Child2
	const [sharedCustomerType, setSharedCustomerType] = useState(0); //Child2 receive data from Child1

	//------------------------------------------------------------------
	const navigate = useNavigate();
	const onSubmit = async (event) => {
		event.preventDefault(); //prevent browser from sending data to server
		try {
			//open the "Invoice" component
			//alert('Form was submitted!');
			navigate("/invoice");
		} catch (e) {
			alert("ERROR!!!");
		}
	};

	//Component UI: HTML Rendering
	return (
		<>
			<form class="row" style={{ minHeight: "60vh" }} onSubmit={onSubmit}>
				{/*Customer Details*/}
				<div
					class="col-12 col-lg-4 p-4 m-0 border border-dark"
					style={{ minHeight: "30vh", backgroundColor: "wheat" }}>
					<FormCustomerDetail passDataToParent={updateCustomerType} /> {/*Child1*/}
				</div>

				{/*Repair Details*/}
				<div
					class="col-12 col-lg-4 p-4 m-0 border border-dark"
					style={{ minHeight: "30vh", backgroundColor: "azure" }}>
					<FormRepairDetail passDataToParent={updateWarranty} />
				</div>

				{/*Courtesy Phone & Cost*/}
				<div class="col-12 col-lg-4 p-0 m-0">
					{/*Courtesy phone*/}
					<div class="p-4 border border-dark" style={{ minHeight: "30vh", backgroundColor: "cadetblue" }}>
						<FormCourtesyPhone passDataToParent={updateSharedState} /> {/*Child1*/}
					</div>
					{/*Cost*/}
					<div class="p-4 border border-dark" style={{ minHeight: "20vh", backgroundColor: "lightsalmon" }}>
						<FormCost
							sharedPropBond={sharedBond}
							sharedPropWarranty={sharedWarranty}
							sharedCustomerType={sharedCustomerType}
						/>
						{/*Child2*/}
					</div>
				</div>

				{/*Button area*/}
				<div
					class="p-4 text-center border border-dark"
					style={{ minHeight: "10vh", backgroundColor: "lightsalmon" }}>
					{" "}
					<FormButtons />
				</div>
			</form>
		</>
	);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default Home;
