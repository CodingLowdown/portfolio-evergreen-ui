import React, {Component} from 'react';
import {Heading, Pane, Avatar, Paragraph, Button} from 'evergreen-ui'
import background from '../assets/Water_Close_Up_H264_Videvo.mp4'
import Navbar from '../containers/navbar'
import Image from '../assets/suit-cartoon.jpg'

class Home extends Component {
    constructor() {
        super()
        
        this.myDivToFocus = React.createRef()
    }
    handleOnClick = (event) => {
        //.current is verification that your element has rendered
        if(this.myDivToFocus.current){
            this.myDivToFocus.current.scrollIntoView({ 
               behavior: "smooth", 
               block: "start"
            })
        }
    }

    render () {
        //const fade = this.state.fade
        return (
            <Pane>
                <Avatar src={Image} alt="My photo"
                size={240}
                marginTop="160px"
                >
                </Avatar>
                <Heading 
                is="h1"
                justifyContent="center"
                size={900}
                fontFamily= "mono"
                color="#FAE3CD"
                >
                    Nicholas Lowe
                </Heading>
                <Heading 
                justifyContent="center"
                size={700}
                fontFamily= "display"
                color="#FAE3CD"
                >
                    Web Dev, Scraper
                </Heading>

                <Paragraph padding={20}
                justifyContent="center"
                width="40%"
                display= "inline-block"
                color="#E4E7EB"
                >
                    I am a web developer and scraper with 5+ years of experience.
                    I focus on simplifying solutions to meet clients goals.
                </Paragraph>
                <Pane
                padding={100}
                justifyContent="center">
                <Button
                iconBefore="envelope"
                is="a" href="mailto:nickalowe98@gmail.com"
                >
                    Contact Me
                </Button>
                </Pane>
                
            </Pane>
            
        )
    }
}

export default Home;