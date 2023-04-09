<template>
  <div>
    <h1 class="title">用户评论</h1>
    <CommentList />
    <CommentForm />
    <LoginButton />
  </div>
</template>

<script>
import CommentList from './components/CommentList.vue'
import CommentForm from './components/CommentForm.vue'
import LoginButton from './components/LoginButton.vue'

export default {
  components: {
    CommentList,
    CommentForm,
    LoginButton
  }
}
</script>

<style>
.title {
  text-align: center;
}
</style>
