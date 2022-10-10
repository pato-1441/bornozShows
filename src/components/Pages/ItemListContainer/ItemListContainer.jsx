import { useEffect, useState } from "react";
import { gFetch } from "../../../../helpers/gFetch";


const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
      gFetch() // simulacion de fetch -> mock
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
      .finally(()=>console.log('Finalizo la promesa'))

  }, []);



  return (
    <div className='text-center text-3xl'>{greeting}</div>
  );
};

export default ItemListContainer;