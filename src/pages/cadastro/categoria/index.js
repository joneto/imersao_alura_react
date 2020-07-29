import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#000'
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais); //Abrindo o array

  function setValue(chave, valor) {
    //chave: nome, descricao, etc.
    setValues({
      ...values,
      [chave]: valor // nome: 'valor'
    })
  }

  function handleChage(infosDoEvento) {
    //const { getAttribute, value } = infosDoEvento.target; //extrai do 'infosDoEvento' o getAttribute e o value
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();//parar com o reload da página
        //console.log('Você tentou enviar o form, né?');
        setCategorias([
          ...categorias, //pega tudo da lista anterior 
          values
        ]);

        setValues(valoresIniciais);
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChage}
        />

        <FormField
          label="Descrição"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChage}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChage}
        />

        <div>
          <label>
            Descrição:
          <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChage}
            />
          </label>
        </div>
        <div>
          <label>
            Cor:
          <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChage}
            />
          </label>
        </div>
        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;