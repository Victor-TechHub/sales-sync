"use client";

import React from "react";
import { Steps } from "antd";
import useSteps from "@/app/(admin)/add-product/hooks/useSteps";
import { Information, Pricing, Review } from "./index";
import { StepsButtons, PageHeader } from "./components";
import { AppContextProvider } from "@/context";

const AddProductPage = () => {
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

  const onChange = (value: number) => {
    setCurrent(value);
  };

  return (
    <AppContextProvider>
      <section className="px-16">
        <PageHeader />
        <div className="flex gap-5 md:w-[60dvw] mx-auto">
          <Steps
            className="w-1/4 pt-14"
            current={current}
            onChange={onChange}
            direction="vertical"
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
          <form className="relative w-3/4 h-[400px]">
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
