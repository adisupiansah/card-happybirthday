"use client";
import React, { useState } from "react";
import ButtonKlikPage from "@/components/ButtonKlikPage";
import Judul from "@/components/Judul";
import Love from "@/components/Love";
import TextCinta from "@/components/TextCinta";
import ReactConfetti from "react-confetti";
import 'animate.css';

const IndekPage = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
  
      const audioPlay = new Audio("/audio/yunkaiblue.mp3");
      audioPlay.play();
    };
  
    return (
      <div>
        {!isClicked ? (
          <ButtonKlikPage handleClick={handleClick} />
        ) : (
          <>
            <ReactConfetti
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={300}
            />
            <div className='animate__animated animate__zoomIn animate__fast'>
              <Judul />
              <Love />
              <TextCinta />
            </div>
          </>
        )}
      </div>
    );
}

export default IndekPage
