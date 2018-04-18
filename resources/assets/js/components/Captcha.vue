<template>
    <div id="captcha"></div>
</template>
<script>
    import captcha from '../components/lib/captcha'

    export default {
        methods: {
            initCaptcha() {
                this.$http.get('captcha/get')
                    .then((response) => {
                        window.initGeetest({
                            gt: response.data.gt,
                            challenge: response.data.challenge,
                            offline: !response.data.success,
                            new_captcha: true,
                            width: '100%'
                        }, (obj) => {
                            obj.appendTo('#captcha')
                        })
                    })

            }
        },
        created() {
            this.initCaptcha()
        }
    }
</script>