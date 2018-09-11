<template>
  <div id="app">
    <h1>Ninjas Reading List</h1>
    <BookList />
    <AddBook/>
  </div>
</template>

<script>

import BookList from './components/BookList'
import AddBook from './components/AddBook'

export default {
  name: 'App',
  components:{
    BookList,
    AddBook
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }

  #app{
    background: #eee;
    min-height: 100vh;
  }

  #app h1{
    margin: 0;
  }
</style>
