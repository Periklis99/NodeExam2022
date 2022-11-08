<script>
  import toastr from "toastr"
  import {navigate} from "svelte-navigator"

    let email;
    let password;

async function handleLogin() {
          const response = await fetch("http://localhost:3000/api/login", {
            method : "POST",
            headers: {
              "Content-Type":"application/json"
            },
            body: JSON.stringify({
              email,password
            })
          });
          if(response.ok){
          navigate("/main")
          toastr.success('You are logged in, enjoy')
            }else {
              const data = await response.json()
        
              toastr.success(data.error)
            }
            
          
}
</script>
    <h1>The Football Store</h1>
    
    <h2>Login</h2>
    
    <div id="room">
      <form on:submit|preventDefault={handleLogin}>
      
              
        <div>
          <p>Email</p>
            <input class="input" type="text" bind:value={email} required placeholder="youremail@email.com">
         </div>
  
        <div>
          <p>Password</p>
            <input class="input" type="password" bind:value={password} placeholder="******" required>
        </div>
   
        <div>
            <div class="button">
              <button type="submit" value="Submit" >Submit</button>
            </div>
        </div>
  
      </form>
    </div>
  <style>
    #room {
      display: flex;
      justify-content: center;
    }

    h1{
      text-decoration: underline;
      color: #dcdf07;
      font: 60px Arial, Helvetica, sans-serif;
    }

    h2{
      text-decoration: underline;
      color: rgb(26, 163, 255);
      font-size: 32px;
      text-align: center;
    }

    p{
      color:black;
      text-align: center;
    }
    

    div.button{
      position: fixed;
      top: 71%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
    
    </style>