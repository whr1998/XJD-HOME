<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

<template>
    <div class="card">
        <header>
            <div>标题</div>
            <div>操作</div>
        </header>
        <article></article>
    </div>
</template>

<style lang='scss' scoped>
.card {
    width: 300px;
    border: 1px solid #333;
    header {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #333;
        padding: 5px;
    }
    article {
        padding: 5px;
        min-height: 200px;
    }
}
</style>