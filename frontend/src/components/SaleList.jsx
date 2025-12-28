import { useEffect, useState } from "react";
import { getSales } from "../services/api";

export default function SaleList({ refresh }) {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    getSales().then(setSales);
  }, [refresh]);

  return (
    <div>
      <h3>Ventas realizadas</h3>
      <ul>
        {sales.map(sale => (
          <li key={sale.id}>
            {sale.product.name} - Cant: {sale.quantity} - Total: S/ {sale.total}
          </li>
        ))}
      </ul>
    </div>
  );
}
