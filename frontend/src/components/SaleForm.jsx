import { useEffect, useState } from "react";
import { getProducts, createSale } from "../services/api";

export default function SaleForm({ onSaleCreated }) {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createSale({
      product_id: productId,
      quantity: quantity
    });

    setQuantity(1);
    onSaleCreated();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Registrar venta</h3>

      <select
        value={productId}
        onChange={e => setProductId(e.target.value)}
        required
      >
        <option value="">Seleccione producto</option>
        {products.map(p => (
          <option key={p.id} value={p.id}>
            {p.name} - S/ {p.price}
          </option>
        ))}
      </select>

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />

      <button type="submit">Vender</button>
    </form>
  );
}
