import loader from './componets/loader.js'
import showMenu from './componets/showMenu.js'
import showCart from './componets/showCart.js'
import products from './componets/products.js'
import getProducts from './helpers/getProducts.js'
import cart from './componets/cart.js'
import darkmode from './componets/darkmode.js'

/* UI Elemments*/
/* ocultar loader*/
loader()
/* mostrar menu*/
showMenu()
/* Mostrar Carrito*/
showCart()

/* END UI Elements*/

/* Products*/
const {db,printProducts} = products(await getProducts())
/*Carrito*/
cart(db,printProducts)
// Dark Mode
darkmode()
