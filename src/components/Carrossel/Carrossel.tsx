import React, { useRef } from "react";
import styled from "styled-components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type CarrosselProps = {
  children: React.ReactNode;
};

const CarrosselContainer = styled.div`
  position: relative;
  padding: 0 12px;
  overflow-x: auto;
  max-width: 100vw;
  box-sizing: border-box;
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

  @media (max-width: 768px) {
    display: none; /* oculta as setas em telas pequenas */
  }
    `;
    
    const VideoList = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 16px;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 10px 0;
    box-sizing: border-box;
  `;

const Carrossel: React.FC<CarrosselProps> = ({ children }) => {
  const carrosselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carrosselRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      carrosselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <CarrosselContainer>
      <ScrollButton onClick={() => scroll("left")} style={{ left: 0 }}>
        <MdChevronLeft />
      </ScrollButton>

      <VideoList ref={carrosselRef}>{children}</VideoList>

      <ScrollButton onClick={() => scroll("right")} style={{ right: 0 }}>
        <MdChevronRight />
      </ScrollButton>
    </CarrosselContainer>
  );
};

export default Carrossel;
