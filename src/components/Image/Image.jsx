import React from "react";
import "./image.less";
import cn from "classnames";

export default function Image(props) {
  return (
    <div
      className={cn(
        "image",
        props.withBackground && "with-background",
        props.isLeft && "left",
        props.isRight && "right",
        props.caption && "caption",
      )}
    >
      <img src={props.src} alt={props.alt} />
      {props.caption && <span className="image-caption">{props.caption}</span>}
    </div>
  );
}
