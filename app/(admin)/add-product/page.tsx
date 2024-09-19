"use client";

import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import useSteps from "@/app/(admin)/add-product/hooks/useSteps";
import { Information, Pricing, Review } from "./index";
import { StepsButtons, PageHeader } from "./components";
import { AppContextProvider } from "@/context";

const AddProductPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  console.log(isMobile);
  const productSteps: React.ReactNode[] = [
    <Information key="info" />,
    <Pricing key="pricing" />,
    <Review key="review" />,
  ];
  const {
    steps,
    current,
    setCurrent,
    previousStep,
    nextStep,
    isFirstStep,
    isLastStep,
  } = useSteps(productSteps);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const handleMediaChange = (e: any) => setIsMobile(e.matches);

    handleMediaChange(mediaQuery); // Check the current state
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const onChange = (value: number) => {
    setCurrent(value);
  };

  return (
    <AppContextProvider>
      <section className="px-16">
        <PageHeader />
        <div className="flex md:flex-row flex-col gap-5 md:w-[60dvw] mx-auto">
          {/* Mobile step*/}
          <Steps
            className="pt-14 md:hidden"
            current={current}
            onChange={onChange}
            direction="horizontal"
            items={[
              {
                title: "Information",
              },
              {
                title: "Pricing",
              },
              {
                title: "Review",
              },
            ]}
          />
          {/* end of mobile step */}
          <Steps
            className={`w-1/4 pt-14`}
            current={current}
            onChange={onChange}
            direction="vertical"
            style={{
              display: isMobile ? "none" : "block",
            }}
            items={[
              {
                title: "Information",
              },
              {
                title: "Pricing",
              },
              {
                title: "Review",
              },
            ]}
          />

          <form className="relative w-full md:w-3/4 h-[400px]">
            {steps[current]}
            <StepsButtons
              previousStep={previousStep}
              nextStep={nextStep}
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
            />
          </form>
        </div>
      </section>
    </AppContextProvider>
  );
};

export default AddProductPage;
