import React from "react";
import "./Forntpagecss.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ForntPage() {
  return (
    <div className="container-fluid bg-inf">
      {" "}
      <br />
      <div className="container bg-succes ">
        {" "}
        <h3 className="fw-bold ">What's on your mind?</h3>{" "}
      </div>
      <div className="container bg-secondar ">
        <div className="d-flex  gap-3  overflow-hidde overflow-x-scroll  scroll-line ">
          <div>
            {" "}
            <img src="/images/asset 0.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 1.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 2.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 3.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 4.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 5.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 6.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 7.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 8.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 9.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 10.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 11.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 12.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 13.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 14.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 15.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 16.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 17.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 18.jpeg" alt="" width={150} height={180} />
          </div>
          <div>
            {" "}
            <img src="/images/asset 19.jpeg" alt="" width={150} height={180} />
          </div>
        </div>
      </div>
      <br />
      <div className="container bg-succes ">
        {" "}
        <h3 className="fw-bold ">Top restaruant chains in Madurai</h3>{" "}
      </div>
      <br />
      <div className="container bg-dange ">
        <div className=" bg-dange row g-5">
          <div className="col-lg-3 col-md-6 col-sm-12 mainCard ">
            <Link to="" style={{ textDecoration: "none" }}>
              <Card
                style={{ background: "white", borderColor: "white" }}
                className=" image "
              >
                <Card.Img
                  variant="top"
                  src="/images/asset 20.jpeg"
                  className="position-relative "
                  style={{ maxHeight: "200px", borderRadius: "20px" }}
                />
                <Card.Body className=" position-relative pb-0 pt-1 ">
                  <Card.Title className="card-detail position-absolute ">
                    ITEMS AT &#8377;178{" "}
                  </Card.Title>
                </Card.Body>

                <Card.Text className="bg-warnin pt-0 px-3 ">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "02060c",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    Chinese Wok
                  </span>
                  <br />
                  <img
                    src="./images/star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="d-inline-block"
                  />{" "}
                  <span style={{ color: "212529", fontWeight: "bold" }}>
                    4 |20-30 mins
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Chinese, Asian, Tibetan, Desserts, Old Keelavasel Road
                    Madurai
                  </span>
                </Card.Text>
              </Card>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mainCard">
            <Link to="" style={{ textDecoration: "none" }}>
              <Card style={{ background: "white", borderColor: "white" }}>
                <Card.Img
                  variant="top"
                  src="/images/asset 21.jpeg"
                  className="position-relative "
                  style={{ maxHeight: "200px", borderRadius: "20px" }}
                />
                <Card.Body className=" position-relative pb-0 pt-1 ">
                  <Card.Title className="card-detail">
                    ITEMS AT &#8377;179{" "}
                  </Card.Title>
                </Card.Body>

                <Card.Text className="bg-warnin pt-0 px-3 ">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "02060c",
                      fontWeight: "bold",
                    }}
                  >
                    Pizza Hut
                  </span>
                  <br />
                  <img
                    src="./images/star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="d-inline-block"
                  />{" "}
                  <span style={{ color: "212529", fontWeight: "bold" }}>
                    4.2 |30-35 mins
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Anna Nagar
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Madurai
                  </span>
                </Card.Text>
              </Card>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mainCard">
            <Link to="" style={{ textDecoration: "none" }}>
              <Card style={{ background: "white", borderColor: "white" }}>
                <Card.Img
                  variant="top"
                  src="/images/asset 22.jpeg"
                  className="position-relative "
                  style={{ maxHeight: "200px", borderRadius: "20px" }}
                />
                <Card.Body className=" position-relative pb-0 pt-1 ">
                  <Card.Title className="card-detail">
                    {" "}
                    50% OF UPTO&#8377;100{" "}
                  </Card.Title>
                </Card.Body>

                <Card.Text className="bg-warnin pt-0 px-3 ">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "02060c",
                      fontWeight: "bold",
                    }}
                  >
                    UBQ by Barbeque Nation
                  </span>
                  <br />
                  <img
                    src="./images/star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="d-inline-block"
                  />{" "}
                  <span style={{ color: "212529", fontWeight: "bold" }}>
                    3.9 |40-45mins
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    North Indian Barbecue, Briyani,...
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Anna Nagar
                  </span>
                </Card.Text>
              </Card>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mainCard ">
            <Link to="" style={{ textDecoration: "none" }}>
              <Card style={{ background: "white", borderColor: "white" }}>
                <Card.Img
                  variant="top"
                  src="/images/asset 23.jpeg"
                  className="position-relative "
                  style={{ maxHeight: "200px", borderRadius: "20px" }}
                />
                <Card.Body className=" position-relative pb-0 pt-1 ">
                  <Card.Title className="card-detail">
                    ITEMS AT &#8377;169{" "}
                  </Card.Title>
                </Card.Body>

                <Card.Text className="bg-warnin pt-0 px-3 ">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "02060c",
                      fontWeight: "bold",
                    }}
                  >
                    NIC Ice Creams
                  </span>
                  <br />
                  <img
                    src="./images/star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="d-inline-block"
                  />{" "}
                  <span style={{ color: "212529", fontWeight: "bold" }}>
                    4.4 |20-30 mins
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Ice Cream, Desserts
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    KK Nagar
                  </span>
                </Card.Text>
              </Card>
            </Link>
          </div>

          <div>
            <hr />
          </div>
        </div>
      </div>
      <div className="container bg-succes ">
        {" "}
        <h4 className="fw-bold ">
          Restaurants with online food delivery in Madurai
        </h4>{" "}
      </div>{" "}
      <br />
      <div className=" container  w-100 bg-dange">
        <ul className="list-text d-flex  gap-3  overflow-hidde overflow-x-scroll  scroll-line">
          <li className="target-list p-1">Filter</li>
          <li className="target-list p-1">Sort By</li>
          <li className="target-list p-1">Fast Delivery</li>
          <li className="target-list p-1">New on Foodie's</li>
          <li className="target-list p-1">Rating 4.0+</li>
          <li className="target-list p-1">Offers</li>
          <li className="target-list p-1">Rs. 300-Rs. 600</li>
          <li className="target-list p-1">Pure Veg</li>
          <li className="target-list p-1">Less than Rs.300</li>
        </ul>
      </div>
      <br />
      <div className="bg-dange container ">
        <div className="row w-100  ">
          <div className="col-lg-3 col-md-6 col-sm-12 mainCard ">
            <Link to="" style={{ textDecoration: "none" }}>
              <Card style={{ background: "white", borderColor: "white" }}>
                <Card.Img
                  variant="top"
                  src="/images/asset 21.jpeg"
                  className="position-relative card-image"
                  style={{ maxHeight: "200px", borderRadius: "20px" }}
                />
                <Card.Body className=" position-relative pb-0 pt-1 ">
                  <Card.Title className="card-detail">
                    ITEMS AT &#8377;179{" "}
                  </Card.Title>
                </Card.Body>

                <Card.Text className="bg-warnin pt-0 px-3 ">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "02060c",
                      fontWeight: "bold",
                    }}
                  >
                    Pizza Hut
                  </span>
                  <br />
                  <img
                    src="./images/star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="d-inline-block"
                  />{" "}
                  <span style={{ color: "212529", fontWeight: "bold" }}>
                    4.2 |40-45 mins
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Anna Nagar
                  </span>
                </Card.Text>
              </Card>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mainCard ">
            <Link to="" style={{ textDecoration: "none" }}>
              <Card style={{ background: "white", borderColor: "white" }}>
                <Card.Img
                  variant="top"
                  src="/images/asset 23.jpeg"
                  className="position-relative "
                  style={{ maxHeight: "200px", borderRadius: "20px" }}
                />
                <Card.Body className=" position-relative pb-0 pt-1 ">
                  <Card.Title className="card-detail">
                    ITEMS AT &#8377;169{" "}
                  </Card.Title>
                </Card.Body>

                <Card.Text className="bg-warnin pt-0 px-3 ">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "02060c",
                      fontWeight: "bold",
                    }}
                  >
                    NIC Ice Creams
                  </span>
                  <br />
                  <img
                    src="./images/star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="d-inline-block"
                  />{" "}
                  <span style={{ color: "212529", fontWeight: "bold" }}>
                    4.4 |20-30 mins
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Ice Cream, Desserts
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    KK Nagar
                  </span>
                </Card.Text>
              </Card>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mainCard ">
            <Link to="" style={{ textDecoration: "none" }}>
              <Card style={{ background: "white", borderColor: "white" }}>
                <Card.Img
                  variant="top"
                  src="/images/asset 24.jpeg"
                  className="position-relative "
                  style={{ maxHeight: "200px", borderRadius: "20px" }}
                />
                <Card.Body className=" position-relative pb-0 pt-1 ">
                  <Card.Title className="card-detail w-100">
                    50% OFF UPTO &#8377;100{" "}
                  </Card.Title>
                </Card.Body>

                <Card.Text className="bg-warnin pt-0 px-3 ">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "02060c",
                      fontWeight: "bold",
                    }}
                  >
                    Burger King
                  </span>
                  <br />
                  <img
                    src="./images/star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="d-inline-block"
                  />{" "}
                  <span style={{ color: "212529", fontWeight: "bold" }}>
                    4.4 |25-30 mins
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Burger, American
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    KK Nagar
                  </span>
                </Card.Text>
              </Card>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mainCard ">
            <Link to="" style={{ textDecoration: "none" }}>
              <Card style={{ background: "white", borderColor: "white" }}>
                <Card.Img
                  variant="top"
                  src="/images/asset 26.jpeg"
                  className="position-relative "
                  style={{ maxHeight: "200px", borderRadius: "20px" }}
                />
                <Card.Body className=" position-relative pb-0 pt-1 ">
                  <Card.Title className="card-detail">
                    20% OFF UPTO &#8377;50{" "}
                  </Card.Title>
                </Card.Body>

                <Card.Text className="bg-warnin pt-0 px-3 ">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "02060c",
                      fontWeight: "bold",
                    }}
                  >
                    KFC
                  </span>
                  <br />
                  <img
                    src="./images/star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="d-inline-block"
                  />{" "}
                  <span style={{ color: "212529", fontWeight: "bold" }}>
                    4.2 |25-30 mins
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Burger,Fast Food, Roll, & Wraps
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Kalavasal
                  </span>
                </Card.Text>
              </Card>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className="bg-dange container ">
        <div className="row w-100  ">
          <div className="col-lg-3 col-md-6 col-sm-12 mainCard ">
            <Link to="" style={{ textDecoration: "none" }}>
              <Card style={{ background: "white", borderColor: "white" }}>
                <Card.Img
                  variant="top"
                  src="/images/asset 25.jpeg"
                  className="position-relative card-image"
                  style={{ maxHeight: "200px", borderRadius: "20px" }}
                />
                <Card.Body className=" position-relative pb-0 pt-1 ">
                  <Card.Title className="card-detail">
                    ITEMS AT &#8377;169{" "}
                  </Card.Title>
                </Card.Body>

                <Card.Text className="bg-warnin pt-0 px-3 ">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "02060c",
                      fontWeight: "bold",
                    }}
                  >
                    Big Bowl
                  </span>
                  <br />
                  <img
                    src="./images/star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="d-inline-block"
                  />{" "}
                  <span style={{ color: "212529", fontWeight: "bold" }}>
                    3.9 |20-25 mins
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Anna Nagar
                  </span>
                </Card.Text>
              </Card>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mainCard ">
            <Link to="" style={{ textDecoration: "none" }}>
              <Card style={{ background: "white", borderColor: "white" }}>
                <Card.Img
                  variant="top"
                  src="/images/asset 27.jpeg"
                  className="position-relative "
                  style={{ maxHeight: "200px", borderRadius: "20px" }}
                />
                <Card.Body className=" position-relative pb-0 pt-1 ">
                  <Card.Title className="card-detail">
                    20% OFF UPTO &#8377;50{" "}
                  </Card.Title>
                </Card.Body>

                <Card.Text className="bg-warnin pt-0 px-3 ">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "02060c",
                      fontWeight: "bold",
                    }}
                  >
                    McDonlad's
                  </span>
                  <br />
                  <img
                    src="./images/star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="d-inline-block"
                  />{" "}
                  <span style={{ color: "212529", fontWeight: "bold" }}>
                    4.3 |20-25 mins
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Burger, Beverages, Cafe, Desserts
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    KK Nagar
                  </span>
                </Card.Text>
              </Card>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mainCard ">
            <Link to="" style={{ textDecoration: "none" }}>
              <Card style={{ background: "white", borderColor: "white" }}>
                <Card.Img
                  variant="top"
                  src="/images/asset 22.jpeg"
                  className="position-relative "
                  style={{ maxHeight: "200px", borderRadius: "20px" }}
                />
                <Card.Body className=" position-relative pb-0 pt-1 ">
                  <Card.Title className="card-detail">
                    50% OFF UPTO &#8377;100{" "}
                  </Card.Title>
                </Card.Body>

                <Card.Text className="bg-warnin pt-0 px-3 ">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "02060c",
                      fontWeight: "bold",
                    }}
                  >
                    UBQ by Barbrque Nation
                  </span>
                  <br />
                  <img
                    src="./images/star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="d-inline-block"
                  />{" "}
                  <span style={{ color: "212529", fontWeight: "bold" }}>
                    3.9 |35-40 mins
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    North Indian, Barbeque, Biryani
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Thappakulam
                  </span>
                </Card.Text>
              </Card>
            </Link>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12 mainCard ">
            <Link to="" style={{ textDecoration: "none" }}>
              <Card style={{ background: "white", borderColor: "white" }}>
                <Card.Img
                  variant="top"
                  src="/images/asset 28.jpeg"
                  className="position-relative "
                  style={{ maxHeight: "200px", borderRadius: "20px" }}
                />
                <Card.Body className=" position-relative pb-0 pt-1 ">
                  <Card.Title className="card-detail">
                    50% OFF UPTO &#8377;100{" "}
                  </Card.Title>
                </Card.Body>

                <Card.Text className="bg-warnin pt-0 px-3 ">
                  <span
                    style={{
                      fontSize: "1.2rem",
                      color: "02060c",
                      fontWeight: "bold",
                    }}
                  >
                    La Pino's Pizza
                  </span>
                  <br />
                  <img
                    src="./images/star.png"
                    alt=""
                    width={20}
                    height={20}
                    className="d-inline-block"
                  />{" "}
                  <span style={{ color: "212529", fontWeight: "bold" }}>
                    4.1 |30-35 mins
                  </span>{" "}
                  <br />
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    Pizza, Pastas, Italian, Desserts
                  </span>{" "}
                  <br />{" "}
                  <span
                    style={{
                      color: "#02060c",
                      opacity: "60.0%",
                      fontWeight: "400",
                    }}
                  >
                    KK Nagar
                  </span>
                </Card.Text>
              </Card>
            </Link>
          </div>
        </div>
      </div>
      <br />
      <div className=" overflow-x-scroll w-100  design ">
        <div className="container bg-succes ">
          {" "}
          <h4 className="fw-bold ">Best Place to Eat Across Cities</h4>{" "}
        </div>{" "}
        <br />
        <div className=" container  w-100 bg-dange ">
          <ul className="list-text2 d-flex  gap-3  overflow-hidde overflow-x-scrol  scroll-lin">
            <li className="target-list2 p-1">Best Restaurants in Bangalore</li>
            <li className="target-list2 p-1">Best Restaurants in Pune</li>
            <li className="target-list2 p-1">Best Restaurants in Mumbai</li>
            <li className="target-list2 p-1">Best Restaurants in Delhi</li>
          </ul>
        </div>
        <div className=" container  w-100 bg-dange">
          <ul className="list-text2 d-flex  gap-3  overflow-hidde overflow-x-scrol  scroll-lin">
            <li className="target-list2 p-1">Best Restaurants in Chennai</li>
            <li className="target-list2 p-1">Best Restaurants in Kolkata</li>
            <li className="target-list2 p-1">Best Restaurants in Hyderdad</li>
            <li className="target-list2 p-1">Best Restaurants in Chandigarh</li>
          </ul>
        </div>
        <div className=" container  w-100 bg-dange">
          <ul className="list-text2 d-flex  gap-3  overflow-hidde overflow-x-scrol  scroll-lin">
            <li className="target-list2 p-1">Best Restaurants in Ahmedabad</li>
            <li className="target-list2 p-1">Best Restaurants in Jaipur</li>
            <li className="target-list2 p-1">Best Restaurants in Nagpur</li>
            <li className="target-list2 p-1">Show More</li>
          </ul>
        </div>{" "}
        <br />
        <div className="container bg-succes  ">
          <h4 className="fw-bold ">Best Cuisines Near Me</h4>
        </div>{" "}
        <br />
        <div className=" container  w-100 bg-dange">
          <ul className="list-text2 d-flex  gap-3  overflow-hidde overflow-x-scrol  scroll-lin">
            <li className="target-list2 p-1">Indian Restaurant Near Me</li>
            <li className="target-list2 p-1">
              South Indian Restaurants Near Me
            </li>
            <li className="target-list2 p-1">Kerala Restaurants Near Me</li>
            <li className="target-list2 p-1">Chinese Restaurants Near Me</li>
          </ul>
        </div>
        <div className=" container  w-100 bg-dange">
          <ul className="list-text2 d-flex  gap-3  overflow-hidde overflow-x-scrol  scroll-lin">
            <li className="target-list2 p-1">Bengali Restaurant Near Me</li>
            <li className="target-list2 p-1">Korean Restaurants Near Me</li>
            <li className="target-list2 p-1">
              North Indian Restaurants Near Me
            </li>
            <li className="target-list2 p-1">Seafood Restaurants Near Me</li>
          </ul>
        </div>
        <div className=" container  w-100 bg-dange">
          <ul className="list-text2 d-flex  gap-3   overflow-scroll   scroll-line">
            <li className="target-list2 p-1">Punjabi Restaurant Near Me</li>
            <li className="target-list2 p-1">Itlaian Restaurants Near Me</li>
            <li className="target-list2 p-1">Andhar Restaurants Near Me</li>
            <li className="target-list2 p-1">Show More</li>
          </ul>
        </div>{" "}
        <br />
      </div>
      <div className="container bg-succes ">
        {" "}
        <h4 className="fw-bold ">Explor Every Restaurant Near Me</h4>{" "}
      </div>{" "}
      <br />
      <div className=" container  w-100 bg-dange ">
        <div className="target-list3 p-3 m-2"> Explore Restaurants Near Me</div>
        <div className="target-list3 p-3 m-2 ">
          {" "}
          Explore Top Rated Restaurants Near Me
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br />
      {/* <div className='container bg-succes '> <h4 className='fw-bold '>Explor Every Restaurant Near Me</h4>  </div> <br /> */}
      <div className="container-fluid bg-secondar ">
        <div className="container ">
          <div className=" container  w-100 bg-dange d-flex justify-content-around row  ">
            <div className="target-lis col d-none d-lg-block ">
              <h2 className="fw-bold text-secondary">
                For Favorite Better Experience, download the Paradie's app now
              </h2>
            </div>
            <div className="target-lis col  d-flex   ">
              <img
                src="./images/asset 41.png"
                alt=""
                width={200}
                height={70}
                className="d-inline-block"
              />
              <img
                src="./images/asset 42.png"
                alt=""
                width={200}
                height={70}
                className="d-inline-block"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <br /> <br />
      <div className="container bg-black ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ForntPage;
