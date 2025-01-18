const ReceiptSingleView = ({ viewableData }) => {
  if (viewableData.status === 'pending') {
    return (
      <div className="text-xl font-semibold text-center py-5">Loading...</div>
    );
  }
  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="min-w-[600px] rounded-md bg-gray-200 p-5">
            <h1 className="text-center text-xl font-semibold mb-3">
              Collection Information
            </h1>
            {viewableData.data === null ? (
              <div className="text-center text-xl font-semibold py-5">
                No Data to Display
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg">Receipt Number:</h1>
                  <h1>{viewableData.data.receipt.MRNo}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg">Receipt Date:</h1>
                  <h1>{viewableData.data.receipt.MRDate}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg">Party Name:</h1>
                  <h1>{viewableData.data.receipt.PartyName}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg">Received Amount:</h1>
                  <h1>{viewableData.data.receipt.AmountReceived}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg">Payment Method:</h1>
                  <h1>{viewableData.data.receipt.PaymentMethod}</h1>
                </div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg">Payment Method Details:</h1>
                  <h1>{viewableData.data.receipt.PaymentMethodDetails}</h1>
                </div>
                {viewableData.data.receipt.PaymentMethodDetailsAcc && (
                  <div className="flex items-center gap-2">
                    <h1 className="text-lg">Account Number:</h1>
                    <h1>{viewableData.data.receipt.PaymentMethodDetailsAcc}</h1>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiptSingleView;
