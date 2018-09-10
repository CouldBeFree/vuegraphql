<template>
  <div>
    <div v-if="$apolloData.queries.books.loading">
      <p>Books are loading...</p>
    </div>
    <ul id="book-list" v-else>
      <li v-for="book in books" :key="book.id">{{book.name}}</li>
    </ul>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  const getBooksQuery = gql`
  query test{
      books{
        name
        id
      }
    }
  `;

  export default {
    name: "BookList",
    data(){
      return{
        books:[]
      }
    },
    apollo: {
      books:{
        query: getBooksQuery
      }
    }
  }
</script>

<style scoped>

</style>
