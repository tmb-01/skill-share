import React, {Component} from 'react';
import {Button, Container, Title} from "./styles";
import MenuCard from "../../components/MenuCards";
import MenuNavs from "../../components/MenuNavs"

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = [
            {
                cardImg: "images/traveling-painting.jpg",
                numberOfStudents: "123",
                duration: "1h 40m",
                // title: "Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
                author: "Maraim",
            },
            {
                cardImg: "images/traveling-painting.jpg",
                numberOfStudents: "123",
                duration: "1h 40m",
                title: "Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
                author: "Maraim",
            },
            {
                cardImg: "images/traveling-painting.jpg",
                numberOfStudents: "123",
                duration: "1h 40m",
                title: "Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
                author: "Maraim",
            },
            {
                cardImg: "images/traveling-painting.jpg",
                numberOfStudents: "123",
                duration: "1h 40m",
                title: "Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
                author: "Maraim",
            },
            {
                cardImg: "images/traveling-painting.jpg",
                numberOfStudents: "123",
                duration: "1h 40m",
                title: "Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
                author: "Maraim",
            },
            {
                cardImg: "images/traveling-painting.jpg",
                numberOfStudents: "123",
                duration: "1h 40m",
                title: "Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
                author: "Maraim",
            },
            {
                cardImg: "images/traveling-painting.jpg",
                numberOfStudents: "123",
                duration: "1h 40m",
                title: "Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
                author: "Maraim",
            },
            {
                cardImg: "images/traveling-painting.jpg",
                numberOfStudents: "123",
                duration: "1h 40m",
                title: "Unlocking Your Potential: 5 Exercises to Build Creative Confidence",
                author: "Maraim",
            },
        ]
    }

    render() {
        return (
            <div>
                <Title>Unlimited Access to more than 27,000 Classes</Title>
                <MenuNavs/>
                <Container>
                    {this.state.map(({cardImg, numberOfStudents, duration, title, author}) => (
                        <MenuCard cardImg={cardImg}
                                  numberOfStudents={numberOfStudents}
                                  duration={duration}
                                  title={title}
                                  author={author}
                        />
                    ))}

                </Container>
                <Button>Explore Classes</Button>
            </div>
        );
    }
}

export default Menu;