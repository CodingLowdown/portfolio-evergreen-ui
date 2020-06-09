import React, {Component} from 'react';
import {Pane, Paragraph, Heading} from 'evergreen-ui'
//import Popup from '../containers/popup'

import Project1 from '../assets/request-promise-functions.png'
import Project1img2 from '../assets/puppeteer-captcha-function.png'

import Project2 from '../assets/BrickBreakerGame.png'
import Project2img2 from '../assets/BrickBreaker.png'

import Project3 from '../assets/OddsPortalScrape.png'
import Project3img2 from '../assets/OddsPortalScrapes.png'

import Project4 from '../assets/vue-apollo-trivia-app.png'
import Project4img2 from '../assets/TriviaBackend.png'

import Project5 from '../assets/401k-data-scrape.png'
import Project5img2 from '../assets/401k-data-scrape.png'

import Project6 from '../assets/Transfer-Markt-scrape.png'
import Project6img2 from '../assets/Transfer-Markt-scrape.png'

import { AwesomeButtonSocial } from 'react-awesome-button';
  import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'


class Projects extends Component {
    constructor() {
        super();
    this.state = {
       seen: false,
       Name: '',
       ProjectsR1 : [{
           id: "Project1",
           Name: "Linkedin Scraper Api App",
           img: Project1,
           descrip1: "This project, highlighted on the home page, was built to allow information to flow from linkedin to the user.",
           descrip2: "Additionally, the goal was to store the data in a database and utilze it to be able to lessen the demand on linkedin for repeated requests. ",
           descrip3: "Used express, nodejs, mongoDB, and puppeteer",
           secondimg: Project1img2,
           repo: "SN_API",
           smalldes: "Backend API to interact with Linkedin and house data"
        },{
            id: "Project2",
            Name: "Brick Breaker Game",
            img: Project2,
            descrip1: "This project, was a simple COVID-19 game for my nephews, nieces and boys to play. I took their input on some of the design and randomness of the colors of the bricks.",
            descrip2: "The design also included some minimal mobile optimiation using touch screen and size changing. It is currently still hosted on heroku here:",
            descrip3: " Using p5js with javascript. ",
            secondimg: Project2img2,
            repo: "gameBreakers",
            smalldes: "Custome brick breaker game for quarantine"
         },{
            id: "Project3",
            Name: "Odds Portal Scrape UI",
            img: Project3,
            descrip1: "This project, was part of similar freelance work I have been doing with python web scrapers and analysis.",
            descrip2: "The goal was to pull information from Odds portal for historical games. I used the xhr requests, while figuring out the codes for each sport, each tournament and each game. Each tab of betting odds has a slightly different XHR request within a game. ",
            descrip3: "Used python",
            secondimg: Project3img2,
            repo: "Odds_portal",
            smalldes: "Data extraction from Odds portal for analysis"
            
         }],
         ProjectsR2 : [{
            id: "Project4",
            Name: "Soccer Trivia App",
            img: Project4,
            descrip1: "This project, was one of my first to play around with Vue and apollo graphql to create an App.",
            descrip2: "Data was scraped from a soccer site, using graphql it was pulled then cached for the remaining questions responsiveness",
            descrip3: "Vue, nodejs, graphql and appollo-express were used",
            secondimg: Project4img2,
            repo: "soc_Trivial",
            smalldes: "Front end soccer Trivia app"
         },{
             id: "Project5",
             Name: "Pension Data Scrape",
             img: Project5,
             descrip1: "This project, highlighted a scraping task to pull data from a webiste that did not contain a good search function",
             descrip2: "I created a custom google search project and utilized it to pull the right pension plans",
             descrip3: "Used python ",
             secondimg: Project5img2,
             repo: "PensionScrape",
             smalldes: "Utilize Googles search API for data extraction from a single source"
          },{
             id: "Project6",
             Name: "Transfer Markt Scrape",
             img: Project6,
             descrip1: "This project, highlighted a recent upwork task to scrape transfer market data from soccer url.",
             descrip2: "This project was complex as it needed to role through layers of league, club then player to get to the transfer market then scrape the required attributes ",
             descrip3: "Used python",
             secondimg: Project6img2,
             repo: "TM_scraper",
             smalldes: "Data extraction for analysis on the soccer player market"
             
          }]
    }; 
    }   
    
    
    togglePop = (e) => {
        let Name = ''
        try {
            Name=e.target.alt
        } catch {
            Name =''
        }
        let Projects = [...this.state.ProjectsR1, ...this.state.ProjectsR2]
        let descrip1=''
        let descrip2=''
        let descrip3=''
        let secondimg=''
        console.log(Projects)
        for (let nmck = 0; nmck < Projects.length; nmck+=1) {
            if (Projects[nmck].Name===Name) {
                descrip1=Projects[nmck].descrip1
                descrip2=Projects[nmck].descrip2
                descrip3=Projects[nmck].descrip3
                secondimg=Projects[nmck].secondimg
                console.log(descrip1)
            }
        }
           
       
        this.setState({
        seen: !this.state.seen,
        Name: Name,
        descrip1: descrip1,
        descrip2: descrip2,
        descrip3: descrip3,
        secondimg: secondimg
        })
    };

    render () {

        const DivStyle= {
                float:"left",
                display:"grid",
                justifyContent:"center",
                alignItems:"center",
                flexDirection:"column",
                overflow:"hidden"
        }

        let links = [];
        let projects = this.state.ProjectsR1
        for (var i = 0; i < projects.length; i++) {
            var item = projects[i];
            var href = 'https://github.com/CodingLowdown/' + item.repo
            links.push(<Pane
            style={DivStyle}
            height="20%"
            margin={12}
            width="25%"
            marginLeft={100}
            background="greenTint"
            elevation={0}
            ><Heading>{item.Name}</Heading>
            <Paragraph>
                        {item.smalldes}
            </Paragraph>
            <Paragraph>
                        {item.descrip3}
            </Paragraph>
             <Pane padding={24} className="button">
             <AwesomeButtonSocial
                cssModule={AwesomeButtonStyles}
                position="absloute"
                bottom="0"
                padding="200px"
                type="github"
                href={href}
            >
                Source
            </AwesomeButtonSocial>
            </Pane>
             </Pane>
              
                );
        }
        let links2 = [];
        let projects2 = this.state.ProjectsR2
        for (var i = 0; i < projects2.length; i++) {
            var item2 = projects2[i];
            var href2 = 'https://github.com/CodingLowdown/' + item2.repo
            links2.push(<Pane
                style={DivStyle}
            height="50%"
            width="25%"
            margin={12}
            marginLeft={100}
            background="#FAE3CD"
            elevation={4}
            >
                <Heading>{item2.Name}</Heading>
                    <Paragraph>
                        {item2.smalldes}
                    </Paragraph>
                    <Paragraph>
                        {item2.descrip3}
            </Paragraph>
              <Pane 
              padding={24}
              className="button">
             <AwesomeButtonSocial
                cssModule={AwesomeButtonStyles}
                type="github"
                href={href2}
            >
                Source
            </AwesomeButtonSocial>
            </Pane>
             </Pane>);
        }

        return (
            <Pane>
                <Heading size={900}
                padding={48}
                color="#FAE3CD"
                >Projects</Heading>
                <Pane>
                    <Pane
                    >
                        {links}
                    </Pane>
                    <Pane>
                        {links2}
                    </Pane>
                    
                </Pane>
               
                
            </Pane>
        );
    }
}

export default Projects;