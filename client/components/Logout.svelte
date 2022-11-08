<script>
async function handleLogout() {
    const response = await fetch("http://localhost:3000/api/logout", {
      method : "POST",
      headers: {
        "Content-Type":"application/json"
      }
    });
</script>