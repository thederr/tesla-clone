import React from "react";
import styled from "styled-components";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  RightBtnText,
}) {
  return (
    <>
      <Wrap bgImage={backgroundImg}>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {RightBtnText && 
            <RightButton>
              {RightBtnText}
            </RightButton>
            }
          </ButtonGroup>
          <DownArrow className src='/images/down-arrow.svg' />
        </Buttons>
      </Wrap>
    </>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: not-repeat;

  //------------ Fancy happenings right here---------
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  //------------ Jesus this is fancy---------------

  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical alignment
  align-items: center; //horizontal alignment
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;

  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 10px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  margin-top: 5px;
  height: 40px;

  animation: animateDown infinite 1.5s;
  // will still need to go to index.css and create the animation
  //  using @keyframes

  //dealing with the downarrow overflow
  overflow-x: hidden;
`;

const Buttons = styled.div`
  // When we made the button group a single component that allowed the justify content
  //space between to push as much space between the Header,the Home, the Buttons, and the Bottom
  //nice and easy, but I'm sure I'll need that trick later
`;
