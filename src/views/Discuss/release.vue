<template>
  <div class="release">
    <div class="back" @click="back">
      <img src="../../assets/img/login/close.svg" alt="" />
    </div>
    <div class="label">
      <van-field
        v-model="label"
        rows="1"
        autosize
        label="标签"
        type="textarea"
        placeholder="请输入标签"
      />
    </div>
    <div class="content">
      <van-field
        v-model="message"
        rows="5"
        autosize
        label="内容"
        type="textarea"
        maxlength="200"
        placeholder="请输入主题讨论内容"
        show-word-limit
      />
    </div>
    <div class="pic">
      <van-field name="uploader" label="上传图片">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "release",
  data(){
    return{
      message:"",
      label:"",
      uploader:[{ url: '' }],
    }
  },
  methods:{
    back(){
      this.$router.replace('/discuss');
    },
  }
}
</script>

<style scoped>
.label{
  position: absolute;
  top: 15%;
  width: 100%;
}
.content{
  position: absolute;
  top: 25%;
  width: 100%;
}
.pic{
  position: absolute;
  top: 53%;
  width: 100%;
}
</style>
