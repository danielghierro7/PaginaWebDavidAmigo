export const productosVenta = [
    {
        id: 'CastilloHinchable1',
        nombre: 'Castillo hinchable flotante',
        precio: '150€',
        imagen: '/toldo1.jpg', // Ajusta esta ruta si tus imágenes están en /public/images/
        url: '/productos/CastilloHinchable1' // <-- ¡AQUÍ se define la URL para este producto!
    },
    {
        id: 'CastilloMario',
        nombre: 'Castillo De Mario Bros',
        precio: '170€',
        imagen: '/CastilloMarioBros.jpg', // Ajusta esta ruta si tus imágenes están en /public/images/
        url: '/productos/CastilloMario' // <-- ¡AQUÍ se define la URL para este producto!
    },
    {
        id: 'castillo2',
        nombre: 'CastilloAcuaticoPremium',
        precio: '250€',
        imagen: '/toldo2.jpg',
        url: '/productos/castillo2', // <-- ¡Y AQUÍ para este!
        video: '/torovideo.mp4'
    },
    {
        id: 'Barredora', // ID único
        nombre: 'Barredora',
        precio: '350€',
        imagen: '/Barredeora5.jpg',
       url:'/productos/Barredora',
        video: '/torovideo.mp4'// <-- Y así sucesivamente
    },
    {
        id: 'CastilloPepaPig', // ID único
        nombre: 'Castillo Pepa Pig',
        precio: '200€',
        imagen: '/pepa-pig.jpg',
        url: '/productos/CastilloPepaPig'
    },


    {
        id: 'toroMecanico', // ID único
        nombre: 'Toro Mecanico',
        precio: '892€',
        imagen: '/toroMecanico.jpg',
        url: '/productos/toroMecanico'
    }
];

export const productosAlquiler =[
    {
        id: 'Barredora', // ID único
        nombre: 'Barredora',
        precio: '50€ el dia; consulte para mas ver',
        imagen: '/Barredeora5.jpg',
        url: '/productos/Barredora',
        video: '/torovideo.mp4'//// <-- Y así sucesivamente
    },





]

export const productosTotales = [...productosVenta, ...productosAlquiler];
