<script>
	import Router from "svelte-spa-router";
	import Signup from "../pages/Signup.svelte";
	import Login from "../pages/Login.svelte";
	import Home from "../pages/Home.svelte";
	import Main from "../pages/Main.svelte"
	
	
	const routes = {
	"/" : Home,
	"/signup" : Signup,
	"/login" : Login,
	"/main" : Main,
	
	
	};
	
	</script>
	<Router {routes} />
	
	<style>
	
	
	</style>