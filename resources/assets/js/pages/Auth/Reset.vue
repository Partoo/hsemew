<template>
    <div class="reset-box">
        <h4>重新绑定手机</h4>
        <el-form ref="form" :model="form" status-icon :rules="rules" label-width="80px">
            <el-form-item label="手机号码" prop="mobile">
                <el-input placeholder="输入要绑定的手机号码" v-model="form.mobile" requied>
                </el-input>
            </el-form-item>


            <el-form-item label="手机验证" prop="authcode">
                <el-col :span="13">
                    <el-input placeholder="输入收到的验证码" v-model="form.authcode">
                    </el-input>
                </el-col>
                <el-col :span="10" style="margin-left:10px;">
                    <sms :mobile="form.mobile" :disabled="!isMobile"></sms>
                </el-col>
            </el-form-item>

            <el-form-item label="指定密码" prop="password">
                <el-input placeholder="指定您的登录密码" type="password" v-model="form.password" requied>
                </el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password_confirmation">
                <el-input placeholder="再次输入上面的密码" type="password" v-model="form.password_confirmation" requied>
                </el-input>
            </el-form-item>
            <el-row>
                <el-col :span="24">
                    <button class="btn btn-block" @click.prevent="submitForm('form')">
                        提交绑定
                    </button>
                </el-col>
            </el-row>
            <el-row style="margin-top: 20px">
                <el-col :span="24">
                    <a href="/login" class="align-right">
                        返回登录
                    </a>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>
<script>
    import {isMobile} from '../../plugins/helper'
    import Sms from '../../components/SmsCode'

    export default {

        data() {
            let checkMobile = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号码'));
                } else if (!isMobile(value)) {
                    callback(new Error('手机格式不正确'));
                    this.getSmsDisabled = true;
                } else {
                    this.getSmsDisabled = false;
                    callback()
                }
            };
            let checkPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次密码输入的不一致'))
                } else {
                    callback()
                }
            };

            return {
                getSmsDisabled: true,
                form: {
                    mobile: '',
                    authcode: '',
                    password: '',
                    password_confirmation: ''
                },
                rules: {
                    mobile: {validator: checkMobile, trigger: 'change', required: true},
                    authcode: {required: true, message: '请输入短信验证码', trigger: 'change'},
                    password: {required: true, message: '请输入您的密码', trigger: 'change'},
                    password_confirmation: {validator: checkPassword, trigger: 'change', required: true}
                }
            }
        },
        components: {
            Sms
        },
        computed: {
            isMobile() {
                return isMobile(this.form.mobile)
            }

        },
        methods: {
            submitForm(form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.$http.post('/reset', Object.assign(this.form, window.WxRespond))
                            .then(() => {
                                window.location.href = '/home'
                            })
                    } else {
                        return false;
                    }
                })
            }
        }
    }

</script>

<style>
    .reset-box {
        padding: 0 20px;
        text-align: center;
    }
</style>