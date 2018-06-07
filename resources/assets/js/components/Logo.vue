<template>
    <div class="logo text-center">
        <img src="/img/logo.png">
        <h6>基于微信的办公集成平台</h6>
    </div>
</template>

<style lang="scss">
    .logo {
        padding: 15px;
        margin-bottom: 10px;
        img {
            height: 50px;
        }
        h6::before {
            display: inline-block;
            margin: 0 8px 2px 0;
            height: 2px;
            content: " ";
            text-shadow: none;
            background-color: #2ABFC3;
            width: 20%;

        }
        h6::after {
            display: inline-block;
            margin: 0 0 2px 8px;
            height: 2px;
            content: " ";
            text-shadow: none;
            background-color: #2ABFC3;
            width: 20%;

        }
    }

</style>