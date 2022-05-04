import React, { useState } from "react";

export const FormCadastroCliente = () => {
  const [cliente, setCliente] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleCliente = (e) => {
    const nomeCliente = e.target.value;
    setCliente(nomeCliente);
  };

  const handleCategoria = (e) => {
    const nomeCliente = e.target.value;
    setCategoria(nomeCliente);
  };

  const handleForm = () => {
    if (cliente.length <= 0) {
      alert("nome do cliente deve estar preenchido");
      return;
    }

    if (categoria.length <= 0) {
      alert("categoria deve estar preenchida");
      return;
    }

    console.log(cliente, categoria);
  };

  const styledForm = {
    color: "whitesmoke",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flexWrap: "wrap",
    alignContent: "center",
  };

  return (
    <div id='main' style={styledForm}>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Nome Cliente
        </label>
        <input
          type='text'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          placeholder='Informe o nome do cliente'
          required
          onChange={handleCliente}
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Categoria
        </label>

        <select
          className='form-select'
          aria-label='Default select example'
          onChange={handleCategoria}
        >
          <option value='SELECIONE'>Selecione uma categoria</option>
          <option value='BLACK_LIST'>Black List</option>
          <option value='VIP'>VIP</option>
          <option value='ESTRATEGICO'>Estratégico</option>
        </select>
      </div>

      <button type='button' className='btn btn-primary' onClick={handleForm}>
        Cadastrar
      </button>
    </div>
  );
};
