<template>
    <div class="container">
            <el-card class="box-card" v-for="(repo,index) in list" :key="index"  style="margin: 20px">
                <div slot="header" class="clearfix">
                    <span>{{repo.name}}</span>
                </div>
                <div class="repo-mark">
                           <img :src="repo.owner.avatar_url" alt="People"  style="width: 20px; height: 20px; ">
                            <span class="md-subhead" v-if="repo.language">
                                <i class="el-icon-edit"></i>
                                <span>{{repo.language}}</span>
                            </span>
                    <span class="md-subhead" v-if="repo.stargazers_count">
                                <i class="el-icon-edit"></i>
                                <span>{{repo.stargazers_count}}</span>
                            </span>
                    <span class="md-subhead" v-if="repo.forks_count">
                                <i class="el-icon-edit"></i>
                                <span>{{repo.forks_count}}</span>
                            </span>
                    <span class="md-subhead">
                               <i class="el-icon-edit"></i>
                                <span>{{repo.updated_at}}</span>
                            </span>
                </div>
            </el-card>

    </div>
</template>

<script type="application/ecmascript">
    import api from '../../constant/api.js'
    import * as types from '../../store/types.js'


    export default {
        data () {
            return {
                msg: '',
                list: []
            }
        },
        mounted(){
            this.$store.commit(types.TITLE, '登录中');
            this.getRepository();
        },

        methods: {
            getRepository(){
                let params = {
                    sort: 'updated'
                }
                this.axios.get(api.repo_list, params)
                    .then(response => {
                        console.log('get data');
                        console.log(response.data);
                        this.list = response.data;


                    })
            }
        }
    }
</script>

