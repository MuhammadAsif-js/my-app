import React from "react";
import Caloriecalculator from "./../../Tools.logic/caloriecalculator/page";

const page = () => {
  return <Caloriecalculator />;
};

export default page;

export function generateMetadata({ params }) {
  return {
    title:
      "How to Use a Calorie Calculator to Make Healthier Sub Choices at Subway",
    description:
      "Learn how to use a calorie calculator to make healthier sub choices at Subway. This article will help you make healthier choices at Subway.",
    keywords:
      "calorie calculator, calorie calculator subway, calorie calculator sub, calorie calculator subway sub, calorie calculator subwa",
  };
}
