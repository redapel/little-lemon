import React, { useEffect, useReducer, useState, useRef } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "./useSubmit";
import { useAlertContext } from "./alertContext";
import availableTimesReducer from "./TimesReducer";
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();
  const [resDate, setResDate] = useState();
  const [resTime, setResTime] = useState();
  const [guests, setGuests] = useState();
  const [occasion, setOccasion] = useState();
  const resTimeRef = useRef(null);
  const guestsRef = useRef(null);
  const occasionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (response && response.type && response.message) {
       onOpen(response.type, response.message);
       if (response.type === 'success') {
        const data = {...response, resDate : resDate, resTime : resTime, guests: guests, occasion: occasion};
        navigate('/confirmed', { state: {data: data} });
       }
    }
  }, [response]);

  const initialState = {
    availableTimes : ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  };

  const [state, dispatch] = useReducer(availableTimesReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'INITIALIZE_TIMES'});
  }, []);

  useEffect(() => {
    setResTime(resTimeRef.current.value);
    setGuests(guestsRef.current.value);
    setOccasion(occasionRef.current.value.charAt(0).toUpperCase() + occasionRef.current.value.slice(1));
  }, []);

  const formik = useFormik({
    initialValues: {
      resDate: '',
      resTime: '',
      guests: 1,
      occasion: ''
    },
    onSubmit: async (values) => {
        try {
          await submit("#", values);
        } catch (error) {
          console.error("Error submitting:", error);
        }
        formik.values.resDate = "";
        formik.values.guests = 1;
    },
    validationSchema: Yup.object({
      resDate: Yup.string().required('Required'),
      guests: Yup.number().required('Required').min(1, 'Must be at least 1').max(10, 'Cannot exceed 10')
    }),
  });

  const handleResDateChange = (event) => {
    formik.values.resDate = event.target.value;
    setResDate(event.target.value);
    if (event.target.value.length === 10) {
        dispatch({ type: 'UPDATE_TIMES', payload: event.target.value});
    }
    formik.validateField("resDate");
  };

  const handleResDateFocus = () => {
    formik.validateField("resDate");
  };

  const handleResTimeChange = (event) => {
    setResTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    const number = Number(event);
    if (!isNaN(number) && number > 0) {
        formik.values.guests = number;
        setGuests(event);
    }
    formik.validateField("guests");
  };

  const handleGuestsFocus = () => {
    formik.validateField("guests");
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1));
  };

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#495E57"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="booking-page-section">
          Booking page
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={(event) => { event.preventDefault(); formik.handleSubmit();} }>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.errors.resDate}>
                <FormLabel htmlFor="resDate">Choose date</FormLabel>
                <Input
                  id="resDate"
                  name="resDate"
                  type="date"
                  value={formik.values.resDate}
                  onChange={handleResDateChange}
                  onFocus={handleResDateFocus}
                />
                <FormErrorMessage>{formik.errors.resDate}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="resTime">Choose time</FormLabel>
                <Select
                  id="resTime"
                  name="resTime"
                  onChange={handleResTimeChange}
                  ref={resTimeRef}
                >
                    {state.availableTimes.map(time => <option key={time}>{time}</option>)}
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.errors.guests}>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                    <NumberInput defaultValue={1} min={1} max={10} id="guests" name="guests" value={formik.values.guests} onChange={handleGuestsChange} onFocus={handleGuestsFocus}>
                        <NumberInputField ref={guestsRef}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion" name="occasion" onChange={handleOccasionChange} ref={occasionRef}>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                </Select>
              </FormControl>
              <Button isLoading={isLoading} type="submit" colorScheme="yellow" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default BookingPage;
