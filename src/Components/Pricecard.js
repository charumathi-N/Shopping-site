import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import Badge from "react-bootstrap/esm/Button";
import "./Styles/Pricecard.css";
import Table from "./Table.js";
import { useState } from "react";

function Pricecard({ count, cartHandler,isVisible, isDisable }) {

  //Datas needs to be generated in cards
  const data1 = [
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Title: "Fancy Products",
      Star: "",
      Rate: "$40.00 - $80.00",
      Button_desc: "View Option",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Title: "Special items",
      Star: "⭐⭐⭐⭐",
      Rate: "$20.00 - $18.00",
      Button_desc: "Add to Cart",
      Sales_button: "Sale",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Title: "Sales items",
      Star: "",
      Rate: "$50.00 - $25.00",
      Button_desc: "Add to Cart",
      Sales_button: "Sale",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Title: "Popular items",
      Star: "⭐⭐⭐⭐",
      Rate: "$40.00",
      Button_desc: "Add to Cart",
    },
  ];
  //data's for 2nd row
  const data2 = [
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Title: "Sales items",
      Star: "",
      Rate: "$50.00 - $25.00",
      Button_desc: "Add to Cart",
      Sales_button: "Sale",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Title: "Fancy Products",
      Star: "",
      Rate: "$40.00 - $80.00",
      Button_desc: "View Option",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Title: "Special items",
      Star: "⭐⭐⭐⭐",
      Rate: "$20.00 - $18.00",
      Button_desc: "Add to Cart",
      Sales_button: "Sale",
    },
    {
      img: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      Title: "Popular items",
      Star: "⭐⭐⭐⭐",
      Rate: "$40.00",
      Button_desc: "Add to Cart",
    },
  ];

  return (
    <>
      {/* style={{ display: btnState ? "block" : "none" }} */}
      <Container className="container" style={{ display: isVisible ? "block" : "none" }}>
        <Row>
          {data1.map((x, index) => {
            return (
              <Col key={index} className="col">
                <Card className="card">
                  {x.Sales_button === "Sale" ? (
                    <Badge className="badge">{x.Sales_button}</Badge>
                  ) : (
                    ""
                  )}
                  <Card.Img variant="top" src={x.img} className="cardImg" />
                  <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">{x.Title}</Card.Title>
                    <Card.Text className="cardText">
                      <span style={{ display: "block" }}>{x.Star}</span>
                      <span style={{ display: "block" }}>{x.Rate}</span>
                    </Card.Text>
                    <Button
                      variant="outline-dark"
                      className="Button"
                      onClick={cartHandler}>                    
                      {x.Button_desc}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        <Row>
          {data2.map((x, index) => {
            return (
              <Col key={index} className="col">
                <Card className="card">
                  {x.Sales_button === "Sale" ? (
                    <Badge className="badge">{x.Sales_button}</Badge>
                  ) : (
                    ""
                  )}
                  <Card.Img variant="top" src={x.img} className="cardImg" />
                  <Card.Body className="cardBody">
                    <Card.Title className="cardTitle">{x.Title}</Card.Title>
                    <Card.Text className="cardText">
                      <span style={{ display: "block" }}>{x.Star}</span>
                      <span style={{ display: "block" }}>{x.Rate}</span>
                    </Card.Text>
                    <Button
                      variant="outline-dark"
                      className="Button"
                      onClick={cartHandler}
                    >
                      {x.Button_desc}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>


      {/* table data */}
       <div style={{ display: isVisible ? "none" : "block" }}>
           <Table/>
      </div> 
    </>
  );
}

export default Pricecard;
