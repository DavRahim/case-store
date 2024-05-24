"use client"
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {};

const ThankYou = (props: Props) => {
  const searchParams = useSearchParams()
  return <div>ThankYou</div>;
};

export default ThankYou;
