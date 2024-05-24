"use client"
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {};

const ThankYou = (props: Props) => {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId') || ''
  const { data } = useQuery({
    queryKey: ['get-payment-status'],
    queryFn: async () =>{},
    //  await getPaymentStatus({ orderId }),
    retry: true,
    retryDelay: 500,

  })
  return (
  <div>
    ThankYou
    </div>
  );
};

export default ThankYou;
