import {onMounted, ref} from "vue";
import {getBannerAPI} from "@/apis/home";

export function useBanner() {
    const bannerList = ref([])
    const getBanner = async () => {
        const resp = await getBannerAPI({
            distributionSite: '2'
        })
        bannerList.value = resp.result
    }
    onMounted(() => getBanner())
    return {bannerList}
}