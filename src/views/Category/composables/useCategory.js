import {onMounted, ref} from "vue";
import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {getCategoryAPI} from "@/apis/category";


export function useCategory() {
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async (id=route.params.id) => {
        const resp = await getCategoryAPI(id)
        categoryData.value = resp.result
    }
    onMounted(() => getCategory())

// 路由信息发生变化 把分类数据接口重新发送
    onBeforeRouteUpdate((to) => {
        getCategory(to.params.id)
    })
    return {categoryData}
}