<template>
  <div class="container">
    <div class="title-page">
      To do app
    </div>
    <div class="input-action">
      <input type="text" v-model="actionInput">
      <button @click="addToList()">Add</button>
    </div>
    <table border="1">
      <tr>
        <th>No</th>
        <th>List</th>
        <th>Action</th>
      </tr>
      <tr v-for="(item, index) in toDoList" :key="index">
        <td>{{ index+1 }}</td>
        <td>{{ item.action }}</td>
        <td><button @click="deleteItem(item.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toDoList: [],
      actionInput: ''
    }
  },
  computed: {
  },
  methods: {
    addToList() {
      fetch(`/api/todo`, {
        method: 'POST',
        body: {
          action: this.actionInput 
        }
      })
      .then((res) => res.json())
      .then((body) => {
        alert(body.status)
        this.fetchToDoList()
        this.actionInput = ''
      })
    },
    fetchToDoList () {
      fetch(`/api/todo`, {
        method: 'GET',
      })
      .then((res) => res.json())
      .then((body) => {
        this.toDoList = body.data
      })   
    },
    deleteItem(id) {
      fetch(`/api/todo/${id}`, {
        method: 'DELETE',
      })
      .then((res) => res.json())
      .then((body) => {
        this.toDoList = body.data
        alert(body.status)
        this.fetchToDoList()
      })   
    }
  },
  created () {
    fetch(`/example-api-endpoint`, {
        method: 'GET',
      })
      .then((res) => res.json())
      .then((body) => {
        console.log(body)
      })  
  }
}
</script>

<style>
.container {
  margin: 5px;
}

.title-page {
  font-size: 26px;
  margin-bottom: 5px;
  font-weight: 700;
}

.input-action {
  display: flex;
  margin-bottom: 5px;
  gap: 5px;
}

td {
  padding: 5px;
}
</style>