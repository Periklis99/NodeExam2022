<script>
    import MainNav from "../components/MainNav.svelte";
    import {onMount} from "svelte"
    import { Button } from "svelte-materialify";

    let cart = [];

    onMount(async () => {
       await fetchCart();
    })

    async function deleteItem(cart_id) {
        const response = await fetch("http://localhost:3000/api/cart", {
            method : "DELETE",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({cart_id})
        });
        if(response.ok)
            await fetchCart();

    }

    async function fetchCart() {
        const response = await fetch("http://localhost:3000/api/cart");
        if (!response.ok) {
            navigate("/");
            return;
        }
        cart = await response.json();
    
    }

    
</script>

  <MainNav/>
    
<h1>Ckeck out your cart</h1>

<div class="cart">
    {#each cart as item}
        <div class="item">
            <img class="image" src={item.image_url} alt={item.name}/>
            <div class="description">
                <p class="itemName">Name: {item.name}</p>
                <p class="itemPrice">Price: {item.price}</p>
            </div>
            <Button text on:click={() => deleteItem(item.cart_id)}>Delete</Button>
        </div>
    {/each}

</div>


<style>

.description{
    font-weight: bold;

}

.cart{
    margin:30px 5%;
}

.item{
    display:flex;
    align-items: center;
    margin: 0 10px;
    width:45%;
    justify-content: space-between;
    
}

.item:nth-child(even) {
    background-color: rgb(159, 201, 235);
}

.image{
    width: 150px;
    height:100px;
    object-fit:contain;
    
}

</style>
