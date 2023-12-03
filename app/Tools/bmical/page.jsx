import React from "react";
import BMicalculator from "./../../Tools.logic/bmicalculator/page";

const page = () => {
  return <BMicalculator />;
};

export default page;

export function generateMetadata({params}){
  return {
    title: "NHS BMI Calculator Uk",
    description: "Calculate your BMI using our free BMI Calculator to determine the amount of body fat and amount of lean body mass.",
    keywords: "bmi, bmi calculator, bmi calc, body mass index, body mass index calculator, body mass index calc, bmi formula, bmi formula calculator, bmi formula calc, bmi formula calculator, bmi formula calc, bmi formula calc, bmi formula calculator, bmi formula calc, bmi"
  }
}
