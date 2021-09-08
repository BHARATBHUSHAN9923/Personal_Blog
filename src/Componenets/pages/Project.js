import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
import Linkify from 'react-linkify';
export default function Project() {
    return (
        <div className="singlePost">
        <div className="singlePostWrapper">
        <img
          className="singlePostImg1"
          src="/images/react&django.png"
          alt=""
        />
          <h1 className="singlePostTitle">
            Party Controller
            
          </h1>

          <p className="singlePostDesc">
            Few months ago I started exploring the world of development, lots of things to learn Webdevelopment, Appdevelopment,
            Cryptocurrency, and a lot more. Tried few things but the thing that struct me most is WedD I mean such a beautiful technology it is.
            One can learn some basic things(html,css) and then could pick a framework and little explore is what all needed to build a website,
            no need to find a professional to build our website we can create on our own.
            <br/>
            <br/>
            I wanted to learn one frontend and one backend framework and the sheer amount of option I had was astonishing, after lot of reaserach and
            seeing how both work I picked <span className ="highlight">React-Frontend</span> and <span className = "highlight">Django-Backend </span>
            as my route. Went to there website learned few thing how to start project how to save models or if it is react how to route pages. And now I wanted
            to build something of me using the things I have learned, but I was hit with a hurdle <span className = "highlight1">How to connect React-fronted with Django-Backend </span>.
            Took me lot of time as to how to do this things and I got introduced to DjangoRest-Framework, what this essentially is this allows frontend to communicate
            react based front end app with Django Backend saw some tutorials and I wa ready to make start.
            <br/>
            <br/>
            What I wanted to do was to create Party-Music Controller. What it is? So it is a wesbsite where user can make there specific rooms with the sepcific settings
            and an unique code for the room. What does the room do? So room has multiple propertied like 1)Is it onlt guest who can play/pause song 2)How many votes should be there
            to skip a song like this. So host can have acces to the room properties and can change any number of people can join the room and they could vore as to skip the song or not,
            if number of votes get equal to No of votes needed to skip the song then the song would be skipped.
            <br/>
            <br/>
            <Linkify>Go to project github Repo https://github.com/BHARATBHUSHAN9923/Party_Music</Linkify>
    
     

          </p>
        </div>
      </div>


    )


}