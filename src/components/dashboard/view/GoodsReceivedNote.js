'use client';
const GoodsReceivedNote = () => {
  const handlePrint = () => {
    const printContent = document.getElementById('print-area');
    const newWindow = window.open('', '_blank', 'width=800,height=600');
    newWindow.document.write(`
        <html>
          <head>
            <title>Print</title>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <style>
              body {
                margin: 0;
                padding: 20px;
                font-family: sans-serif;
              }
            </style>
          </head>
          <body>
            <div>${printContent.innerHTML}</div>
          </body>
        </html>
      `);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div>
      <button
        onClick={handlePrint}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Print
      </button>
      <div
        id="print-area"
        className="p-8 bg-white text-black w-full max-w-4xl mx-auto border border-gray-300"
      >
        <div>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Kazal Brothers Ltd.</h1>
            <p>Dr. Nawab Ali Tower, 6th floor,</p>
            <p>24 Puran Paltan, Dhaka-1000.</p>
            <p>Phone : 088-02-9515301, 088-02-9515302.</p>
            <h2 className="text-xl font-semibold underline mt-4">
              Goods Received Note
            </h2>
          </div>

          {/* Supplier Info */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p>
                <span className="font-semibold">Supplier Name:</span>
              </p>
              <p>
                <span className="font-semibold">Supplier Challan No.:</span>
              </p>
              <p>
                <span className="font-semibold">Supplier Address:</span>
              </p>
              <p>
                <span className="font-semibold">Phone No.:</span>
              </p>
            </div>
            <div className="text-right">
              <p>
                <span className="font-semibold">Date:</span>
              </p>
              <p>
                <span className="font-semibold">GRN No.:</span>
              </p>
            </div>
          </div>

          {/* Table */}
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Books Name</th>
                <th className="border border-gray-300 p-2">Quantity (Pcs.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">
                  Primary-School
                </td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  অনুপম প্রথম বিভাগ সম (তৃতীয় শ্রেণি)
                </td>
                <td className="border border-gray-300 p-2">500</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  অনুপম একরেস বিভাগ সম (তৃতীয় শ্রেণি)
                </td>
                <td className="border border-gray-300 p-2">1,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">
                  High-School
                </td>
                <td className="border border-gray-300 p-2">7,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">
                  SSC-Compulsory
                </td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  অনুপম মাধ্যমিক বাংলা (১ম ও ২য়)
                </td>
                <td className="border border-gray-300 p-2">10,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  অনুপম মাধ্যমিক ইংলিশ ফর টুডে
                </td>
                <td className="border border-gray-300 p-2">9,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">
                  SSC-Commerce
                </td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  অনুপম মাধ্যমিক হিসাববিজ্ঞান
                </td>
                <td className="border border-gray-300 p-2">5,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  অনুপম মাধ্যমিক ফিন্যান্স ও ব্যাংকিং
                </td>
                <td className="border border-gray-300 p-2">6,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold">
                  HSC Series
                </td>
                <td className="border border-gray-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  বাংলা (প্রথম পত্র) সৃজনশীল ও সাহিত্য পাঠ একাদশ-দ্বাদশ শ্রেণি
                </td>
                <td className="border border-gray-300 p-2">2,000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">
                  এইচ.এস.সি কম্পিউটারিক্স ইংলিশ মডেল কোয়েশ্চেন (প্রথম পত্র)
                </td>
                <td className="border border-gray-300 p-2">1,500</td>
              </tr>
            </tbody>
          </table>

          {/* Footer */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="text-center">
              <p className="font-semibold">Prepared By</p>
              <p>Mr. XYZ</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">Verified By</p>
              <p>Mr. ABC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsReceivedNote;
