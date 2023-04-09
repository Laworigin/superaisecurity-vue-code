<template>
    <form @submit.prevent="submitComment">
      <div class="form-group">
        <label for="nickname">昵称</label>
        <input id="nickname" type="text" v-model="nickname" class="form-control" />
      </div>
      <div class="form-group">
        <label for="content">评论</label>
        <textarea id="content" v-model="content" class="form-control"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nickname: '',
        content: ''
      }
    },
    methods: {
      submitComment() {
        const comment = {
          author: this.nickname,
          content: this.content
        }
        fetch('http://superaisecurity.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(comment)
        })
          .then(response => response.json())
          .then(data => {
            // 提交评论成功后，更新评论列表
            this.$emit('new-comment', data)
            this.nickname = ''
            this.content = ''
          })
      }
    }
  }
  </script>
  
  <style>
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
  }
  
  textarea {
    height: 150px;
  }
  
  .btn-primary {
    background-color: #007bff;
    border-color: #007bff;
  }
  </style>
  