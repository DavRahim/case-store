"use client"
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {};

const ThankYou = (props: Props) => {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId') || ''
  return <div>ThankYou</div>;
};

export default ThankYou;
