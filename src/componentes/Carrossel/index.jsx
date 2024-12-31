import React, { useRef } from "react";
import styled from "styled-components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CarrosselContainer = styled.div`
  position: relative;
  padding: 16px;
  overflow: hidden; 
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background: none;
  border: none;
  font-size: 36px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }
`;

const VideoList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  overflow: hidden; 
  scroll-behavior: smooth;
  width: calc(250px * 5 + 16px * 4);
`;

const VideoItem = styled.div`
  flex-shrink: 0;
  width: 250px;
  text-align: center;

  video {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  h3 {
    margin-top: 10px;
    font-size: 16px;
    color: #000;
  }
`;

const Carrossel = ({ children }) => {
  const carrosselRef = useRef(null);

  const scroll = (direction) => {
    if (carrosselRef.current) {
      const itemWidth = 200 + 16; 
      const scrollAmount = direction === "left" ? -itemWidth : itemWidth;

      carrosselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <CarrosselContainer>
      <ScrollButton
        onClick={() => scroll("left")}
        style={{ left: "0" }}
        aria-label="Scroll Left"
      >
        <MdChevronLeft />
      </ScrollButton>

      <VideoList ref={carrosselRef}>{children}</VideoList>

      <ScrollButton
        onClick={() => scroll("right")}
        style={{ right: "0" }}
        aria-label="Scroll Right"
      >
        <MdChevronRight />
      </ScrollButton>
    </CarrosselContainer>
  );
};

export default Carrossel;
