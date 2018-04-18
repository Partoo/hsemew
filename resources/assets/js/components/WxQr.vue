<template>
    <div style="margin-top: 30px;">
        <h4 v-show="show_title">登录或注册，只需微信扫一扫</h4>
        <iframe id="iframe" scrolling="no" width="260" height="300" frameBorder="0" allowTransparency="true"
                :src="setSrc"></iframe>
    </div>
</template>

<script>
    export default {
        computed: {
            setSrc() {
                return 'https://open.weixin.qq.com/connect/qrconnect?appid=' + this.appid
                    + '&scope=' + this.scope
                    + '&redirect_uri=' + this.redirect_uri
                    + '&state=' + this.state
                    + '&href=' + this.href;
            }
        },
        props: {
            show_title: {
                type: Boolean,
                default: true
            },
            appid: {
                type: String,
                default: window.WEMESH.appid
            },
            scope: {
                type: String,
                default: 'snsapi_login'
            },
            redirect_uri: {
                type: String,
                default: window.WEMESH.redirect
            },
            state: {
                type: String,
                default: window.WEMESH.csrfToken
            },
            theme: {
                type: String,
                default: 'black'
            },
            href: {
                type: String,
                default: 'data:text/css;base64,LmltcG93ZXJCb3ggLnRpdGxle2Rpc3BsYXk6IG5vbmU7fS5pbXBvd2VyQm94IC5xcmNvZGUge3dpZHRoOiAyMDBweDt9LmltcG93ZXJCb3ggLmluZm8ge3dpZHRoOiAyMDBweDt9LmltcG93ZXJCb3ggLnN0YXR1c19pY29ue2Rpc3BsYXk6IG5vbmU7fQ=='
            },
        }
    }
</script>

