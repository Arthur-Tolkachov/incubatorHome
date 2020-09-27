import React from "react";
import s from "./Error.module.css";

function Error404() {
    return (
        <div className={s.wrapper}>
            <span>404</span>
            <span>Page not found!</span>
            <span>— <span className={s.hands}>ฅ</span>/ᐠ . ̫  .ᐟ\<span className={s.hands}>ฅ</span> —</span>
        </div>
    );
}

export default Error404;
