import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const ImageSlider = () => {
  const sliderImages = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQStPjEmGXOXvN5SBFfcET4KscA0V1OiS2zHHLHvV4l&s",
    },
    {
      url: "https://static.theprint.in/wp-content/uploads/2022/10/Hotel.jpg?compress=true&quality=80&w=376&dpr=2.6",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBHle8-1ANSfrZfYxLjOQZ_cJvHs0z3jvfg4ONiWDGEmmHgPVfZpcwOO-mNjy3OdjhDJeOPB2Y1g&usqp=CAU&ec=48600113",
    },
  ];
  return (
    <div style={{marginLeft: '4rem'}}>
      <h3 style={{textAlign: 'center'}}>
        {" "}
        View Images of Rooms        </h3>
      <SimpleImageSlider
        width={500}
        height={270}
        images={sliderImages}
        showNavs={true}
      />
    </div>
  );
}

export default ImageSlider