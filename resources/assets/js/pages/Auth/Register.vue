<template>
    <div>
        <!--<h4 class="text-center" style="color:#828282;"><i class="fa fa-user-plus"></i> 完善基本资料</h4>-->
        <div style="text-align: center"><img :src="WxRespond.headimgurl" alt="user thumb">
            <p>您将以{{WxRespond.nickname}}的身份注册</p></div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
                 style="margin-bottom: 0">

            <el-form-item label="手机号码" prop="mobile">
                <el-input placeholder="输入您的手机号码" v-model="ruleForm.mobile" requied>
                </el-input>
            </el-form-item>

            <el-form-item label="手机验证" prop="authcode">
                <el-col :span="13">
                    <el-input placeholder="输入收到的验证码" v-model="ruleForm.authcode">
                    </el-input>
                </el-col>
                <el-col :span="10" style="margin-left:10px;">
                    <sms :mobile="ruleForm.mobile" :disabled="getSmsDisabled" type="register"></sms>
                </el-col>
            </el-form-item>

            <el-form-item label="指定密码" prop="password">
                <el-input placeholder="指定您的登录密码" type="password" v-model="ruleForm.password" requied>
                </el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="password_confirmation">
                <el-input placeholder="再次输入上面的密码" type="password" v-model="ruleForm.password_confirmation" requied>
                </el-input>
            </el-form-item>
            <el-row>
                <el-col :span="24">
                    <button class="btn btn-block" @click.prevent="submitForm('ruleForm')">
                        完成绑定
                    </button>
                </el-col>
            </el-row>
            <el-row style="margin-top: 20px">
                <el-col :span="24">
                    <a href="/" class="align-right" style="margin-left: 20px;">
                        使用其它微信号登录
                    </a>
                    <a :href="'/reset?uid='+WxRespond.unionid" class="align-right">
                        解绑手机号
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
            let checkPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.password) {
                    callback(new Error('两次密码输入的不一致'))
                } else {
                    callback()
                }
            };
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
            return {
                getSmsDisabled: true,
                ruleForm: {
                    mobile: '',
                    authcode: '',
                    password: '',
                    password_confirmation: '',
                    // 用户可以在注册时解绑手机号码（即将原手机用户update为null，同时create一个当前微信用户）
                    submitType: 'register'
                },
                rules: {
                    mobile: {validator: checkMobile, trigger: 'change', required: true},
                    authcode: {required: true, message: '请输入短信验证码', trigger: 'change'},
                    password: {required: true, message: '请输入您的密码', trigger: 'change'},
                    password_confirmation: {validator: checkPassword, trigger: 'change', required: true}
                }
            }
        },
        methods: {
            submitForm(form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.register()
                    } else {
                        return false;
                    }
                })
            },
            register() {
                this.$http.post('/register', Object.assign(this.ruleForm, this.WxRespond))
                    .then(() => {
                        window.location.href = '/home'
                    })
                    .catch((error) => {
                        if (error.response.status === 406) {
                            this.$confirm(error.response.data.errors, '提示', {
                                confirmButtonText: '是的，我要绑定该手机号',
                                cancelButtonText: '不了，换其它号码绑定',
                                type: 'warning'
                            }).then(() => {
                                this.ruleForm.submitType = 'rebind'
                                this.register()
                            })
                        }
                    })
            },
            reset() {
                this.$http.post('/reset', Object.assign(this.ruleForm, this.WxRespond))
                    .then(() => {
                        window.location.href = '/home'
                    })
            }
        },
        components: {
            Sms
        },
        computed: {
            WxRespond() {
                return window.WxRespond
            }
        }
    }
</script>