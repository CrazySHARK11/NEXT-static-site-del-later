import React from 'react'

export default function Footer() {
  return (
    <footer class="bg-gray-200 h-screen md:h-48 lg:h-36 xl:h-24 py-12">
    <div class="max-w-md mx-auto px-4 lg:px-8 xl:px-12">
      <div class="flex flex-wrap justify-center mb-4">
        <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out mr-4 mb-4 lg:mb-0">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out mr-4 mb-4 lg:mb-0">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out mr-4 mb-4 lg:mb-0">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out mr-4 mb-4 lg:mb-0">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <p class="text-gray-600 text-sm text-center mb-4">
        &copy; 2023 Your Company Name. All rights reserved.
      </p>
    </div>
  </footer>
  )
}
