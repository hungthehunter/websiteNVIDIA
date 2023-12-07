import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "../Button/Button.module.scss";
const cx=classNames.bind(styles);
function Button({to,href,primary,children,onClick}){
    let Comp="button";

    const props={
        onClick,
    };

    if(to){
        props.to=to;
        Comp=Link;
    }else if(href){
        props.href=href;
        Comp="a";
    }

    const classes=cx("wrapper")
    return(
<Comp className={classes} {...props}>
    <span>{children}</span>
</Comp>
    )
}
export default Button;