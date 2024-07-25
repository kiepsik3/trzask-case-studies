import React from "react";
import cn from "classnames";
import "./video.less";

export default function Video(props) {
  return (
    <div
      className={cn(
        "video",
        props.withBackground && "with-background",
        props.caption && "caption",
      )}
    >
      <div className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${props.ytId}?autoplay=${props.autoplay}&mute=${props.mute}&loop=${props.loop}`}
          title="Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      {props.caption && <span className="video-caption">{props.caption}</span>}
    </div>
  );
}
