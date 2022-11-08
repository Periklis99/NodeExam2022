<script>
    import {Route, Router} from "svelte-navigator";
	import Signup from "../pages/Signup.svelte";
	import Login from "../pages/Login.svelte";
	import Main from "../pages/Main.svelte";
	import Footer from "../components/Footer.svelte";
    import Products from "../pages/Products.svelte";
    import Cart from "../pages/Cart.svelte";
	import toastr from "toastr";
	import io from "socket.io-client"

	const socket = io();
	socket.on('addToCart', data =>{
		toastr.success(data.message);
	})

</script>

 <Router>
	<main>
		<Route path="/" component={Signup}/>
		<Route path="/login" component={Login}/>
		<Route path="/main" component={Main}/>
		<Route path="/products" component={Products}/>
		<Route path="/cart" component={Cart}/>
	</main>
 </Router>

 <Footer/>

<style>
	main {
		text-align: center;
		margin: 0 auto;
	}

</style>