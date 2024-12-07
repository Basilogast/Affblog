import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/heroImg2.0.png";
import creative from "../assets/img/creative.png";
import threearrow from "../assets/img/threearrow2.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Hovering } from "./Hovering";
export const Banner2 = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Website", "Portfolio", "Blog"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h1>
            {`I CREATE YOUR `}{" "}
            <span
              className="txt-rotate"
              dataPeriod="1000"
              data-rotate='[ "Website", "Portfolio", "Blog" ]'
            >
              <span className="wrap">{text}</span>
            </span>
          </h1>
          <p
            style={{
              display: "block",
              textAlign: "center",
              width: "100%",
              fontSize: "20px",
              marginBottom: "50px",
            }}
          >
            and host it <span>FREE</span>
          </p>
          <hr className="myHr"></hr>
          <p
            style={{
              display: "block",
              textAlign: "center",
              width: "100%",
              fontSize: "20px",
              paddingTop: "10px",
            }}
          >
            Don’t know how to start, just give me a message!
          </p>
          <a href="#connect" style={{ textDecoration: "none" }}>
            <button>
              LET'S CONNECT <ArrowRightCircle size={25} />
            </button>
          </a>
          <a
            className="explorebox bg-black border border-2 border-white d-flex justify-content-center"
            href="#work"
            style={{ marginTop: "50px" }}
          >
            <div>
              <h2>FANCY?</h2>
              <p>
                Just take a look at my recent projects to see what you can
                expect
              </p>
            </div>
            <img src={threearrow} alt="Three arrow Img"></img>
          </a>
        </div>
      </Container>
    </section>
  );
};
