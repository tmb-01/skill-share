import React, {Component} from 'react';
import {Nav, Navs} from "./styles";

class MenuNavs extends Component {
    constructor(props) {
        super(props);
        this.state=[
            {categoryName:"All categoties"},
            {categoryName:"Design"},
            {categoryName:"Illustration"},
            {categoryName:"Business"},
            {categoryName:"Technology"},
            {categoryName:"Photo & Film"},
            {categoryName:"Entrepreneurship"},
            {categoryName:"Writing"}
        ]
    }

    render() {
        return (
            <Navs>
                {this.state.map(({categoryName})=>(
                    <Nav><p>{categoryName}</p></Nav>
                ))}
            </Navs>
        );
    }
}

export default MenuNavs;