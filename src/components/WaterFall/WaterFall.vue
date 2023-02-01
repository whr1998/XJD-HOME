<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';

const props = defineProps<{
  waterFullList: any[];
}>();

const showList = reactive<any[]>([]);

const heightList: number[] = [];

const init = () => {
  const width = 160;
  const clientWidth = document.body.clientWidth;
  const column = Math.floor(clientWidth / width);

  for (let i = 0; i < props.waterFullList.length; i++) {
    if (i < column) {
      props.waterFullList[i].top = 20;
      props.waterFullList[i].left = i * width;
      showList.push(props.waterFullList[i]);
      heightList.push(props.waterFullList[i].height);
    } else {
      let current = heightList[0];
      let index = 0;
      heightList.forEach((h, i) => {
        if (current > h) {
          current = h;
          index = i;
        }
      });
      props.waterFullList[i].top = current + 40;
      props.waterFullList[i].left = index * width;
      heightList[index] = heightList[index] + props.waterFullList[i].height + 20;
      showList.push(props.waterFullList[i]);
    }
  }
};

onMounted(() => {
  init();
});
</script>

<template>
  <div class="wraps">
    <div
      v-for="item in showList"
      :style="{ height: item.height + 'px', background: item.background, top: item.top + 'px', left: item.left + 'px', }"
      class="items"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.wraps {
  position: relative;
  .items {
    position: absolute;
    width: 150px;
  }
}
</style>
