import React, { useEffect, useState } from "react";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Flex,
    Heading,
    VStack,
} from '@chakra-ui/react'
import FullScreenSection from "./FullScreenSection";
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [passedData, setPassedData] = useState({});
  useEffect(() => {
    if (!location.state) {
        navigate("/booking");
    } else {
        setPassedData(location.state.data);
    }
  });
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#495E57"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="booking-page-section">
          Confirmed page
        </Heading>
            <Flex width="600px" justifyContent="center" alignItems="center">
            <TableContainer width="100%">
                <Table size='lg' variant='simple'>
                    <TableCaption color="white">Customer reservation details</TableCaption>
                    <Thead>
                    <Tr>
                        <Th color="white"></Th>
                        <Th color="white"></Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    <Tr>
                        <Td>Reservation Date</Td>
                        <Td>{passedData.resDate}</Td>
                    </Tr>
                    <Tr>
                        <Td>Reservation Time</Td>
                        <Td>{passedData.resTime}</Td>
                    </Tr>
                    <Tr>
                        <Td>Guests</Td>
                        <Td>{passedData.guests}</Td>
                    </Tr>
                    <Tr>
                        <Td>Occasion</Td>
                        <Td>{passedData.occasion}</Td>
                    </Tr>
                    </Tbody>
                    <Tfoot>
                    <Tr>
                        <Th color="white"></Th>
                        <Th color="white"></Th>
                    </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
            </Flex>
        </VStack>
    </FullScreenSection>
  );
};

export default ConfirmedPage;
