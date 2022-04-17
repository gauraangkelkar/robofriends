import React, { Component } from "react";
import CardList from "../components/CardList";
import ScrollBox from "../components/ScrollBox";
import SearchField from "../components/SearchField";
class RoboApp extends Component {
    
    constructor(){
        super()
        this.state = {
            robots: [],
            searchText : ''
        }
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {return response.json()})
        .then(data => {
            this.setState({robots: data});
        });
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
                <ScrollBox>
                    <CardList robots={filteredRobots} />
                </ScrollBox>
            </div>
        );
    }
}
export default RoboApp;