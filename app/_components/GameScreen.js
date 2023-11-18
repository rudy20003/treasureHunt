import React from 'react';
import blueStoneIcon from '/public/icons/blueStone.png';
import goldHookIcon from '/public/icons/goldHook.png';
import goldStoneIcon from '/public/icons/goldStone.png';
import skullIcon from '/public/icons/skull.png';
import downArrowIcon from '/public/icons/downArrow.png';
import homeScreenImage from '/public/homeScreen.png';

function GameScreen() {
  return (
    <div>
     
      <img className="w-[1606px] h-[1080px]" src={homeScreenImage} alt="Home Screen" />


      <button className="w-7 h-5 rounded-[10px]" style={{ backgroundImage: `url(${blueStoneIcon})`, backgroundSize: '28px 20px' }} />
      <button className="w-[60px] h-[63px]" style={{ backgroundImage: `url(${goldHookIcon})`, backgroundSize: '60px 63px' }} />
      <button className="w-14 h-[57px] rounded-[28px]" style={{ backgroundImage: `url(${goldStoneIcon})`, backgroundSize: '56px 57px' }} />
      <button className="w-[165px] h-[171px]" style={{ backgroundImage: `url(${skullIcon})`, backgroundSize: '165px 171px' }} />
      <button className="w-[89px] h-56" style={{ backgroundImage: `url(${downArrowIcon})`, backgroundSize: '89px 224px' }} />
    </div>
  );
}

export default GameScreen;
