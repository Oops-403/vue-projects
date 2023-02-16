import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

interface AccountInfo {
    isLogin: boolean;
    openId: string;
    isVip: boolean;
    hasRight: boolean;

    stickerCount: number;
    vipPrice: number;
    tipsNumber: number;
    errorTolerance: number;
    stickerIds: number[];
}

export const useAppStore = defineStore('app', () => {
    const accountInfo = reactive<AccountInfo>({
        openId: '',
        isVip: false,
        isLogin: false,
        hasRight: false,
        stickerCount: 0,
        vipPrice: 1,
        tipsNumber: 0,
        errorTolerance: 3,
        stickerIds: []
    })

    const showClaimedDialog = ref(false)
    const topicIndex = ref(0)

    const buyInfo = reactive({
        buyId: 0,
        type: 0
    })

    const setAccountInfo = (info: Partial<AccountInfo>) => {
        Object.assign(accountInfo, info)
    }

    const setShowClaimedDialog = (val: boolean) => {
        showClaimedDialog.value = val
    }

    const setTopicIndex = (index: number) => {
        topicIndex.value = index
    }

    const getUserType = () => {
        return accountInfo.isVip ? '会员' : accountInfo.hasRight ? '普通用户' : '历史会员'
    }

    const setBuyInfo = (info: { buyId: number; type: number; }) => {
        info.buyId && (buyInfo.buyId = info.buyId)
        info.type && (buyInfo.type = info.type)
    }

    return {
        accountInfo,
        setAccountInfo,
        showClaimedDialog,
        setShowClaimedDialog,
        topicIndex,
        setTopicIndex,
        getUserType,
        buyInfo,
        setBuyInfo
    }
})
