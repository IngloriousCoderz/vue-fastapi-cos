<template>
  <div class="root">
    <nav class="nav">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/users">Users</RouterLink>
      <RouterLink to="/secret">Secret Page</RouterLink>
      <RouterLink to="/broken-link">Broken link</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.root {
  display: flex;
  column-gap: 1rem;
}

.nav {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
</style>
