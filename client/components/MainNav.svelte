<script>
    import {Link} from "svelte-navigator"

    function handleLogout() {
        fetch("http://localhost:3000/api/logout", {
        method : "POST",
      headers: {
        "Content-Type":"application/json"
      }
        }).finally(()=> true)
    }
</script>
    <nav class="Navbar">
        <div>
            <img class="logo" src="logo.jpg" alt="background">
        </div>
          <div class="right">
          <div class="navItems"><Link to="/products">Products</Link></div>
          <div class="navItems"><Link to="/cart">Cart</Link></div>
          <div class="navItems"><Link to="/" on:click={handleLogout}>Logout</Link></div>
          
        </div> 

    </nav>

    <style>
    
        nav{
            padding: 0 5px;
            display:flex;
            justify-content: space-between;
            align-items: center;
            margin:0;
            background-color: rgb(46, 52, 55);
            height: 55px;
        
        }
    
        .navItems:hover{
            text-decoration: underline;
        }
    
        .navItems{
            font-size: 21px;
            color: red;
            margin-right: 10px;
        }
    
        .right{
            display:flex;
        }

        .logo{
            display: inline-block;
            max-width: 36px;
            max-height: 36px;
        }
    
        
        </style>