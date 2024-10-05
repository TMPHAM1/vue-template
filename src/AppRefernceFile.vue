<!-- Options API  -->
<!-- <script>
  export default {
    data() {
      return {
        name: 'John Doe',
        status: 'undefined',
        tasks: ['task one', 'task two', 'task three'],
        link: 'www.google.com'
      }
    },
    methods: {
      toggleStatus() {
        if (this.status === 'active') {
          this.status='pending';
        }
          else if (this.status === 'pending') {
            this.status = 'inactive'
          }
          else {
            this.status = 'active'
          }
        }
    }
  }
</script> -->

<!-- Composition API way  -->
<script setup> // using the setup keyword makes it implicit set up removes the data fucntio nand methods fucntion required 
import {ref, onMounted} from 'vue' //ref makes it like use State use state name/ taks/ and you can directly set the .value 
    const name = ref('John Doe');
    const status = ref('active');
    const tasks = ref(['Task One', 'Task Two', 'Task Three']);
    const newTask = ref('test')

    const toggleStatus = () =>{
      if (status === 'active') {
          status.value='pending';
        }
          else if (this.status === 'pending') {
            status.value = 'inactive'
          }
          else {
            status.value = 'active'
          }
        }

    const addTask = (e) =>
     tasks.value.push('test');
    const onDelete = (index) => {
      console.log('THIS IS INDEX', index)
      tasks.value.splice(index,1)
    }
    onMounted(async()=> {
      try {                       
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        tasks.value = data.map((task)=> task.title);
      } catch(error) {
        console.log('Error fetching tasks');
      }
    })
</script>
<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'"> User Is active</p>
  <p v-else-if="status === 'pending'">User Is Pending</p>
  <p v-else>User Is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask"></label>
    <input type="text" id="newTask" name="newTask" @change="" v-model="newTask" />
    <button type="submit">submit</button>
  </form>
  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="onDelete(index)"> Delete</button>
    </li>
  </ul>
  <!-- <a v-bind:href="link">Click for Google</a> -->
  <button v-on:click="toggleStatus">Change Status</button> 
  <!-- :href behavese the same   -->
   <!-- @click behavese the same   -->
</template>

<!-- wil only set styles scoped to this file  -->
<style scoped> 
</style>