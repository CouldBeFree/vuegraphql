<template>
  <div id="book-details">
    <div v-if="book">
      <h2>{{book.name}}</h2>
      <p>{{book.genre}}</p>
      <p>{{book.author.name}}</p>
      <p>All books by this author</p>
      <ul class="other-books" v-for="item in book.author.books">
        <li :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    <div v-else>
      <p>Select book</p>
    </div>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  const getBookQuery = gql`
  query ($id:ID){
      book(id:$id){
        name
        id
        genre
        author{
          id
          name
          age
          books{
            name
            id
          }
        }
      }
    }
  `;
  export default {
    name: "BookDetails",
    props:['current'],
    book:{},
    apollo: {
      book:{
        query: getBookQuery,
        variables(){
          return{
            id: this.current
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
