<script setup lang="ts">
import { onMounted, inject } from 'vue';
import { useRouter } from 'vue-router';
import { getImageUrl } from '@/config';
import { useAppStore } from '@/store/app.store';

const router = useRouter()
const appStore = useAppStore()

const setDifficult = inject<any>('setLevel')

onMounted(() => {
  // @UM 用户分类
  // @UM 页面曝光
})

const handleLevel = (level:1|2|3) => {
  setDifficult(level)
  appStore.setTopicIndex(0) 
  router.push('/topic')
  // @UM
  const levelDesc = level == 1 ? '平民玩家' : level == 2 ? '金曲达人' : '猜歌之王'
}
</script>
<template>
  <div class="home">
    首页=============
  </div>
</template>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

  .how-to-play {
    position: absolute;
    top: 5.867vw;
    right: 5.733vw;
    width: 9.333vw;
    height: 8.533vw;
    overflow: hidden;
  }

  .btn-operations {
    position: absolute;
    bottom: 14.4vw;
    width: 100%;

    .btns {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .btn {
        width: 77.867vw;
        height: 17.067vw;
        margin-bottom: 6.133vw;
      }
    }
  }
}
</style>
