import React, { useContext, useEffect, useState } from 'react';
import { Dna } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import Categorias from '../../../models/Categorias';
import { buscar } from '../../../service/Service';
import CardCategorias from '../cardCategorias/CardCategorias';





function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categorias[]>([]);

  let navigate = useNavigate();

  
  async function buscarCategorias() {
   
      await buscar('/categorias', setCategorias, {
       
      
    });
  }


  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      {categorias.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categorias) => (
              <>
                <CardCategorias key={categorias.id} categorias={categorias} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;