import { Heading, HStack, Image, Text, VStack,Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, price, description, imageSrc }) => {
  return (
    <VStack
      w="350px"
      borderWidth="1px"
      borderTopRadius="20px"
      overflow="hidden"
      boxShadow="xs"
      bg="#EDEFEE"
    >
      <Image
        src={imageSrc}
        alt="Placeholder image"
        w="100%"
        h="250px"
      />
      <VStack spacing="3" align="left" p="30px">
        <HStack>
          <Flex justify="space-between" width="100%">
            <Heading size="md" textColor="black" mb="30px">
              {title}
            </Heading>
            <Heading size="md" textColor="#EE9972" mb="30px">
              {price}
            </Heading>
          </Flex>
        </HStack>
        <Text textColor="black">
          {description}
        </Text>
        <HStack spacing="3" mt="30px" mb="10px">
          <Text fontWeight="bold" textColor="black">Order a delivery</Text>
          <Text textColor="black"><FontAwesomeIcon icon={faMotorcycle} size="1x" /></Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
