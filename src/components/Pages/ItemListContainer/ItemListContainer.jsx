import { useEffect, useState } from "react";
import { gFetch } from "../../../../helpers/gFetch";


const ItemListContainer = ({greeting}) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
      gFetch() // simulacion de fetch -> mock
      .then(res=>setProductos(res))
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
  }, []);

  console.log(productos)
  return (
      <>
          <h1 className='text-center text-3xl py-4'>{greeting}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            { loading ?
                <button className="btn loading bg-inherit border-none">loading</button>
                  :
                productos.map(prod=>  <div key={prod.id} >
                                        <div className="card card-compact w-64 bg-base-100 shadow-xl">
                                        <figure><img src={prod.image}/></figure>
                                        <div className="card-body">
                                          <h2 className="card-title">{prod.name}</h2>
                                          <p>{prod.price}</p>
                                          <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Comprar</button>
                                          </div>
                                        </div>
                                      </div>
                                      </div>,
                                      
                                      {/* <div key={prod.id} className="card card-compact w-96 bg-base-100 shadow-xl">
                                        <figure><img src={prod.image}/></figure>
                                        <div className="card-body">
                                          <h2 className="card-title">{prod.name}</h2>
                                          <p>{prod.price}</p>
                                          <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                          </div>
                                        </div>
                                      </div> */}
                              )
            }
          </div>
      </>

  );
};

export default ItemListContainer;