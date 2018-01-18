<template>
    <div class="container">
        <el-form>
            <el-form-item label="Github 私人 Token(请按回车)">
                <el-input v-model="token" @keyup.enter.native="login" ></el-input>
            </el-form-item>
        </el-form>

       <a class="btn btn-primary" :href="url">生成你的token</a>
    </div>
</template>

<script>
    import * as types from '../../store/types';
    export default {
        data () {
            return {
                msg: '',
                token: '',
                url:'https://github.com/settings/tokens/new'
            }
        },
        mounted(){
            this.$store.commit(types.TITLE, '登录');
        },
        methods: {
            login(){
                if (this.token) {
                    this.$store.commit(types.LOGIN, this.token,);
                    let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                    this.$router.push({
                        path: redirect
                    })
                }
            }
        }
    }
</script>