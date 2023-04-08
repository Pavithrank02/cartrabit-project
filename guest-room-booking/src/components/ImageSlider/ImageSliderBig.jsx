import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const ImageSliderBig = () => {
  const sliderImages = [
    {
      url: "https://static.theprint.in/wp-content/uploads/2022/10/Hotel.jpg?compress=true&quality=80&w=376&dpr=2.6",
    },
    {
      url: "https://www.ikea.com/images/a-light-living-room-centred-around-a-jaettebo-three-and-a-ha-d80334e03b4e4094d0e02846c7de2e85.jpg?f=xxxl",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBHle8-1ANSfrZfYxLjOQZ_cJvHs0z3jvfg4ONiWDGEmmHgPVfZpcwOO-mNjy3OdjhDJeOPB2Y1g&usqp=CAU&ec=48600113",
    },
    {
      url: "https://23c133e0c1637be1e07d-be55c16c6d91e6ac40d594f7e280b390.ssl.cf1.rackcdn.com/u/gpch/Park-Hotel-Group---Explore---Grand-Park-City-Hall-Facade.jpg",
    },
  ];
  return (
    <div style={{marginLeft: '4rem'}}>
      <h3 style={{textAlign: 'center'}}>
        {" "}
        View Images of Rooms        </h3>
      <SimpleImageSlider
        width={1000}
        height={500}
        images={sliderImages}
        showNavs={true}
      />
    </div>
  );
}

export default ImageSliderBig