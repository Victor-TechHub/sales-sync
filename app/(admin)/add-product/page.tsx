"use client";

import React from "react";
import { Steps } from "antd";
import useSteps from "@/app/(admin)/add-product/hooks/useSteps";
import { Information, Pricing, Review } from "./index";
import { StepsButtons, PageHeader } from "./components";
import { AppContextProvider } from "@/context";
import useMediaQuery from "./hooks/useMediaQuery";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProductForm, addProductSchema } from "@/utils/validation";

const AddProductPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<addProductForm>({
    resolver: zodResolver(addProductSchema),
  });

  const productSteps: React.ReactNode[] = [
    <Information errors={errors} register={register} key="info" />,
    <Pricing errors={errors} register={register} key="pricing" />,
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

  const isMobile = useMediaQuery();

  const onsumbit = (values: addProductForm) => {
    console.log(values);
  };

  const onChange = (value: number) => {
    setCurrent(value);
  };

  const hasInformationError =
    errors.name || errors.description || errors.brand || errors.stockQty;
  const hasPriceError =
    errors.basePrice || errors.discount || errors.finalPrice;

  return (
    <AppContextProvider>
      <section className="px-16">
        <PageHeader />
        <div className="flex md:flex-row flex-col gap-5 md:w-[60dvw] mx-auto">
          <Steps
            className={`md:w-1/4 w-full pt-0 md:pt-14`}
            current={current}
            onChange={onChange}
            direction={isMobile ? "horizontal" : "vertical"}
            items={[
              {
                title: "Information",
                status: hasInformationError ? "error" : undefined,
              },
              {
                title: "Pricing",
                status: hasPriceError ? "error" : undefined,
              },
              {
                title: "Review",
              },
            ]}
          />

          <form
            onSubmit={handleSubmit(onsumbit)}
            className="relative w-full md:w-3/4 h-full md:h-[400px]"
          >
            {steps[current]}
            <StepsButtons
              previousStep={previousStep}
              nextStep={nextStep}
              isFirstStep={isFirstStep}
              isLastStep={isLastStep}
              errors={errors}
            />
          </form>
        </div>
      </section>
    </AppContextProvider>
  );
};

export default AddProductPage;
