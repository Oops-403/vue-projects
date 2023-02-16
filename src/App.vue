<script setup lang="ts">
import { ref, onBeforeMount, onMounted, computed, provide } from 'vue';
import { RouterView, useRoute, useRouter } from 'vue-router';
import { useAppStore } from './store/app.store';
import { _atGetIsLogin, _atGetIsVip } from '@/api/atClientApi';
import { Dialog, showToast } from 'vant';
import { getImageUrl } from '@/config';

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()

const showDialog = ref(false)

const difficult = ref(0)

provide('level', difficult)
provide('setLevel', (val: number) => difficult.value = val)

const showHowTo = computed(() => route.meta.showHowTo)

const showClaimedVipDialog = computed({
  get: () => appStore.showClaimedDialog,
  set: (val) => appStore.setShowClaimedDialog(val)
})

onBeforeMount(() => {
  // @UM aplus-waiting 为 MAN 时 必须需要手动PV
})

onMounted(() => { _atGetIsLogin() })

const handleHowto = () => {
  showDialog.value = true
  // @UM
}

// 路由守卫
router.beforeEach((to) => {
  console.log(appStore.accountInfo)
  if (to.meta.requireLogin && (!appStore.accountInfo.isLogin || !appStore.accountInfo.openId)) {
    showToast('请先登录')
    // 调用vivo api 登录 @TODO:
    _atGetIsVip()
    return false
  }
})
</script>

<template>
  <div class="app">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Transition name="fade" mode="out-in">
          <KeepAlive :include="['TopicView']">
            <Suspense>
              <component :is="Component" :key="$route.name" />
              <template #fallback>
                正在加载...
              </template>
            </Suspense>
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
  </div>
</template>
<style lang="scss">
.dialog-common {
  width: 100%;

  .van-dialog__content {
    width: 100%;

    .dialog-bg {
      width: 100%;
      position: relative;

      .tips-text-desc {
        position: absolute;
        left: 0;
        bottom: 8.533vw;
        color: #982800;
        font-size: 4.8vw;
        padding: 0 12vw;
      }

      .no-chance-btns {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 11.733vw;
        display: flex;
        align-items: center;
        justify-content: center;

        .img-btn {
          width: 33.067vw;
          height: 13.333vw;
        }

        .ml {
          margin-left: 5.6vw;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.app {
  width: 100vw;
  height: 196.5vw;
  overflow: hidden;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  position: relative;

  .how-to-play {
    position: absolute;
    top: 5.867vw;
    right: 5.733vw;
    z-index: 1000;
    width: 8.933vw;
    height: 8.267vw;
    overflow: hidden;
    cursor: pointer;
  }
}
</style>
<style lang="scss">
.dialog-common {
  width: 87.2vw;
  background: transparent;

  .van-dialog__content {
    width: 100%;

    .dialog-bg {
      width: 87.2vw;
      height: 74.667vw;
    }

    .btn-close {
      margin-top: 6.933vw;
      display: flex;
      justify-content: center;

      .btn {
        width: 10.667vw;
        height: 10.667vw;
      }
    }
  }
}
</style>
