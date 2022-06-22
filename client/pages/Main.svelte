<script>
    import { user } from "../src/stores"
    import { push } from "svelte-spa-router";
    import { onMount } from "svelte";
    import Navbar from "../components/Navbar.svelte"
    
    let userValue;

    function redirect(url) {
        push(url)
    }
    user.subscribe(value => {
		userValue = value;
	});
 
    async function fetchStats(){
        try{
        const response = await fetch ('https://app.sportdataapi.com/api/v1/soccer/players?apikey=7c8ff020-f174-11ec-8a36-9bc16174aee7&country_id=48&min_age=20&max_age=25')

        if(!response.ok){
            throw new Error(`Failed to fetch stats: ${response.status} `)
        }
        return response.json();
     }catch(e){
        console.log(e);
    }
    }
        let players= [];

    onMount(async() => {
        const response = await fetch ('https://app.sportdataapi.com/api/v1/soccer/players?apikey=7c8ff020-f174-11ec-8a36-9bc16174aee7&country_id=48&min_age=20&max_age=25')

        if(!response.ok){
            throw new Error(`Failed to fetch stats: ${response.status} `)
        }
       const data = await response.json();
       players = data.data;
       console.log(players);
    }

    
    )

    </script>
    <main>

      

    {#if !userValue}
        <h1>Not logged in</h1>
        <button on:click={() => redirect("/login")}>Login</button>

    {:else}
    <Navbar/>
        <h1 >Welcome {userValue.email}</h1>
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Height</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {#each players as player}
                <tr>
                    <td>{player.firstname} {player.lastname}</td>
                    <td>{player.age}</td>
                    <td>{player.height}</td>
                    <td>{player.country.name}</td>
                </tr>
                {/each}
            </tbody>


        </table> 

        
    {/if}


    </main>  
    
    
    
    <style>
    
    main{
        text-align: center;

    }

    h1{
        text-decoration: underline;
        color: rgb(158, 158, 176);
        margin-top: 9%;
    }
         
    table,td{
        border: 2px solid;
        color:#dcdf07;
    }

    table{
        margin: 0 auto;
    }
    </style>