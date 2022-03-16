import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Home = () => {
  const options = {
    indexAxis: "x",
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      bar: {
        borderWidth: 2,
        width: 5,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Rating My Stacks",
      },
    },
  };

  return (
    <Container id="About">
      <Wrapper>
        <Image src="./img/good.png" />
        <Card>
          <Text>My Bio</Text>{" "}
          <div>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </div>{" "}
          <span>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </span>
          <Statistics>
            <Bar
              data={{
                labels: ["UI/UX", "Frontend", "Backend"],
                datasets: [
                  {
                    label: "Ratings",
                    data: [40, 60, 80],
                    backgroundColor: [
                      "rgba(255, 99, 132, 0.2)",
                      "rgba(54, 162, 235, 0.2)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              options={options}
            />
          </Statistics>
          <Button>View CV</Button>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  min-height: 40rem;
  height: 100%;
  width: 100%;
  padding-top: 20px;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Image = styled.img`
  height: 600px;
  width: 500px;
  object-fit: cover;
  margin-right: 50px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 600px;
    margin-right: unset;
  }
  @media screen and (max-width: 425px) {
    height: 400px;
    margin-right: unset;
  }
`;

const Card = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* margin: 50px; */

  @media screen and (max-width: 768px) {
    width: 700px;
  }
  @media screen and (max-width: 425px) {
    width: 380px;
  }
  @media screen and (max-width: 375px) {
    width: 300px;
  }

  div {
    max-width: 400px;
    @media screen and (max-width: 768px) {
      max-width: 900px;
    }
    @media screen and (max-width: 425px) {
      max-width: 380px;
    }
    @media screen and (max-width: 375px) {
      max-width: 300px;
    }
  }

  span {
    max-width: 400px;
    @media screen and (max-width: 768px) {
      max-width: 900px;
    }
    @media screen and (max-width: 425px) {
      max-width: 380px;
    }
    @media screen and (max-width: 375px) {
      max-width: 300px;
    }
  }
`;

const Statistics = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  height: 50px;
  width: 150px;
  background-color: #96bb7c;
  border-radius: 5px;
  border: none;
  color: white;
  margin-top: 10px;
  font-size: 15px;
  cursor: pointer;
`;

const Text = styled.div`
  margin-top: 20px;
  font-size: 45px;
  font-weight: 600;
`;
