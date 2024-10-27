
function ServicesOffered(){
    return(
        <section class="container mx-auto px-6 py-12 space-y-16">
        <div class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <img src="service-image-url.jpg" alt="Our Service" class="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"/>
          <div class="md:w-1/2 text-center md:text-left">
            <h2 class="text-3xl font-bold text-gray-800">Our Service</h2>
            <p class="text-gray-600 mt-4">We are dedicated to providing top-notch services with a focus on customer satisfaction. From gourmet creations to quick bites, our service is tailored to meet every need.</p>
          </div>
        </div>
    
        <div class="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-8">
          <img src="quality-image-url.jpg" alt="Our Quality" class="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"/>
          <div class="md:w-1/2 text-center md:text-left">
            <h2 class="text-3xl font-bold text-gray-800">Our Quality</h2>
            <p class="text-gray-600 mt-4">Our dishes are prepared with the finest ingredients to ensure exceptional taste and quality. We follow high standards to bring you flavors that inspire and satisfy.</p>
          </div>
        </div>
    
        <div class="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
          <img src="experience-image-url.jpg" alt="Customer Experience" class="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"/>
          <div class="md:w-1/2 text-center md:text-left">
            <h2 class="text-3xl font-bold text-gray-800">Customer Experience</h2>
            <p class="text-gray-600 mt-4">Our commitment to excellence means providing a delightful experience at every visit. Our staff is dedicated to making your dining experience memorable and enjoyable.</p>
          </div>
        </div>
    
        <div class="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-8">
          <img src="sustainability-image-url.jpg" alt="Sustainable Practices" class="w-full md:w-1/2 h-64 object-cover rounded-lg shadow-lg"/>
          <div class="md:w-1/2 text-center md:text-left">
            <h2 class="text-3xl font-bold text-gray-800">Sustainable Practices</h2>
            <p class="text-gray-600 mt-4">We believe in sustainability and source our ingredients responsibly. Our commitment to the environment reflects in our eco-friendly practices, ensuring a greener future.</p>
          </div>
        </div>
      </section>
    )
}

export default ServicesOffered