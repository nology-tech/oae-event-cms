import React from "react";
import Button from "../Button/Button";
import "./ThemePicker.scss";


const ThemePicker = () => {
  return (
    <form className="themepicker">
      <p className="themepicker__subheading">Step 04</p>
      <h2 className="themepicker__heading">Choose Theme</h2>
      <div className="themepicker__dropdown">
          <label for="fonttype">Font Type</label>
          <select id="fonttype" name="fonttype">
            <option value="Modern">Modern</option>
            <option value="Classic">Classic</option>
          </select>
          <div className="themepicker__theme">
            <label for= "theme">Theme Color</label>
            <input for ="theme" type="color" />
          </div>
          <div className="themepicker__accent">
            <label for= "accent">Accent Color</label>
            <input for ="accent" type="color" />
          </div>
      </div>
      <div className="buttons">
        {/* BACK button */}
        <Button buttonText="Back" buttonType="secondary"/>
        {/* NEXT button */}
        <Button buttonText="Next" buttonType="primary"/>
      </div>
    </form>
  );
};

export default ThemePicker;
