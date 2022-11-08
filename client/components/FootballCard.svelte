<script>
import { onMount } from 'svelte';
import {
      Card,
      CardTitle,
      CardSubtitle,
      Divider, Button
   } from 'svelte-materialify';
import { navigate } from 'svelte-navigator';
import io from "socket.io-client"

   
   let socket;
   let items = [];

   onMount(async () => {
    socket = io();
    const response = await fetch("http://localhost:3000/api/items")
  
    if (!response.ok) {
      navigate("/");
      return;
    }
    items = await response.json();
   })

   const handleAddToCart = (item_id,itemName) => {

    fetch("http://localhost:3000/api/cart",{
      method : "POST",
      headers: {
          "Content-Type":"application/json"
      },
      body: JSON.stringify({
          item_id
      })
    })
      socket.emit('addToCart',{itemName})
   }

  </script>
  
  <div class="display">
    <div class="cards">
      {#each items as item}
        
      
      <Card>
       <img class="image" src={item.image_url} alt="background" />
       <CardTitle>{item.name}</CardTitle>
       <CardSubtitle>{item.description}</CardSubtitle>
          <Divider />
          <div class="price">
            Price: {item.price} DK
          </div>
            <div class="button">
            <Button text on:click={()=> handleAddToCart(item.id, item.name)}>Add to cart</Button> 
            </div>
      </Card>
      {/each}
    </div>
    </div>
    

    <style>
      div.cards{
        width: 100%;
        justify-content: space-around;
        display: flex;
        margin: 10px auto;
        
      }

      .image{
        max-width: 200px;
        max-height: 200px;
      }
      div.price{
        text-align: center;
      }

      div.button{
        margin:auto;
        text-align: center;
      }
      div.display{
        width: 100%;
        text-align: center;
        
      }

    </style>

    
 