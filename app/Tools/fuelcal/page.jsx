import React from 'react'
import Fuelcalculator from "./../../Tools.logic/fuelcalculator/page";

const page = () => {
  return (
<Fuelcalculator/>
  )
}

export default page

export function generateMetadata({params}){
  return {
    title: "Gas Cost Calculators: The Ultimate Tool for Budget-Conscious Drivers",
    description: "Gas cost calculators are the ultimate tool for budget-conscious drivers. This article will help you find the best gas cost calculator for your needs.",
    keywords: "gas cost calculator, gas cost calc, gas cost formula, gas cost fo"
  }
}
