<template>
    <div class="comment-list">
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <div class="comment-header">
          <span class="comment-author">{{ comment.author }}</span>
          <span class="comment-score">{{ comment.score }}</span>
          <span class="comment-stars">{{ comment.stars }}</span>
        </div>
        <div class="comment-body">
          {{ comment.content }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comments: []
      }
    },
    created() {
      // 获取已发布的评论列表
      fetch('http://superaisecurity.com/comments')
        .then(response => response.json())
        .then(data => {
          this.comments = data
        })
    }
  }
  </script>
  
  <style>
  .comment-list {
    margin: 20px;
  }
  
  .comment {
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  
  .comment-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  .comment-author {
    font-weight: bold;
  }
  
  .comment-score {
    color: gray;
  }
  
  .comment-stars {
    color: orange;
  }
  
  .comment-body {
    color: #666;
  }
  </style>
  