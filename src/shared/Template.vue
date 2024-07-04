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
        <div class="body-wrapper">
            <div class="container-fluid">
                <slot></slot>
            </div>
        </div>
    </div>
</template>