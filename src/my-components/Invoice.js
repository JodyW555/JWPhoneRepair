/** @format */
// Don't really understand how to get this to work
import FormCourtesyPhone from "./FormCourtesyPhone";
import { useState } from "react";

//Function Component
function Invoice(props) {
	//Component UI: HTML Rendering
	return (
		<>
			<div style={{ minHeight: "60vh" }}>
				<h1>Repair Booking</h1>
			</div>
			<div class="row mt-2 p-0">
				<div class="col-9">
					<h2>Customer</h2>
				</div>
				<div class="col-3">
					<h2>Repair Job</h2>
				</div>
				<line></line>
			</div>
			<div class="row mt-2 p-0">
				<h2>Repair Details</h2>

				<h2>Courtesy Device Details</h2>
				{/*DOESN'T WORK!!!
				<table class="table table-bordered" id="borrowItems">
					<tr>
						<td>Item</td>
						<td>Cost</td>
					</tr>
					Display all items in the state in the table
					{phoneBorrow === 0 ? null : (
						<tr>
							<td>
								{
									courtesyList.filter((item) => {
										return item.id === phoneBorrow;
									})[0].name
								}
							</td>{" "}
							<td>
								{
									courtesyList.filter((item) => {
										return item.id === phoneBorrow;
									})[0].bond
								}
							</td>
						</tr>
					)}
					{chargerBorrow === 0 ? null : (
						<tr>
							<td>
								{
									courtesyList.filter((item) => {
										return item.id === chargerBorrow;
									})[0].name
								}
							</td>{" "}
							<td>
								{
									courtesyList.filter((item) => {
										return item.id === chargerBorrow;
									})[0].bond
								}
							</td>
						</tr>
					)}
                            </table>
							*/}
			</div>

			<div class="row mt-2 p-0">
				<div class="col-9">
					<></>
				</div>
				<div class="col-3">
					<h2>Totals</h2>
					{/*
					<p>Bond: {bond}</p>
					<p>Service Fee: {servicefee}</p>
						*/}
				</div>
				<line></line>
			</div>
		</>
	);
}

//Export this component to the entire app, can be re-used or hooked into other Components
export default Invoice;
