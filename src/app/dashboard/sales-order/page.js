"use client";
import Link from "next/link";
import SaleOrderList from "@/components/dashboard/SaleOrderList";
import { useState } from "react";
import Specimen from "@/components/dashboard/Specimen";
import useGetData from "@/utils/useGetData";

const page = () => {
	const [current, setCurrent] = useState("sales");
	const [salesOrderList, setsalesOrderList] = useState([]);
	const [spacimenOrderList, setSpacimenOrderList] = useState([]);

	const salesOrderListdata = useGetData(
		"https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_salesorders"
	);
	const spacimenOrderListdata = useGetData(
		"https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_specimenorders"
	);
	setsalesOrderList(salesOrderListdata.data);
	setSpacimenOrderList(spacimenOrderListdata.data);

	return (
		<div>
			<div className='flex gap-8 items-center mb-5'>
				<h1 className='text-2xl capitalize'>
					{current === "sales" ? "sales order list" : "Speciman Order List"}
				</h1>
				<div className='flex gap-4'>
					<div
						className='flex gap-2 items-center'
						onClick={() => {
							if (current !== "sales") {
								setCurrent("sales");
							}
						}}
					>
						<input
							id='sales'
							type='checkbox'
							checked={current === "sales"}
							className='rounded-full'
						/>
						<label
							className={`${
								current === "sales" ? "text-xl font-semibold" : "text-xl"
							}`}
							htmlFor='sales'
						>
							Sales Order
						</label>
					</div>
					<div
						className='flex gap-2 items-center'
						onClick={() => {
							if (current !== "speciman") {
								setCurrent("speciman");
							}
						}}
					>
						<input
							id='speciman'
							type='checkbox'
							checked={current === "speciman"}
							className='rounded-full'
						/>
						<label
							className={`${
								current === "speciman" ? "text-xl font-semibold" : "text-xl"
							}`}
							htmlFor='speciman'
						>
							Speciman Order
						</label>
					</div>
				</div>
			</div>
			<div className='flex justify-between items-center'>
				{current === "sales" ? (
					<Link href='/dashboard/sales-order/add/sales'>
						<button className='capitalize bg-primary px-2 py-1 text-white rounded-md'>
							Add Sales Order
						</button>
					</Link>
				) : (
					<Link href='/dashboard/sales-order/add/speciman'>
						<button className='capitalize bg-primary px-2 py-1 text-white rounded-md'>
							Add Speciman Order
						</button>
					</Link>
				)}

				<form>
					<input
						name='search'
						type='text'
						placeholder='Search'
						className='text-md outline-1 border-1 focus:ring-0 rounded-md w-[300px] text-sm'
					/>
				</form>
			</div>
			{current === "sales" ? (
				salesOrderListdata.status === "pending" ? (
					<div className='text-xl font-semibold text-center py-6'>
						...loading
					</div>
				) : (
					<SaleOrderList salesOrderList={salesOrderList} />
				)
			) : spacimenOrderListdata.status === "pending" ? (
				<div className='text-xl font-semibold text-center py-6'>...loading</div>
			) : (
				<Specimen spacimenOrderList={spacimenOrderList} />
			)}
		</div>
	);
};

export default page;
