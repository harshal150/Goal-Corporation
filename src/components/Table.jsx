import React from 'react'

const Table = () => {
  return (
    <div className='mx-72 border border-blue-600'>
      <div class="bg-white shadow-md rounded-lg overflow-hidden">
  <table class="min-w-full leading-normal">
    <thead>
      <tr className="">
        <th class="px-5 py-3 border-b-2 border-indigo-600 text-left text-sm font-semibold text-blue-600 uppercase tracking-wider">
          Particulars
        </th>
        <th class="px-5 py-3 border-b-2 border-indigo-600 text-left text-sm font-semibold text-blue-600 uppercase tracking-wider">
          Charges
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-gray-50">
        <td class="px-5 py-5 border-b border-gray-200 text-sm">
          <span class="font-bold text-gray-900">Loan Processing Fees</span>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 text-sm">
          0.5% to 4% of Loan Amount
        </td>
      </tr>
      <tr>
        <td class="px-5 py-5 border-b border-gray-200 text-sm">
          <span class="font-bold text-gray-900">Loan Cancellation</span>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 text-sm">
          Usually 3000 to 5% of Loan Amount
        </td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-5 py-5 border-b border-gray-200 text-sm">
          <span class="font-bold text-gray-900">Stamp Duty Charges</span>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 text-sm">
          As per the Value of the Property and State Tax
        </td>
      </tr>
      <tr>
        <td class="px-5 py-5 border-b border-gray-200 text-sm">
          <span class="font-bold text-gray-900">Legal Fees</span>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 text-sm">
          As per actual
        </td>
      </tr>
      <tr class="bg-gray-50">
        <td class="px-5 py-5 border-b border-gray-200 text-sm">
          <span class="font-bold text-gray-900">Penal Charges</span>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 text-sm">
          Usually 2% per month
        </td>
      </tr>
      <tr>
        <td class="px-5 py-5 border-b border-gray-200 text-sm">
          <span class="font-bold text-gray-900">EMI / Cheque Bonus</span>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 text-sm">
          Approx 499/- to 599/-
        </td>
      </tr>
    </tbody>
  </table>
</div>

    </div>
  )
}

export default Table
