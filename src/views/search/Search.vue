<template>
    <div class="nav">
        <Nav></Nav>
    </div>
   
   
        <div class="top">
            <van-search v-model="value" placeholder="请输入搜索关键词" @search="search(value)" @change="onlyToSuggest"/>
            <div class="top-top">
                <p></p>
            </div> 
             <searchsuggest></searchsuggest> 
          <div class="top-bottom">
        
        <van-cell v-if="isSearch===0">
        </van-cell>
        <van-list v-else> 
        <van-cell v-for="item,index in result.result.songs" :key="index" :title="item.name" @click="handle(item.id)"> 
         {{ item.artists[0].name }} 
         </van-cell>
        </van-list>
        
            </div>  
            
        
        </div>
    </template>
        
        <script lang="ts" setup>
        import {onMounted, ref,markRaw} from 'vue'
        import { storeToRefs } from 'pinia';
        import { usePlayStore } from '@/store/play';
        import Nav  from "@/components/common/nav.vue"
        import { useSearchStore } from '@/store/search';
        import searchSuggest from './searchsuggest.vue'
        import searchresult from './searchsuggest.vue'
import router from '@/router';
        const value=ref(router.currentRoute.value.query.searchkey)
        const {getresult}=useSearchStore()
       
        onMounted(()=>{
        isSearch.value=0
        console.log("修改值成功")
        console.log(isSearch)
            

    })
    
 
        

       
        
        
async function search(keywords:string) {
    await getresult(keywords)
    
}
        const {play}=usePlayStore()
        
        const {result}=storeToRefs(useSearchStore())
        let {isSearch}=storeToRefs(useSearchStore())
    
    function handle(id:number){
        play(id)
    }
    
        // const list = ref([]);
        //     const loading = ref(false);
        //     const finished = ref(false);
        
        //     const onLoad = () => {
        //       // 异步更新数据
        //       // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        //       setTimeout(() => {
        //         for (let i = 0; i < 10; i++) {
        //           list.value.push(
                    
        //           );
        //         }
        
        //         // 加载状态结束
        //         loading.value = false;
        
        //         // 数据全部加载完成
        //         if (list.value.length >= 40) {
        //           finished.value = true;
        //         }
        //       },2000);
        //     };
        </script>
        
        <style scoped lang="less">
        .top-top{
            width: 100%;
            height: 20px;
            text-align: center;
            & h1{
                line-height: 200px;
            }
        }
        .nav{
            width: 100%;
            height: 40px;
        }
        </style>

