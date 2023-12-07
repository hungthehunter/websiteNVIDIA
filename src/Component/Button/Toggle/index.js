import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import styles from "../Toggle/Toggle.module.scss";
const cx = classNames.bind(styles);
function Toggle({ props }) {
  const [name, setName] = useState("Dark mode");
  const [fontColor, setfontColor] = useState("");
  const [backgroundToggle,setBackgroundToggle]=useState("");

  useEffect(() => {
    if (props) {
    
      setfontColor("white");
      setName("Dark mode");
      setBackgroundToggle("#ccc");
   
    } else{
      setName("Light mode");
      setfontColor("black");
      setBackgroundToggle("#000");
    }
  });

  return (
    <div className={cx("toggle")}>
      <span>
        {props ? (
          <BsMoon size={40} className={cx("icon")} style={{ color: fontColor }}></BsMoon>
        ) : (
          <BsSun size={38} className={cx("icon")} style={{ color: fontColor }}></BsSun>
        )}
      </span>
      <span style={{ color: fontColor }}>{name}</span>
      <label className={cx("toggle-switch")}>
        <input type="checkbox" className={cx("switch")} />
        <span style={{backgroundColor: backgroundToggle }}/>
      </label>
    </div>
  );
}

export default Toggle;
