<script>
    import { user } from "../src/stores"
    import axios from "axios";
    import{ push } from "svelte-spa-router";
    import toastr from "toastr"
    
    async function logout() {
        try {
          const { data } = await axios.post("http://localhost:3536/api/auth/logout", {
          });
          
          $user = null
          console.log(data)
          toastr.success("Logged out")
          push("/");
        
        } catch (error) {
          console.log(error)
        }
      }
    </script>
    
    <div on:click= {logout}>Logout</div>

    <style>

      div{
        font-size:20px;
        color: #dcdf07;
      }

    div:hover{
      font-size: 30px;
      cursor: pointer;
      text-decoration: underline;
      
    }
    
    </style>