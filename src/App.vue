<template>
    <f7-app :params="params">
        <!-- Statusbar -->
        <f7-statusbar></f7-statusbar>
        <f7-view url="/one-portal-tabs/" id="main-view" main></f7-view>
    </f7-app>
</template>

<script>
    import routes from './router/router';

    export default {
        name: 'app',
        data() {
            return {
                params: {
                    name: 'Framework7-vue',
                    id: 'DemoApp',
                    theme: 'ios',  // 主题默认是auto, 实际上开发项目我们是需要统一主题的，
                    routes: routes,
                }
            }
        }
    }
</script>

<style>
    #app {
        font-family: '微软雅黑';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .navbar{
        background: #009cc7 !important;
    }
</style>
