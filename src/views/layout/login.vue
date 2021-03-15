<template>
<div class="login-form">
<a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
    <a-form-model-item has-feedback label="邮箱" prop="email">
      <a-input v-model="ruleForm.email" type="email" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="密码" prop="password">
      <a-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submitForm('ruleForm')">
        提交
      </a-button>
      <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
        重置
      </a-button>
    </a-form-model-item>
  </a-form-model>
</div>

</template>
<script>
import api from '@/api/login';

export default {
  data() {
    const emailReg = /^[\w-]+@[\w.-]+.com$/;
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请输入邮箱'));
      }
      if (emailReg.test(value)) {
        return callback();
      }
      return callback(new Error('邮箱格式不正确'));
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: '',
        password: '',
      },
      rules: {
        email: [{ validator: validatePass, trigger: 'change' }],
        password: [{ validator: validatePass2, trigger: 'change' }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(formName);
      console.log(this.ruleForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.login(this.ruleForm).then((res) => {
            console.log(res);
            if (res.status === 'success') {
              this.$store.dispatch('setUserInfo', res.data);
              console.log(this.$store.state);
              this.$router.push({
                name: 'Home',
              });
            } else if (res.status === 'fail') {
              this.$message.error(res.msg);
            }
          });
        //   return alert('submit!');
        }
        // console.log('error submit!!');
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.login-form{
    max-width: 500px;
    margin: 100px auto;
    border: 1px solid #eee;
    padding: 30px 20px 6px;
}
.ant-form {
    height: 230px;
}

</style>
