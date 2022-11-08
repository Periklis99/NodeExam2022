<script>
    import {Link} from "svelte-navigator"
    
</script>
    <nav class="Navbar">
        <div></div>
       <div class="right">
          <div class="navItems"><Link to="/signup">SignUp</Link></div>
          <div class="navItems"><Link to="/login">Login</Link></div>
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
        height: 40px;
    
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

    
    </style>