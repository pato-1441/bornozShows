const productos = [
  { id: 1, name: "Duki", price: 4500, stock: 15, category: "general", image:'https://static.eldiario.es/clip/7bf0b8ab-2bca-427b-bc46-5125bc78d274_16-9-discover-aspect-ratio_default_0.jpg' },
  { id: 2, name: "Las Pelotas", price: 4500, stock: 20, category: "platea", image:'https://www.tiempoar.com.ar/wp-content/uploads/2021/07/20210718-Las-Pelotas-2.jpg' },
  { id: 3, name: "Babasonicos", price: 6500, stock: 35, category: "platea", image:'https://indiehoy.com/wp-content/uploads/2021/12/babasonicos.jpg' },
  { id: 4, name: "Coldplay", price: 8500, stock: 45, category: "vip", image:'https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2022/10/10/16654140093290.jpg' },
  { id: 5, name: "Guns N'Roses", price: 9500, stock: 50, category: "vip", image:'https://es.rollingstone.com/wp-content/uploads/2022/03/resena-slash-4-portada.jpg'},
];

export const gFetch = () =>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(productos);
        }, 3000)
    });
};