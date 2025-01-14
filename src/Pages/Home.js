import { OrderStages } from "../Components/Order/OrderStages";
import { LatestFood } from "../Components/Food/LatestFood";
import ServicesOffered from "../utils/Services";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Fetch } from "../Hooks/Fetch";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ErrorComponent from "../Components/Common/ErrorComponent";
import LoadingComponent from "../Components/Common/LoadingComponent";
import img from "./gif.gif";
function HomePage() {
  const { data, loading, error } = Fetch({
    url: "http://localhost:3500/food/all",
    method: "GET",
  });
  if (error) return <ErrorComponent error={error} />;
  if (loading) return <LoadingComponent />;

  return (
    <div>
      <section
        style={{ backgroundColor: "#FF7102" }}
        class=" text-white text-center py-12 "
      >
        <div class="container mx-auto flex justify-center">
          <img src={img} alt="#" style={{ width: "170px", height: "150px" }} />
          <img src={img} alt="#" style={{ width: "170px", height: "150px" }} />
          <img src={img} alt="#" style={{ width: "170px", height: "150px" }} />
          <div>
            <h2 class="text-4xl font-bold">Are you starving?</h2>
            <p class="mt-4">
              Within a few clicks, find meals that you’ll love!
            </p>
            <div class="mt-8 flex justify-center">
              <input
                type="text"
                placeholder="Enter Your Address"
                class="p-3 rounded-l-md text-gray-700"
              />
              <button class="bg-red-600 p-3 rounded-r-md">Find Food</button>
            </div>
          </div>
          <img src={img} alt="#" style={{ width: "170px", height: "150px" }} />
          <img src={img} alt="#" style={{ width: "170px", height: "150px" }} />
          <img src={img} alt="#" style={{ width: "170px", height: "150px" }} />
        </div>
      </section>
      <LatestFood />
      <OrderStages />
      <section class="container mx-auto my-12">
        <h3 class="text-2xl font-semibold text-center mb-8">Popular Items</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={15}
          slidesPerView={3}
          pagination={{ clickable: true }}
          className="swiper"
          initialSlide={7}
          breakpoints={{
            600: { slidesPerView: 4 },
          }}
          style={{ paddingLeft: "50px", paddingRight: "50px" }}
        >
          {data.map((element) => (
            <SwiperSlide key={element.id} className="pb-10">
              <div id="pop" className="bg-white p-4 rounded shadow">
                <div className="relative w-full pb-[100%] overflow-hidden rounded">
                  <img
                    src={element.imageId.imageUrl}
                    alt={element.name}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
                <p className="mt-4 font-semibold">{element.name}</p>
                <p
                  className="text-gray-500"
                  style={{ textAlign: "justify", fontSize: "14px" }}
                >
                  {element.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <ServicesOffered />
    </div>
  );
}
export { HomePage };
