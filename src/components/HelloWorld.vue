<template>
  <div class="living-header">
    <div class="head-title clearfix">
      <a class="btn-back icon-revoke" href="">返回</a>
      <h2 class="pmTit">冰箱</h2>
      <div class="head-right">
        <span class="btn-base"><i class="icon icon-audit"></i>预览</span>
        <span class="btn-base btn-blue"><i class="icon icon-audit"></i>保存</span>
      </div>
    </div>
    <div class="head-menu"></div>
    <router-link to="content">
      <em class="cancel">取消</em>
    </router-link>
  </div>
</template>

<script>
// import vContent from './content'
export default {
  // name: 'Header',
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>

<style lang="scss" scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  .living-header {
    padding: 0 20px;
    background: #fff;
    .head-title{
      color: #494949;
      padding: 16px 0;
      position: relative;
      .btn-back{
        display: inline-block;
        height: 16px;
        line-height: 16px;
        font-size: 16px;
        color: #626262;
        border-right: #626262 solid 1px;
        padding-right: 10px;
        margin: 5px 8px 0 0;
      }
      .pmTit {
        display: inline-block;
        height: 36px;
        line-height: 36px;
        font-size: 18px;
      }
      .head-right{
        position: absolute;
        right: 0;
        top: 16px;
      }
    }
  }
</style>
