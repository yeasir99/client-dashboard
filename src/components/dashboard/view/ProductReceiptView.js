'use client';
import useGetData from '@/utils/useGetData';

const ProductReceiptView = ({ id }) => {
  const { status, data } = useGetData(
    `https://kblsf.site/DLogicKBL/salesforce_api.php?action=get_preceipt&ProductReceiptID=${id}`
  );

  if (status === 'pending') {
    return (
      <div className="text-xl font-semibold text-center py-5">Loading...</div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="min-w-[600px] rounded-md bg-gray-300 p-5">
        <h1 className="text-center text-xl font-semibold mb-3">
          Receipt Details
        </h1>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Receipt No:</h1>
          <h1>{data.ProductReceiptNo}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Receipt Date:</h1>
          <h1>{data.ReceiptDate}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Binding Party ID:</h1>
          <h1>{data.BindingPartyID}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Binding Party Name:</h1>
          <h1>{data.BindingPartyName}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Print Edition:</h1>
          <h1>{data.PrintEdition}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Financial YearID:</h1>
          <h1>{data.FinancialYearID}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Product Category Name:</h1>
          <h1>{data.ProductCategoryName}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Quantity:</h1>
          <h1>{data.Quantity}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Rate:</h1>
          <h1>{data.Rate}</h1>
        </div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Challan Number:</h1>
          <h1>{data.ChallanNumber}</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductReceiptView;
