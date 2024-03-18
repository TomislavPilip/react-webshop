import "./products.css";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { useState } from "react";

export function Products({ filteredProducts }) {
  const [selectedStar, setSelectedStar] = useState(null);

  const handleStarClick = function (index) {
    setSelectedStar(index);
  };
  console.log(data);
  return (
    <Container container className="p-3 ">
      <Row className="gap-4 d-flex justify-content-center">
        {filteredProducts.map(function (item, index) {
          return (
            <Col
              key={index}
              className=" col-xl-3 col-md-5  col-sm-10 col-10  product-card"
            >
              <div className="">
                <img className="img-fluid p-5" src={item.img} alt="" />
              </div>
              <div className="p-2">
                <h4 className="text-decoration-underline">{item.title}</h4>
                <h5>{item.company}</h5>
                <p>{item.category}</p>
              </div>
              <div className="p-2 d-flex justify-content-between">
                <span>
                  <del>{item.newPrice}</del>
                  <b> {item.prevPrice}$</b>
                </span>
                <span>
                  <Icon icon="ri:shopping-bag-fill" width="2em" height="2em" />
                </span>
              </div>
              <div>
                <span className="mt-3">
                  {[...Array(5)].map((_, index) => (
                    <Icon
                      key={index}
                      icon="ic:baseline-star"
                      width="1.4em"
                      height="1.4em"
                      onClick={() => handleStarClick(index)}
                      style={{
                        color:
                          selectedStar !== null && index <= selectedStar
                            ? "gold"
                            : "black",
                      }}
                    />
                  ))}
                </span>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
