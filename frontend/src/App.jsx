import { useState } from "react";
import SaleForm from "./components/SaleForm";
import SaleList from "./components/SaleList";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>Sistema de Ventas</h1>

      <SaleForm onSaleCreated={() => setRefresh(!refresh)} />
      <SaleList refresh={refresh} />
    </div>
  );
}

export default App;
