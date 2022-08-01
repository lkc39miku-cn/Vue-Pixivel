<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
		<router-view #default="{route, Component}">
				<transition appear class="animate__animated" mode="out-in">
						<component :is="Component"></component>
				</transition>
		</router-view>
</template>

<style scoped>

</style>
