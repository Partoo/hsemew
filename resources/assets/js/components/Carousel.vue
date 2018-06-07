<template>
    <div class="slider">
        <slider animation="fade" height="550px" :control-btn=false :speed=1600 :interval=8000>
            <slider-item>
                <section class="slider-inner">
                    <a href="#" class="img-hover-enlarge">
                        <img src="/img/banner1.jpg" alt="">
                    </a>
                    <div class="banner-slogan">
                        <p>高效从容</p>
                        <p>让工作变得有条不紊</p>
                    </div>
                </section>
            </slider-item>
            <!--<slider-item>-->
            <!--<section class="slider-img">-->
            <!--<a href="#" class="img-hover-enlarge">-->
            <!--<img src="https://pan.baidu.com/static/images/16new/bg2.jpg" alt="">-->
            <!--</a>-->
            <!--<div class="banner-slogan">-->
            <!--<p><span class="left-quote"></span><span>好友分享</span></p>-->
            <!--<p><span>共度美好时光</span><span class="right-quote"></span></p>-->
            <!--</div>-->
            <!--</section>-->
            <!--</slider-item>-->
        </slider>

        <div class="login-form">
            <div v-if="passed" class="user-profile">
                <img :src="userAvatar" class="profile-thumb" alt="User Thumb">
                <h5 class="profile-name">您已经以{{userName}}的身份登录</h5>
                <ul class="profile-actions">
                    <li>
                        <a href="/home" class="button">
                            进入系统
                        </a>
                    </li>
                    <li>
                        <a href="/logout" class="button black">
                            退出系统
                        </a>
                    </li>
                </ul>

            </div>
            <wx-qr v-else style="text-align: center"></wx-qr>
        </div>
    </div>
</template>

<script>
    import {Slider, SliderItem} from 'vue-easy-slider'
    import WxQr from './WxQr'

    export default {
        components: {
            Slider,
            SliderItem,
            WxQr
        },
        computed: {
            passed() {
                return window.WEMESH.passed
            },
            userName() {
                return window.WEMESH.username
            },
            userAvatar() {
                return window.WEMESH.userAvatar
            }
        }
    }
</script>

<style lang="scss">
    .slider {
        padding: 0;
    }

    .img-hover-enlarge:hover {
        opacity: 1 !important;
    }

    .slider-inner img {
        width: 100%;
        overflow: hidden;
    }

    .banner-slogan {
        position: absolute;
        left: 10%;
        bottom: 80px;
        font-size: 3vw;
        color: #fff;

        p {
            font-size: 1em;
        }

    }

    .login-form {
        background: #ffffffc9;
        position: absolute;
        z-index: 99;
        top: 160px;
        right: 40px;
        border-radius: 3px;
        width: 280px;
        display: table-cell;
        vertical-align: middle;
    }

    .user-profile {
        padding: 30px 10px 20px 10px;
        text-align: center;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        position: relative;
    }

    .user-profile img.profile-thumb {
        width: 98px;
        height: 98px;
        -webkit-border-radius: 50px;
        -moz-border-radius: 50px;
        border-radius: 50px;
        box-shadow: 0 0 15px #c2c8e0;
        margin: 0 auto;
    }

    ul.profile-actions {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        padding-left: 0 !important;
    }

    ul.profile-actions li {
        margin-left: 10px;
    }

</style>