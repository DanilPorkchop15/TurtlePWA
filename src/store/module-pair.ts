import { defineStore } from "pinia";
import axios from "axios";
import {ref} from "vue";

export const usePair = defineStore("pair",() => {

    interface IScheduleList{
        teacher?: string[] ,
        group?: string[]
    }
    const response = ref<IScheduleList>({})
    async function getPair(){
        await axios.get("http://45.155.207.232:8080/api/v2/schedule/list")
            .then((res) => {
                response.value = res.data
                console.log(response.value)
            })
            .catch((e) => {
                console.log("fetching error: ", e)
            })
    }



    return {
        getPair,
        response
    }
})