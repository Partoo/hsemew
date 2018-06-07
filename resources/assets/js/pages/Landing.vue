<template>
    <div>
        <header id="sticky">
            <div class="row">
                <div class="four columns">
                    <a href="/" class="logo">
                    <span class="header-logo">
                <img src="/img/logo.png" alt="">
            </span>
                    </a>
                    <!--<label for="drawer-checkbox" class="button drawer-toggle"></label>-->
                </div>
                <div class="eight columns">
                    <div class="menu" v-scroll-spy-active v-scroll-spy-link>
                        <a v-for="(item, index) in menus" href="#" class="button"
                           :class="{active: index===section}">{{item}}</a>
                    </div>
                </div>
            </div>
            <!--<div class="col-sm-10 col-sm-offset-1 hidden-lg hidden-md">-->
            <!--<div class="logo-title" v-scroll-spy-active v-scroll-spy-link>-->
            <!--<a v-for="(item, index) in menus" href="#" class="button"-->
            <!--:class="{active: index===section}">{{item}}</a>-->
            <!--</div>-->
            <!--</div>-->
        </header>
        <div class="main" v-scroll-spy="{data: 'section', offset: 160, time: 300, steps: 30}">
            <carousel></carousel>
            <div class="container">
                <div class="row">
                    <div class="section-title">
                        <h4>{{menus[1]}}</h4>
                        <p><span>微脉事</span>是一个集成办公环境，除了更好地扩展了微信公众平台外，还可以深度定制并集成您所在行业的应用：</p>
                    </div>
                </div>
                <great-tab></great-tab>
            </div>
        </div>
    </div>
</template>

<script>
    import Carousel from '../components/Carousel'
    import GreatTab from '../components/GreatTab'

    export default {
        data() {
            return {
                section: 0,
                menus: [
                    '首页', '产品介绍', '应用市场', '联系我们'
                ]
            }
        },
        components: {
            Carousel,
            GreatTab
        }
    }
</script>

<style lang="scss">
    header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        display: block;
        background: #fff;
        box-shadow: 5px -1px 17px 0px rgba(0, 0, 0, 0.24);
        z-index: 999;
        padding: 12px;
    }

    .logo img {
        height: 50px;
    }

    .menu {
        float: right;
        margin-top: 10px;
        .active {
            background-color: #2ABFC3 !important;
            color: #fff !important;
        }
        a {
            font-size: 1em;
        }
    }

    .section-title {
        text-transform: uppercase;
        max-width: 550px;
        margin: 0 auto;
        text-align: center;
        h4::before {
            display: inline-block;
            margin: 0 20px 8px 0;
            height: 2px;
            content: " ";
            text-shadow: none;
            background-color: #2ABFC3;
            width: 100px;

        }
        h4::after {
            display: inline-block;
            margin: 0 0 8px 20px;
            height: 2px;
            content: " ";
            text-shadow: none;
            background-color: #2ABFC3;
            width: 100px;
        }
    }

    .btn-transparent {
        background-color: transparent !important;
        border: 1px solid #fff !important;
        &:hover {
            background-color: #2ABFC3 !important;
            border: 1px solid #2ABFC3 !important;
        }
    }
</style>