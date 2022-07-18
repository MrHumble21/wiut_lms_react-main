import React from "react";
import DeadlineItem from "./deadline-item/DeadlineItem.component";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function ModuleCarousel(props) {
  const deadlines = [...props.deadlines];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="container p-2 module_carousel">
      <h3
        className="mt-3"
        style={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "22px",
          lineHeight: "163.42%",
        }}
      >
        Deadlines:
      </h3>
      <Carousel
        swipeable={true}
        draggable={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={"tablet"}
        responsive={responsive}
      >
        {deadlines.map((e, i) => (
          <DeadlineItem key={i} module_name={e.module_name} deadline={e.deadline} />
        ))}
      </Carousel>
      
    </div>
  );
}

export default ModuleCarousel;
