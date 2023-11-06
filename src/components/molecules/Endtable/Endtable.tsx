//* Hur får in från firebase till tabell? Samt layout på tabell med varannan färg poå

export const endTable = (
  <div className="w-5/6 h-36 mx-auto overflow-x overflow-y-scroll">
    <table className="table-auto bg-pink-300 border-collapse rounded-md divide-gray-500 content-center min-w-full">
      <thead className="bg-table-header-color border-b-2 border-gray-200 text-white sticky top-0">
        <tr>
          <th className="p-1 text-sm font-bold tracking-wide text-left">
            Namn
          </th>
          <th className="p-1 text-sm font-semibold tracking-wide text-center">
            V
          </th>
          <th className="p-1 text-sm font-semibold tracking-wide text-cecenter">
            F
          </th>
          <th className="p-1 text-sm font-semibold tracking-wide text-center">
            Rating
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-table-light-color">
          <td className="text-left">Max</td>
          <td className="text-center">14</td>

          <td className="text-center">7</td>
          <td className="text-center">1753</td>
        </tr>
        <tr className="bg-table-dark-color">
          <td className="text-left">Max</td>
          <td className="text-center">14</td>
          <td className="text-center">7</td>
          <td className="text-center">1753</td>
        </tr>
        <tr className="bg-table-light-color">
          <td className="text-left">Max</td>
          <td className="text-center">14</td>

          <td className="text-center">7</td>
          <td className="text-center">1753</td>
        </tr>
        <tr className="bg-table-dark-color">
          <td className="text-left">Max</td>
          <td className="text-center">14</td>
          <td className="text-center">7</td>
          <td className="text-center">1753</td>
        </tr>
        <tr className="bg-table-light-color">
          <td className="text-left">Max</td>
          <td className="text-center">14</td>

          <td className="text-center">7</td>
          <td className="text-center">1753</td>
        </tr>
        <tr className="bg-table-dark-color">
          <td className="text-left">Max</td>
          <td className="text-center">14</td>
          <td className="text-center">7</td>
          <td className="text-center">1753</td>
        </tr>
        <tr className="bg-table-light-color">
          <td className="text-left">Max</td>
          <td className="text-center">14</td>

          <td className="text-center">7</td>
          <td className="text-center">1753</td>
        </tr>
        <tr className="bg-table-dark-color">
          <td className="text-left">Max</td>
          <td className="text-center">14</td>
          <td className="text-center">7</td>
          <td className="text-center">1753</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default endTable;
