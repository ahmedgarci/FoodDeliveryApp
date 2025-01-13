import { OrderStages } from "../Components/Order/OrderStages"
import { LatestFood } from "../Components/Food/LatestFood"
import ServicesOffered from "../utils/Services"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function HomePage (){
  const aray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return(
        <div>    
    <section class="bg-yellow-500 text-white text-center py-12">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold">Are you starving?</h2>
      <p class="mt-4">Within a few clicks, find meals that you’ll love!</p>
      <div class="mt-8 flex justify-center">
        <input type="text" placeholder="Enter Your Address" class="p-3 rounded-l-md text-gray-700" />
        <button class="bg-red-600 p-3 rounded-r-md">Find Food</button>
      </div>
    </div>
  </section>
      

        <LatestFood/>
        <OrderStages />
 

  <section class="container mx-auto my-12">
    <h3 class="text-2xl font-semibold text-center mb-8">Popular Items</h3>

    <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="swiper"
          breakpoints={{
            600: { slidesPerView: 4 },
          }}
        >
          {aray.map((element) => (
            <SwiperSlide key={element} style={{ paddingBottom: "40px" }}>
              <div className="bg-white p-4 rounded shadow">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ3VqO6tM7PNixYMbf1ZqfXjDdX9Zj_2eEXw&s"
                  alt="Food Item"
                  className="rounded"
                />
                <p className="mt-4 font-semibold">Cheese Burger</p>
                <p className="text-gray-500">$4.00</p>
                <button className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded">
                  Order Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


  </section>

  <ServicesOffered/>
   
      </div>

    )
}

export {HomePage}