import React from "react";
import styled from "styled-components";
import blood from "../assets/images/blood.png";
import pressure from "../assets/images/pressure.png";
import lungs from "../assets/images/lungs.png";

const Container = styled.div`
  width: 100%;
  margin-top: 0.3rem;
  div.title {
    background-color: transparent;
    color: #ffffff;
    padding: 0.4rem 1rem;
    font-size: 14px;
    font-weight: 600;
    text-transform: capitalize;
  }
  div.card {
    width: 100%;
    background-color: #fff;
    padding: 0.4rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  height: 153px;

  }
`;

const ActivityRow = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  * {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(84, 84, 84, 0.84);
    font-size: 14px;
    font-weight: 600;
    border-bottom: 0.5px solid lightgray;
  }
  .iconBox {
    width: 120px;
    height: 100%;
    img {
      width: 34px;
      height: 34px;
      border-bottom: none;
    }
  }
  .textBox {
    width: calc(100% - 120px);
    justify-content: flex-start;
  }
  .SNBox {
    width: 65px;
  }
`;

const Activities = (props) => {
  return (
    <ActivityRow>
      <div className="iconBox">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="textBox">{props.text}</div>
      <div className="SNBox">{props.SN}</div>
    </ActivityRow>
  );
};

const RecentActivities = () => {
  const ActivityData = [
    {
      img: blood,
      text: "HIV Blood Draw Test",
      "S/N": "A100",
      alt: "blood",
    },
    {
      img: lungs,
      text: "TB Radiology XRay",
      "S/N": "A30",
      alt: "lungs",
    },
    {
      img: pressure,
      text: "Blood Pressure Check",
      "S/N": "A10",
      alt: "pressure",
    },
  ];

  return (
    <Container>
      <div className="title">recent activity:</div>
      <div className="card">
        {ActivityData.map((data) => (
          <Activities
            icon={data.icon}
            text={data.text}
            SN={data["S/N"]}
            alt={data.alt}
            img={data.img}
          />
        ))}
      </div>
    </Container>
  );
};

export default RecentActivities;
