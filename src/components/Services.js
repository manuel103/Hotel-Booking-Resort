import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Room info lorem ipsum dolor sit amer consectetur adipisicing elit Magni corposisi!",
      },
      {
        icon: <FaHiking />,
        title: "Hiking available",
        info:
          "Room info lorem ipsum dolor sit amer consectetur adipisicing elit Magni corposisi!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          "Room info lorem ipsum dolor sit amer consectetur adipisicing elit Magni corposisi!",
      },
      {
        icon: <FaBeer />,
        title: "Best beer",
        info:
          "Room info lorem ipsum dolor sit amer consectetur adipisicing elit Magni corposisi!",
      },
    ],
  };
  render() {
    return (
      <section>
        <Title title="services" />
        <div className="services-center">
            {this.state.services.map((item,index)=>{
                return <article key={index} className="service">
                    <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
                </article>
            })}
        </div>
      </section>
    );
  }
}
