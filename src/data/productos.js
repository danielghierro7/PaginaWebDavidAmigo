export const productosVenta = [
    {
        id: 'CastilloHinchable1',
        nombre: 'Castillo hinchable flotante',
        precio: '150€',
        imagen: '/toldo1.jpg', // Ajusta esta ruta si tus imágenes están en /public/images/
        url: '/productos/CastilloHinchable1' // <-- ¡AQUÍ se define la URL para este producto!
    },
    {
        id: 'CastilloHinchable1',
        nombre: 'Castillo hinchable flotante',
        precio: '150€',
        imagen: '/toldo1.jpg', // Ajusta esta ruta si tus imágenes están en /public/images/
        url: '/productos/CastilloHinchable1' // <-- ¡AQUÍ se define la URL para este producto!
    },
    {
        id: 'castillo2',
        nombre: 'Toldo Premium',
        precio: '250€',
        imagen: '/toldo2.jpg',
        url: '/productos/castillo2' // <-- ¡Y AQUÍ para este!
    },
    {
        id: 'Barredora', // ID único
        nombre: 'Barredora',
        precio: '350€',
        imagen: '/Barredeora5.jpg',
        url: '/productos/Barredora' // <-- Y así sucesivamente
    },
    {
        id: 'toroMecanico', // ID único
        nombre: 'Toro Mecanico',
        precio: '892€',
        imagen: '/toroMecanico.jpg',
        url: '/productos/toroMecanico'
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
        precio: '350€',
        imagen: '/Barredeora5.jpg',
        url: '/productos/Barredora' // <-- Y así sucesivamente
    },





]

export const productosTotales = [...productosVenta, ...productosAlquiler];
