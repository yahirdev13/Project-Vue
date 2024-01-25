<template>
  <div>
    <h1 class="title">Esto es una prueba de router</h1>
    <b-breadcrumb :items="items"></b-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Tiendas de juguetes",
          href: "/component",
          name: "Inicio",
        },
        {
          text: "Electrónicos",
          href: "/component2",
        },
        {
          text: "Juegos de video",
          active: true,
        },
      ],
    };
  },
}
</script>

<style scoped>
.title {
  color: black;
}
</style>