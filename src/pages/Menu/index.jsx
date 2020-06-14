import React, {Component} from 'react';
import {Container} from "./styles";
import Card from "../../components/menuCards";

class Menu extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Card cardImg="images/traveling-painting.jpg"
                          numberOfStudents="123"
                          duration="1h 40m"
                          title="Unlocking Your Potential: 5 Exercises to Build Creative Confidence"
                          author="Maraim"
                    />
                    <Card cardImg="images/traveling-painting.jpg"
                          numberOfStudents="123"
                          duration="1h 40m"
                          title="Unlocking Your Potential: 5 Exercises to Build Creative Confidence"
                          author="Maraim"
                    />
                    <Card cardImg="images/traveling-painting.jpg"
                          numberOfStudents="123"
                          duration="1h 40m"
                          title="Unlocking Your Potential: 5 Exercises to Build Creative Confidence"
                          author="Maraim"
                    />
                    <Card cardImg="images/traveling-painting.jpg"
                          numberOfStudents="123"
                          duration="1h 40m"
                          title="Unlocking Your Potential: 5 Exercises to Build Creative Confidence"
                          author="Maraim"
                    />
                </Container>
            </div>
        );
    }
}

export default Menu;