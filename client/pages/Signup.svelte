<script>
    import toastr from "toastr"
    import {navigate} from "svelte-navigator"
    
    let email;
    let password;

async function handleSignup() {
          const data = await fetch("http://localhost:3000/api/signup", {
            method : "POST",
            headers: {
              "Content-Type":"application/json"
            },
            body: JSON.stringify({
              email,password
            })
          });
          toastr.success('Email registered, Enjoy')
          navigate("/main")
        
        }
      
</script>

  
  <h1>The Football store</h1>
    
    <h2>Sign Up</h2>  

    <div id="room">
      <form on:submit|preventDefault={handleSignup}>
      
              
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
    text-align: center;
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