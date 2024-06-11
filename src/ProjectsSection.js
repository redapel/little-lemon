import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Greek salad",
    price: "$ 12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    getImageSrc: () => require("./greek_salad.jpg"),
  },
  {
    title: "Bruchetta",
    price: "$ 5.99",
    description:
      "Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    getImageSrc: () => require("./bruchetta.png"),
  },
  {
    title: "Lemon Dessert",
    price: "$ 5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    getImageSrc: () => require("./lemon_dessert.jpg"),
  }
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Flex alignItems="center" justifyContent="space-between" width="100%" pt="50px">
        <Heading as="h1" id="projects-section" color="black">
            This weeks specials!
          </Heading>
        <Button colorScheme="yellow">Online Menu</Button>
      </Flex>
      <Box
        display="grid"
        gridTemplateColumns="repeat(3,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            price={project.price}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
