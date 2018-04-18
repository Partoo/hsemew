<template>
    <div>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
                 label-width="100px"
                 style="margin-bottom: 0">

            <el-form-item label="手机号码" prop="mobile">
                <el-input placeholder="输入您的手机号码" v-model="ruleForm.mobile" requied>
                </el-input>
            </el-form-item>


            <el-form-item label="登录密码" prop="password">
                <el-input placeholder="输入登录密码" type="password" v-model="ruleForm.password" requied>
                </el-input>
            </el-form-item>
            <el-row :gutter="10" style="margin-bottom: 10px">
                <el-col :span="12">
                    <el-switch
                            v-model="ruleForm.remember"
                            active-text="下次自动登录"
                            active-color="#13ce66"
                            inactive-color="#ccc">
                    </el-switch>
                </el-col>
            </el-row>
            <el-row :gutter="15">
                <el-col :span="24">
                    <button class="btn btn-block" :disabled="!formValid" @click.prevent="submitForm('ruleForm')"><i
                            class="fa fa-sign-in"></i>
                        登录系统
                    </button>
                </el-col>
            </el-row>
            <el-row style="margin-top: 20px">
                <el-col :span="12">
                    <a href="/register">
                        <i class="far fa-user-plus"></i> 注册新用户
                    </a>
                </el-col>
                <el-col :span="12">
                    <a href="/reset" class="align-right" style="color: #888;"><i class="fa fa-key"></i>
                        找回登录密码
                    </a>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script>
    import {isMobile} from "../plugins/helper"

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
            return {
                ruleForm: {
                    mobile: '',
                    password: '',
                    remember: false
                },
                rules: {
                    mobile: {validator: checkMobile, trigger: 'change', required: true},
                    password: {required: true, message: '请输入登录密码', trigger: 'change'},
                }
            }
        },
        methods: {
            submitForm(form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.$http.post('/login', this.ruleForm)
                            .then(() => {
                                window.location.href = '/home'
                            })
                    } else {
                        return false;
                    }
                })
            },
            gotoCreate() {
                this.$router.push('register')
            }
        },
        computed: {
            formValid() {
                return isMobile(this.ruleForm.mobile) && this.ruleForm.password !== ''
            },
            scanUrl() {
                return 'https://open.weixin.qq.com/connect/qrconnect?appid=' + window.WEMESH.appid + '&redirect_uri=' + encodeURIComponent(window.WEMESH.callback) + '&response_type=code&scope=snsapi_login&state=' + window.WEMESH.csrfToken + '#wechat_redirect'
            }
        }
    }
</script>