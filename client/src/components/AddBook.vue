<template>
    <div>
      <form id="add-book">
        <div class="field">
          <label>Book name:</label>
          <input type="text">
        </div>
        <div class="field">
          <label>Genre:</label>
          <input type="text">
        </div>
        <div class="field">
          <label>Author:</label>
          <select v-if="$apolloData.queries.authors.loading">
            <option disabled>Authors loading</option>
          </select>
          <select v-else>
            <option v-for="author in authors" :key="author.id" :value="author.id">{{author.name}}</option>
          </select>
        </div>
        <button>+</button>
      </form>
    </div>
</template>

<script>
  import gql from 'graphql-tag'

  const getAuthorQuery = gql`
  query test{
      authors{
        name
        id
      }
    }
  `;

    export default {
        name: "AddBook",
      data(){
        return{
          authors:[]
        }
      },
      apollo: {
        authors:{
          query: getAuthorQuery
        }
      }
    }
</script>

<style scoped>

</style>
