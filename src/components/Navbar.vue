<template>
  <div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
  <router-link class="navbar-brand" to="/">Banco Digital de Chile</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav" >
    <ul class="navbar-nav ml-auto">
      
      <li class="nav-item">
        <router-link class="nav-link" :to="{ name: 'Transferencias' }">Transferencias</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Perfil</a>
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
