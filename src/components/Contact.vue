<template>
<section class="relative w-full bg-center bg-cover" style="background-image:url('https://imaginicampanii.s3.us-east-2.amazonaws.com/imggalerie.jpeg')">

    <div class="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 opacity-60"></div>

    <div class="mx-auto max-w-7xl">

        <div class="relative flex items-center justify-between h-24 px-10">
        </div>

        <div class="flex flex-col items-center px-10 pt-20 pb-40 lg:flex-row">
            <div class="relative w-full max-w-2xl bg-cover lg:w-7/12">
                <div class="relative flex flex-col items-center justify-center w-full h-full lg:pr-10">
                    <div class="flex flex-col items-start space-y-8">
                        <div class="relative">
                            <h1 class="text-5xl font-extrabold leading-tight text-gray-100 sm:text-7xl md:text-8xl">Design, Build, and Create</h1>
                        </div>
                        <p class="text-2xl text-white">Handcrafted templates and components to help you design, build, and create easier than ever before.</p>
                    </div>
                </div>
            </div>

            <div class="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
                <div class="flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl">
                        <img src="https://imaginicampanii.s3.us-east-2.amazonaws.com/Logo+Erra+SIlver.png" class="img-fluid logo h-full" alt="Responsive image">
                    <h4 class="w-full text-3xl font-bold">Signup</h4>
                    <div class="relative w-full mt-6 space-y-8">
                        <div class="relative">
                            <label class="font-medium text-gray-900">Name</label>
                            <input type="text" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Name">
                        </div>
                        <div class="relative">
                            <label class="font-medium text-gray-900">Email</label>
                            <input type="text" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Email Address">
                        </div>
                        <div class="relative">
                            <label class="font-medium text-gray-900">Password</label>
                            <input type="password" class="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-100 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Password">
                        </div>
                        <div class="relative">
                            <a href="#_" class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Create Account</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</section>
</template>

<script>
export default {
  name: 'Detalii1',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
