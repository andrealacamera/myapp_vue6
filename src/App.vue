<template>
<div class="h-screen w-screen">
  <div class="bg-gray-700 relative">
    <main class="h-screen">
      <div class="flex flex-col justify-center">
        <h1 class="text-3xl text-green-200 mt-16">MY APP</h1>

        <div v-if="isGreen">
          <Green />
        </div>
      </div>
    </main>
    <footer>
      <div class="fixed bottom-0 w-full h-auto">
        <div class=" py-2 flex justify-around bg-gray-800 text-gray-400">
          <button class="h-16 w-16 sm:w-60 bg-red-900 text-gray-400 hover:text-green-200 border border-gray-400 rounded-xl p-4 m-1">
            <span class="text-gray-100">R</span>
            <span class="invisible sm:visible"> Red button</span>
          </button>
          <button class="h-16 w-16 sm:w-60 bg-green-900 text-gray-400 hover:text-green-200 border border-gray-400 rounded-xl p-4 m-1">
            <span class="text-gray-100">G</span>
            <span class="invisible sm:visible"> Green button</span>
          </button>
          <button class="h-16 w-16 sm:w-60 bg-blue-900 text-gray-400 hover:text-green-200 border border-gray-400 rounded-xl p-4 m-1">
            <span class="text-gray-100">B</span>
            <span class="invisible sm:visible"> Blue button</span>

          </button>
        </div>
      </div>
    </footer>
  </div>
</div>
</template>

<script>
import Green from '@/components/Green'

export default {
  name: 'App',
  components: {
    Green
  },
  data() {
    return {
      isRed : false,
      isGreen: true
    }
  }
}
</script>

<style>

</style>
