<template>
  <div>
    <form id="add-book">
      <div class="field">
        <label>Book name:</label>
        <input type="text" v-model="name">
      </div>
      <div class="field">
        <label>Genre:</label>
        <input type="text" v-model="genre">
      </div>
      <div class="field">
        <label>Author:</label>
        <select v-if="$apolloData.queries.authors.loading">
          <option disabled>Authors loading</option>
        </select>
        <select v-else v-model="selectedAuthor">
          <option disabled value="">Please select author</option>
          <option
            v-for="author in authors"
            :key="author.id"
            :value="author.id"
          >
            {{author.name}}
          </option>
        </select>
      </div>
      <button @click.prevent="setData">+</button>
    </form>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  const addBookMutation = gql`
    mutation ($name:String!, $genre:String!, $authorId:ID!){
      addBook(name:$name, genre:$genre, authorId:$authorId){
        name
        id
      }
    }
  `;

  const getBooksQuery = gql`
  query test{
      books{
        name
        id
      }
    }
  `;

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
        authors:[],
        book:[],
        name:'',
        genre:'',
        selectedAuthor:''
      }
    },
    apollo: {
      authors:{
        query: getAuthorQuery
      },
      books:{
        query: getBooksQuery
      }
    },
    methods:{
      setData(){
        this.$apollo.mutate({
          mutation: addBookMutation,
          variables: {
            name: this.name,
            genre: this.genre,
            authorId: this.selectedAuthor
          }
        }).then(data => {
          console.log('True')
        });
        this.$apollo.queries.books.refetch()
          .then(res => console.log(res))
      }
    }
  }
</script>

<style scoped>

</style>
