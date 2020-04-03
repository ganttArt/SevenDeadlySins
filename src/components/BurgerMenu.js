import React from "react";
import { slide as Menu } from "react-burger-menu";
import BurgerIcon from './Hamburger_icon_Hell.png'

export default props => {
    return (
      <Menu customBurgerIcon={ <img src={ BurgerIcon }/> }>
        <button
          className="left-bar-buttons"
          id='pentagram-button'
          onClick={() => alert("The fact that there's a highway to hell and a stairway to heaven says a lot about anticipated traffic numbers\n - Bill Murray")}
        />
        <button
          className="left-bar-buttons"
          id='pitchfork-button'
          onClick={() => alert("The darkest places in hell are reserved for those who maintain their neutrality in times of moral crisis\n - Dante Alighieri")}
        />
        <button
          className="left-bar-buttons"
          id='six-six-six-button'
          onClick={() => alert('Religion is for people who fear hell.\nSpirituality is for people who have been there.\n - David Bowie')}
          />
        <button
          className="left-bar-buttons"
          id='praying-hands-button'
          onClick = {() => alert("This button will someday take you to Heaven.\nUnfortunately for you, Heaven is not quite ready for you yet.")}
        />
      </Menu>
    );
  };