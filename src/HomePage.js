import React from "react";
import RESTAURANT_FOOD from "./restauranfood.jpg";
import ProjectsSection from "./ProjectsSection";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <React.Fragment>
            <section>
                <article>
                    <div>
                        <h2>Little Lemon</h2>
                        <h3>Chicago</h3>
                        <br></br>
                        <p>
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                        <Link style={{padding: "0px 0px"}} to="/booking">
                            <Button colorScheme="yellow">Reserve a Table</Button>
                        </Link>
                    </div>
                    <div>
                        <img src={RESTAURANT_FOOD} alt="Restaurant Food" />
                    </div>
                </article>
            </section>
            <ProjectsSection />
        </React.Fragment>
    );
};

export default HomePage;
