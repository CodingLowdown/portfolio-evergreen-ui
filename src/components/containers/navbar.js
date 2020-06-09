import React, {Component} from 'react';
import {Pane, Tablist, Tab, Paragraph} from 'evergreen-ui'
import Home from '../pages/home';
import Projects from '../pages/projects';
import background from '../assets/Water_Close_Up_H264_Videvo.mp4'
class Navbar extends Component {
    state = {
        selectedIndex: 0,
        Tabs: ['Home','Projects'],
        tabslinks: ['/','/projects']
    }

    pageIn() {
        if (this.state.selectedIndex===0) {
           return(<Home></Home>)
        }
        else if (this.state.selectedIndex===1) {
            return (<Projects></Projects>)
        }
        else if (this.state.selectedIndex===2) {
            return (<Pane>Contact</Pane>)
        }
    }

    render () {
        return (
            <Pane
            display="flex"
            justifyContent="center"
            border="default"
            overflow="hidden"
            mozOverflow="hidden"
            >
                 <video 
                position="absloute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                z-index= "0"
                autoPlay muted loop>
                    <source src={background}></source>
                </video>
                <Tablist
                position="fixed"
                justifyContent="right"
                marginLeft="40%">
                    {this.state.Tabs.map((tab,index) => (
                        <Tab 
                        justifyContent="right"
                        height={48}
                        color="#E4E7EB" 
                        key={tab} 
                        id={tab} 
                        onSelect={() => this.setState({ selectedIndex: index })}
                        isSelected={index === this.state.selectedIndex}
                        aria-controls={`panel-${tab}`}>
                            {tab}
                        </Tab>
                    ))}
                </Tablist>
                <Pane padding={16} flex="1">
                    {this.state.Tabs.map((tab, index) => (
                    <Pane
                        position="absolute"
                        top="10%"
                        left="0"
                        right="0"
                        bottom="0"
                        key={tab}
                        id={`panel-${tab}`}
                        role="tabpanel"
                        aria-labelledby={tab}
                        aria-hidden={index !== this.state.selectedIndex}
                        display={index === this.state.selectedIndex ? 'block' : 'none'}
                    >
                        {this.pageIn()}   
                    </Pane>
                    ))}
                </Pane>
            </Pane>
        )
    }
}

export default Navbar;