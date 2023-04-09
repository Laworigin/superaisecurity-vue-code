<template>
    <button class="btn btn-primary" @click="login">登录</button>
  </template>
  
  <script>
  export default {
    methods: {
      login() {
        fetch('http://superaisecurity.com/login')
          .then(response => response.json())
          .then(data => {
            // 处理登录逻辑
          })
      }
    }
  }
  </script>
  
  <style>
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  </style>
  