<template>
<section class="relative flex flex-col items-center justify-center w-full px-6 py-24 bg-white bg-cover lg:py-32 min-w-screen">
    <div class="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
        <div class="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
            <h1 class="relative z-20 text-5xl font-extrabold leading-none text-blue-500 xl:text-6xl sm:text-center lg:text-left">
                Designed with<br>
                <span class="mt-1 text-gray-800 lg:mt-0">You in Mind</span>
            </h1>
            <p class="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">We've crafted the ultimate tool that helps you build the design of your dreams. Built with configuration in mind, you can fully customize every aspect.</p>
            
        </div>
        <div class="relative w-full px-5 rounded-lg cursor-pointer lg:w-1/2 group xl:px-0">
            <div class="absolute top-0 left-0 w-11/12 -mt-20 opacity-50">
                <svg class="w-full h-full ml-4 text-purple-100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z" transform="translate(100 100)"></path></svg>
            </div>
            <div class="relative overflow-hidden rounded-md shadow-2xl cursor-pointer group">
                <div class="absolute flex items-center justify-center w-full h-full">
                    <span class="flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full shadow-2xl">
                        <svg class="w-auto h-8 ml-1 text-white fill-current" viewBox="0 0 52 66" xmlns="http://www.w3.org/2000/svg"><path d="M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z" fill-rule="nonzero"></path></svg>
                    </span>
                </div>
        <video width="400" controls>
            <source src="https://www.youtube.com/watch?v=qnhbE_FBtU4" type="video/mp4">
        </video>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'Etape',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
video {
  width: 100%;
  height: auto;
}
</style>
