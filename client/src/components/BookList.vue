<template>
  <div class="wrapper">
    <div class="left-part">
      <div v-if="$apolloData.queries.books.loading">
        <p>Books are loading...</p>
      </div>
      <ul id="book-list" v-else>
        <li
          v-for="book in books"
          :key="book.id"
          @click="getCurrent(book)"
          class="list-item"
        >
          {{book.name}}
        </li>
      </ul>
    </div>
    <BookDetails :current="currentItem"/>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  import BookDetails from './BookDetails'

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
    components: {
      BookDetails
    },
    data(){
      return{
        books:[],
        currentItem: ''
      }
    },
    methods:{
      getCurrent(item){
        this.currentItem = item.id;
      },
      rendomId(){
        let arr = this.books;
        let length = arr.length;
        let random = Math.random() * (length - 1) + 1;
        console.log(parseInt(random));
        let randomItem = this.books[random];
        console.log(this.books[random]);
      }
    },
    apollo:{
      books:{
        query: getBooksQuery
      }
    },
    mounted(){
      this.rendomId();
    }
  }
</script>

<style scoped>
  .list-item{
    cursor: pointer;
  }

  .left-part{
    margin-right: 100px;
  }

  .wrapper{
    display: flex;
  }
</style>
