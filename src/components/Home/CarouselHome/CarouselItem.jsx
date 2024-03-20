import "./carouselItem.css";
import Image1 from "../../../assets/Home-images/bike-clothes-category.jpg";

export function CarouselItem() {
  return (
    <div className="carousel-card">
      <div>
        <img src={Image1} alt="" />
        <h6>MTB</h6>
      </div>
    </div>
  );
}
