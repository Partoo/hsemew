<template>
    <button href="#" id="btn" class="button" :disabled="disabled" @click.prevent.stop="getAuthcode($event)">获取验证码
    </button>
</template>
<script>
    import {countdown} from '../plugins/helper'
    import captcha from '../components/lib/captcha'

    export default {
        props: {
            duration: {
                default: 60
            },
            color: {
                default: 'green'
            },
            type: {
                default: ''
            },
            mobile: {
                required: true
            },
            disabled: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                captcha: Object
            }
        },
        methods: {
            getAuthcode(e) {
                if (!this.disabled) {
                    this.captcha.verify()
                }
                // countdown(e.target, this.duration, '后重发');
                // this.$http.get('getSms', {
                //     params: {
                //         mobile: this.mobile,
                //         content: 'auth',
                //         type: this.type
                //     }
                // })
                //     .then((response) => {
                //         this.$message({
                //             message: response.data,
                //             type: 'success'
                //         })
                //     })
            },
            sendSms() {

                this.$http.get('getSms', {
                    params: {
                        mobile: this.mobile,
                        content: 'auth',
                        type: this.type
                    }
                })
                    .then((response) => {
                        countdown(document.getElementById('btn'), this.duration, '后重发');
                        this.$message({
                            message: response.data,
                            type: 'success'
                        })
                    })
            },
            initCaptcha() {
                this.$http.get('captcha/get')
                    .then((response) => {
                        window.initGeetest({
                            product: 'bind',
                            gt: response.data.gt,
                            challenge: response.data.challenge,
                            offline: !response.data.success,
                            new_captcha: true,
                            width: '100%'
                        }, (obj) => {
                            obj.onReady(() => {
                                this.captcha = obj
                            }).onSuccess(() => {
                                let result = obj.getValidate();
                                if (!result) {
                                    return alert('请完成验证')
                                }
                                let data = {
                                    mobile: this.mobile,
                                    uid: window.UID,
                                    geetest_challenge: result.geetest_challenge,
                                    geetest_validate: result.geetest_validate,
                                    geetest_seccode: result.geetest_seccode
                                };
                                this.$http.post('captcha/verify', data)
                                    .then((response) => {
                                        if (response.data.success) {
                                            return this.sendSms()
                                        }
                                        return this.$alert('请完成验证')
                                    })
                            }).onError(() => {
                                console.log('failed')
                            })
                        })
                    })

            }
        },
        created() {
            this.initCaptcha()
        }
    }
</script>