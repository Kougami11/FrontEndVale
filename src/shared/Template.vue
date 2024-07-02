<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/shared/Header.vue'
import Siderbar from '@/shared/Siderbar.vue';
import SecondSidebar from './SecondSidebar.vue';
</script>

<template>
    <Siderbar></Siderbar>
    <div class="page-wrapper">
        <Header></Header>
        <SecondSidebar></SecondSidebar>
    </div>
</template>