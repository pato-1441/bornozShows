const productos = [
  {
    id: "1",
    name: "Duki",
    price: 4500,
    stock: 15,
    category: "general",
    description:
      "Duki viene escribiendo una gran historia para el movimiento argentino, con pasos firmes que llenan de orgullo dejando la bandera de la música nacional bien arriba. Le toca a Duki marcar un suceso sin precedentes.",
    image:
      "https://static.eldiario.es/clip/7bf0b8ab-2bca-427b-bc46-5125bc78d274_16-9-discover-aspect-ratio_default_0.jpg",
  },
  {
    id: "2",
    name: "Las Pelotas",
    price: 4500,
    stock: 20,
    category: "platea",
    description:
      "La banda regresa a Rosario con un show eléctrico para recorrer los mejores temas de la banda. Una noche ideal para reencontrarse con una de las clásicas bandas del rock nacional.",
    image:
      "https://www.tiempoar.com.ar/wp-content/uploads/2021/07/20210718-Las-Pelotas-2.jpg",
  },
  {
    id: "3",
    name: "Babasonicos",
    price: 6500,
    stock: 35,
    category: "platea",
    description:
      "Babasonicos Bye Bye es el último single de Babasónicos. Una fantasía bailable, impregnada de sexualidad, donde el placer de lo efímero se vuelve refugio temporal en un mundo apocalíptico, paradójicamente perdido a merced de lo superficial.",
    image: "https://indiehoy.com/wp-content/uploads/2021/12/babasonicos.jpg",
  },
  {
    id: "4",
    name: "Coldplay",
    price: 8500,
    stock: 45,
    category: "vip",
    description:
      "El regreso de Coldplay a la Argentina se ha convertido en un fenómeno de proporciones épicas.",
    image:
      "https://e00-ar-marca.uecdn.es/claro/assets/multimedia/imagenes/2022/10/10/16654140093290.jpg",
  },
  {
    id: "5",
    name: "Guns N'Roses",
    price: 9500,
    stock: 50,
    category: "vip",
    description:
      "¡Esperado regreso! Gun's N Roses confirmó su vuelta a Argentina en el marco del tour mundial “South American Tour”. Producido por  DF Entertainment, Mercury y Ake Music, la banda tocará el viernes 30 de septiembre en el Estadio River Plate.",
    image:
      "https://es.rollingstone.com/wp-content/uploads/2022/03/resena-slash-4-portada.jpg",
  },
];

export const gFetch = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(id ? productos.filter((prod) => prod.id === id) : productos);
    }, 1000);
  });
};
