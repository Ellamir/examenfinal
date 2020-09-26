<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
  <a class="navbar-brand" href="#">Banco Digital de Chile</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav" >
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to="/">Home</router-link> 
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'Transferencias' }">Transferencias</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Perfil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Logout</a>
      </li>
    </ul>
  </div>
</nav>
    
  </div>
</template>

<script>
export default {
name: 'Navbar'
}
</script>

<style>

</style>
