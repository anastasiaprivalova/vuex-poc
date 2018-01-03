<template>
  <div class="container">
    <router-link to="/ratings">Back to ratings</router-link>
    <h1>{{model.name}}</h1>
    <b-image :src="model.picture" :alt="model.name" />
    <p><strong>Category: </strong>{{model.category}}</p>
    <p><strong>Brand: </strong>{{model.brand}}</p>
    <p><strong>Price: </strong>{{model.price}}</p>
    <p><strong>Overall Score: </strong>{{model.score}}</p>
    <p><strong>Number of reviews: </strong>{{model.reviewsCount}}</p>
    <p><strong>Description: </strong>{{model.description}}</p>
  </div>
</template>

<script>
  import Image from 'bootstrap-vue/es/components/image/img'

  export default {
    name: 'Model',
    props: {
      id: {
        type: String
      }
    },
    computed: {
      model () {
        return this.$store.state.model.data
      }
    },
    created () {
      this.$store.dispatch({ type: 'getModel', id: this.id })
    },
    components: {
      'b-image': Image
    }
  }
</script>

<style lang="scss" scoped>
  img {
    width: auto
  }
</style>
