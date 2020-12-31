import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  

  const valoresIniciais = {
    nome:'',
    descricao:'',
    cor:'',
  }
  
  const [categorias,setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(chave,valor){
   setValues({
     ...values,
     [chave]:valor, // nome: 'valor'
   })
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form  onSubmit={ function handleSubmit(infoevento){
        infoevento.preventDefault();
        //console.log('infoevento',{infoevento});
        //console.log({valoresIniciais});
        //console.log(valoresIniciais);
      setCategorias([
        ...categorias,
        values      
      ]);
     setValues(valoresIniciais)
      }}>

<div>
  <div>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={values.nome}
            onChange= {function funcaoHandle (infoevento){
              setValue('nome',infoevento.target.value)
             // setNomeDaCategoria(infoevento.target.value);
            }}
          />
        </label>
        </div>
        <div>
        <label>
          Descrição:
          <textarea
            type="text"
            value={values.descricao}
            onChange= {function funcaoHandle (infoevento){
              setValue('descricao',infoevento.target.value)
             // setNomeDaCategoria(infoevento.target.value);
            }}
          />
        </label>
        </div>
        <div>
        <label>
          Cor:
          <input
            type="color"
            value={values.cor}
            onChange= {function funcaoHandle (infoevento){
              setValue('cor',infoevento.target.value)
             // setNomeDaCategoria(infoevento.target.value);
            }}
          />
        </label>
        </div>
        </div>
        <button>
          Cadastrar
        </button>
      </form>

<ul>
  {categorias.map( (categoria,ii)=> {  // o que esse .map faz ?
return(
<li key={categoria+ii}>
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