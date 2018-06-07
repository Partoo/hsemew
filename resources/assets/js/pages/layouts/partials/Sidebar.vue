<template>
    <div class="sidebar" id="sidebar">
        <div class="sidebar-box" v-slimscroll="slim">
            <div class="sidebar-container">
                <div class="nav-user-wrapper fadeInUp">
                    <div class="media btn-transparent">
                        <div class="media-left">
                            <a v-if="profile.avatar===null" class="profile-card-photo" href="#">
                                <img src="/img/default-avatar.jpg" alt="avatar">
                            </a>
                            <a v-else href="#" class="profile-card-photo">
                                <img :src="profile.avatar" alt="avatar">
                            </a>
                        </div>
                        <div class="media-body">
                            <span class="media-heading text-white">{{profile.name}}</span>
                            <div class="text-small text-white-transparent">
                                <a href="#" style="margin:  8px 0 0 0; font-size: 12px" class="button small">绑定公众号</a>
                            </div>
                        </div>
                        <div class="media-right media-middle">
                            <el-dropdown trigger="click">
                                <span class="btn-transparent">
                                    <i class="el-icon-arrow-down"></i>
                                </span>

                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item command="profile"><a href="">个人资料</a>
                                    </el-dropdown-item>
                                    <el-dropdown-item command="message"><a href="">消息中心</a>
                                    </el-dropdown-item>
                                    <el-dropdown-item command="security"><a href="#">安全设置</a>
                                    </el-dropdown-item>
                                    <el-dropdown-item command="logout"><a href="/logout">退出系统</a>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </el-dropdown>
                        </div>
                    </div>

                </div>
                <!--WEATHER-->
                <div class="nav">
                    <div class="weather">
                        <p v-if="weatherLoaded" class="weather fadeInUp">
                            <a href="" class="btn btn-transparent" style="color: #ccc;">
                                {{weather.date}} {{weather.week}} {{weather.weather}}
                            </a>
                        </p>
                    </div>
                    <el-menu default-active="1-1"
                             @open="menuOpen"
                             background-color="#343F4D"
                             text-color="#fff"
                             @close="menuClose">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="iconfont icon-manage_fill"></i> 应用管理
                            </template>
                            <el-menu-item index="1-1">我的应用</el-menu-item>
                            <el-menu-item index="1-2">创建应用</el-menu-item>
                        </el-submenu>

                        <el-submenu index="2">
                            <template slot="title">
                                <i class="iconfont icon-financial_fill"></i> 财务中心
                            </template>
                            <el-menu-item index="2-1">账户</el-menu-item>
                            <el-menu-item index="2-2">优惠券</el-menu-item>
                            <el-menu-item index="2-3">购物车</el-menu-item>
                            <el-menu-item index="2-4">订单管理</el-menu-item>
                        </el-submenu>

                        <el-submenu index="3">
                            <template slot="title">
                                <i class="iconfont icon-addressbook_fill"></i> 用户中心
                            </template>
                            <el-menu-item index="3-1">基本资料</el-menu-item>
                            <el-menu-item index="3-2">安全设置</el-menu-item>
                        </el-submenu>

                        <el-submenu index="4">
                            <template slot="title">
                                <i class="iconfont icon-customerservice_fill"></i> 客服中心
                            </template>
                            <el-menu-item index="4-1">我的提问</el-menu-item>
                            <el-menu-item index="4-2">提交问题</el-menu-item>
                        </el-submenu>
                    </el-menu>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Submenu, Dropdown, MenuItem, Menu, DropdownItem, DropdownMenu} from 'element-ui'

    export default {
        data() {
            return {
                slim: {
                    height: '100%',
                    color: '#fff'
                },
                weatherLoaded: false,
            }
        },
        methods: {
            fetchWeather() {
                this.$http.get('weather')
                    .then((response) => {
                        this.$store.dispatch('getWeather', response.data.result);
                        this.weatherLoaded = true;
                    })
                    .catch((error) => {
                        this.$message({
                            showClose: true,
                            message: '暂时连接不上天气服务器:' + error
                        })
                    })
            },
            menuOpen(name, path) {
                console.log(name, path);
            },
            menuClose(name, path) {
                console.log(name, path);
            }
        },
        mounted() {
            this.fetchWeather()
        },
        computed: {
            weather() {
                return this.$store.state.weather
            },
            profile() {
                return this.$store.state.myInfo
            }
        },
        components: {
            'el-menu': Menu,
            'el-submenu': Submenu,
            'el-menu-item': MenuItem,
            'el-dropdown': Dropdown,
            'el-dropdown-item': DropdownItem,
            'el-dropdown-menu': DropdownMenu
        }
    }
</script>

<style lang="scss">

    /*侧边栏关闭*/
    .sidebar-closed #sidebar {
        width: 50px !important;
    }

    #sidebar {
        top: 0;
        left: 0;
        bottom: 0;
        background-color: #343F4E;
        overflow: visible;
        z-index: 1024;

        .sidebar-box {
            margin: 0;
            position: relative;
        }

        .nav-user-wrapper {
            padding: 12px 10px;
            position: relative;
            overflow: visible;
            z-index: 1;
            .media {
                overflow: visible;
                .media-left {
                    display: table-cell;
                    vertical-align: top;
                    padding-right: 10px;
                }
                .media-body {
                    display: table-cell;
                    white-space: nowrap;
                    width: 10000px;
                    overflow: hidden;
                    zoom: 1;
                    .media-heading {
                        color: #fff;
                        margin-top: 0;
                        margin-bottom: 5px;
                    }
                    .text-small {
                        color: #bbb;
                        font-size: 12px;
                    }
                }
                .media-right {
                    display: table-cell;
                    vertical-align: top;
                    padding-left: 10px;
                    .dropdown {
                        position: relative;
                    }
                }
            }
            .media:first-child {
                margin-top: 0;
            }
        }

        .profile-card-photo {
            width: 58px;
            height: 58px;
            display: inline-block;
            img {
                border-radius: 50%;
            }
        }

        .nav {
            width: auto;
            transition: all .5s;
            min-height: 100%;
            .weather {
                color: #bbb;
                text-align: center;
            }
        }

    }

    .el-menu {
        border-right: none !important;
        .el-menu-item-group {
            .is-active {
                border-left: 3px solid #3ed9e5;
            }
        }
    }

    .el-menu-item-group {
        ul {
            margin-left: 0 !important;
            margin-right: 0 !important;
        }

    }

    .el-menu-item:hover, .el-menu-item:focus {
        outline: none;
    }

    /*非窄屏*/
    @media (min-width: 992px) {
        #sidebar {
            width: 220px;
            position: fixed;
            margin-top: 0;
            padding-top: 60px;
            transition: width 0.5s;
            .nav {
                border-right: none;
                position: relative;
            }
        }
        .sidebar-closed #sidebar .nav-user-wrapper .media-body, .sidebar-closed #sidebar .nav-user-wrapper .media-right {
            display: none;
        }
    }

    /*窄屏*/
    @media (max-width: 991px) {
        #sidebar {
            position: fixed !important;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 260px;
            overflow: hidden;
            z-index: 0;
            float: none;
            transform: translate3d(-260px, 0, 0);
            transition: transform 300ms ease 0s;
        }
        .sidebar-off #sidebar {
            z-index: 1;
            transform: translate3d(0, 0, 0);
            transition: transform 300ms ease 0s;
        }
    }


</style>