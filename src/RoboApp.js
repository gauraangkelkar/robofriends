import React, { Component } from "react";
import CardList from "./CardList";
import SearchField from "./SearchField";
import {robots} from './robots'
class RoboApp extends Component {
    
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchText : ''
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchText : event.target.value
        })
    }

    render(){
        const filteredRobots = this.state.robots.filter((value) => {
                return value.name.toLocaleLowerCase().includes(this.state.searchText.toLocaleLowerCase())
            })
        
        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchField onSearchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}
export default RoboApp;