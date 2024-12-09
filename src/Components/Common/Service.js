import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Our Service",
    description: "We are dedicated to providing top-notch services with a focus on customer satisfaction. From gourmet creations to quick bites, our service is tailored to meet every need.",
    image: "https://tableneeds.com/wp-content/uploads/2022/03/1312265-BlogPost-022822.jpg"
  },
  {
    title: "Our Quality",
    description: "Our dishes are prepared with the finest ingredients to ensure exceptional taste and quality. We follow high standards to bring you flavors that inspire and satisfy.",
    image: "https://cdnv2.dropr.io/image/8jA0G_rjRcmZnxA0_pXyGA/wBWa1X2D/1180x550/sf/38914ef6-5421-4627-a760-251440e07938.jpg?cache_buster=39dfa55283318d31afe5a3ff4a0e3253e2045e43"
  },
  {
    title: "Customer Experience",
    description: "Our commitment to excellence means providing a delightful experience at every visit. Our staff is dedicated to making your dining experience memorable and enjoyable.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtmL75eGtjO_ELJppkzv7R0rwGFK6R8gkZQ&s"
  },
  {
    title: "Sustainable Practices",
    description: "We believe in sustainability and source our ingredients responsibly. Our commitment to the environment reflects in our eco-friendly practices, ensuring a greener future.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFX00aeqmcUX07Ja2WmTqq-8B9HvGMaCD_kpHhh6qmh44wf-MD8GpCBrHB_T982hcMinc&usqp=CAU"
  }
];

function ServicesOffered() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#c27903e5] to-[#212121] text-[#EEE0CA] py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="relative">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 ${
                index === activeIndex ? 'block' : 'hidden'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="lg:w-1/2">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-[#EEE0CA]/80 mb-6">{service.description}</p>
                <motion.button
                  className="bg-[#EEE0CA] text-[#212121] px-6 py-2 rounded-full font-semibold hover:bg-[#EEE0CA]/90 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-[#EEE0CA]' : 'bg-[#EEE0CA]/30'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesOffered;

