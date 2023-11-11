"use client";

import { useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import Navbar from "@/components/Navbar";
import { Box, Button, TextField, Typography } from "@mui/material";

import { FirstStep, SecondStep, ThirdStep } from "./Form/Form";

export default function Home() {
  const [activeStep, setActiveStep] = useState(0);

  const Stepper = {
    0: (
      <FirstStep
        onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
      />
    ),
    1: <SecondStep step={activeStep - 1} />,
    2: <SecondStep step={activeStep - 1} />,
    3: <SecondStep step={activeStep - 1} />,
    4: <SecondStep step={activeStep - 1} submit={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)} />,
    5: <ThirdStep onClick={() => setActiveStep(0)}/>,
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  //acompanha o currentWidth do browser
  var w = window.innerWidth;
  window.addEventListener('resize', () => w = window.innerWidth);

  return (
    <Box display="flex" flex={1} flexDirection="column" justifyContent={"center"} bgcolor={"#5e95ff"}>
      <Navbar />
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        border={0}
        alignItems={"center"}
        justifyContent={"center"}
        
        marginTop={5}
        bgcolor={"#fff"}
        padding={6}
        gap={5}
        sx={{ borderRadius: "40px 40px 0 0" }}
      >
        {Stepper[activeStep]}
        {(activeStep != 0 && activeStep < 5) && (
          <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"center"}
            alignItems="center"
          >
            <MobileStepper
              variant="dots"
              steps={4}
              position="bottom"
              activeStep={activeStep -1}
              sx={
                w <= 900
                  ? { flexGrow: 1 }
                  : {
                      width: "100%",
                      marginTop: 5,
                      marginBottom: 5,
                      justifyContent: "center",
                      gap: 20,
                    }
              }
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === 4}
                >
                  Next
                  <KeyboardArrowRight />
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 1}
                >
                  <KeyboardArrowLeft />
                  Back
                </Button>
              }
            />
          </Box>
        )}
      </Box>

    </Box>
  );
}
