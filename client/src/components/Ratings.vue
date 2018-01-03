<template>
  <div class="container products">
    <h1>Ratings table</h1>
    <b-table
      bordered
      hover
      :items="ratings"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :sort-compare="sortCompare"
    >
      <template slot="link" slot-scope="data">
        <router-link :to="data.item.link">Model Link</router-link>
      </template>
    </b-table>
    <b-pagination v-if="totalRows" align="center" :total-rows="totalRows" :per-page="perPage" v-model="currentPage" />
  </div>
</template>

<script>
  import Table from 'bootstrap-vue/es/components/table/table'
  import Pagination from 'bootstrap-vue/es/components/pagination/pagination'

  export default {
    name: 'Ratings',
    data () {
      return {
        currentPage: 1,
        perPage: 30,
        sortCompare: (a, b, key) => {
          if (key !== 'price') {
            return null
          }

          let aValue = +a[key].replace(/,|\$/g, '')
          let bValue = +b[key].replace(/,|\$/g, '')

          return aValue < bValue ? -1 : (aValue > bValue ? 1 : 0)
        }
      }
    },
    computed: {
      ratings () {
        return this.$store.state.ratings.products
      },
      fields () {
        const unsortableFields = ['link']

        return Object.keys(this.$store.state.ratings.products[0] || {})
          .map(key => {
            let field = {
              key,
              sortable: !unsortableFields.includes(key)
            }

            return field
          })
      },
      totalRows () {
        return this.$store.state.ratings.products.length
      }
    },
    created () {
      this.$store.dispatch('getAllProducts')
    },
    components: {
      'b-table': Table,
      'b-pagination': Pagination
    }
  }
</script>

<style>
  h1 {
    font-weight: normal;
  }
</style>
