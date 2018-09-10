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
      <button @click.prevent="getData">+</button>
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
        authors:[],
        name:'',
        genre:'',
        selectedAuthor:'',
        authorId:''
      }
    },
    apollo: {
      authors:{
        query: getAuthorQuery
      }
    },
    methods:{
      getData(){
        let data = {
          name: this.name,
          genre: this.genre,
          id: this.selectedAuthor
        };
        console.log(data);
      }
    }
  }
</script>

<style scoped>

</style>
