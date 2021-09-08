import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import './AboutMe.css'

export default function Services() {
    return (
        <div className="singlePost">
        <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="/images/MyCollege.jpg"
          alt=""
        />
        <img className="wrapper" src="/images/Me.jpeg">

        </img>
          <h1 className="singlePostTitle">
            About Me
          </h1>

          <p className="singlePostDesc">
           Hello, my name is <span className="highlight">Bharatbhushan Karhade </span> currently pursuing <span className="highlight">B.Tech</span> from
           <span className="highlight"> Indian Institute of Technology, Guwahati</span>.

            <br />
            <br />
           I love to <span className="highlight" > Code </span> and <span className="highlight"> Game </span>, and always looking for a chance to learn something new new.
           I grew up in a small town in <span className="highlight">Maharshtra, India</span>, and has spent most of school and college life in hostels in short I know
           hot micromanage. I like to talk and hang around with friends, I like watching movies and listening songs. I love E-Sports and would love to beacome a professional gamer.
           Overall I am here to work and give my fullest potential in both work and in making the world a better place. 
           <br/>
           <br/>
           First few years in college I tried find what would I like to do I explored ML/AI did multiple courses but that never felt right. Then I moved towards coding and development
           and as I explored I find more interesting things to learn about, so I am putting all of my efforts in development.
            </p>
        </div>
      </div>


    )


}