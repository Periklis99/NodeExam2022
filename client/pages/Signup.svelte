<script>
    import axios from "axios";
    import {push} from "svelte-spa-router";
    import toastr from "toastr"
    
    let email;
    let password;
    
    async function handleSignup() {
        try {
          const { data } = await axios.post("http://localhost:3536/api/auth/signup", {
            email,
            password,
          });
          toastr.success('Email registered, Now Login')
          push("/login");
        } catch (error) {
          console.log(error.response.data.message)
          if (error.response.data.message === "UserExistsError") {
          email = "";
          password = "";
          toastr.warning('Email Already in use')
    
        }
      }
      }
    
    
    </script>
    
    <main>
      
      <h1>The Stats</h1>
        
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
                <input type="submit" value="Submit" />
              </div>
          </div>
    
      
      
          </form>
        </div>
    
    </main>
    
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