import React from "react";
import ReactPlayer from "react-player";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ReactPlayer
        className="react-player"
        url="/video/dress1.mp4"
        controls={false}
        playing
      />
    </div>
  );
}
