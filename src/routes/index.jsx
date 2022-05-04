import { Routes, Route } from "react-router-dom";
import { FormCadastroCliente } from "../components/FormsCadastro";

export const RouterComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<FormCadastroCliente/>} />
      <Route path='expenses' element={<h1>teste2</h1>} />
      <Route path='invoices' element={<h1>teste3</h1>} />
    </Routes>
  );
};
