import React from "react";
import Button from "../Button/Button";


const ThemePicker = () => {
  return (
    <div className="themepicker">
      <p className="themepicker__subheading">Step 04</p>
      <h2 className="themepicker__heading">Choose Theme</h2>
      <div className="themepicker__dropdown">
          <label for="theme">Theme</label>
          <select id="theme" name="theme">
            <option value="Sunset Orange">Sunset Orange</option>
          </select>
          <label for="fonttype">Font Type</label>
          <select id="fonttype" name="fonttype">
            <option value="Modern">Modern</option>
            <option value="Classic">Classic</option>
          </select>
      </div>
      <div className="buttons">
        {/* BACK button */}
        <Button buttonText="Back" buttonType="secondary"/>
        {/* NEXT button */}
        <Button buttonText="Next" buttonType="primary"/>
      </div>
    </div>
  );
};

export default ThemePicker;
