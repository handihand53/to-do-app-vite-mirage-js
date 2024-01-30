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
      actionInput: '',
      toDoList: [
        {
          id: 1,
          action: 'hello world'
        },
        {
          id: 2,
          action: 'blibli binus training'
        }
      ]
    }
  },
  computed: {},
  methods: {
    addToList () {
    },
    deleteItem (id) {
    },
    fetchToDoList () {
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