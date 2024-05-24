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
    queryFn: async () => { },
    //  await getPaymentStatus({ orderId }),
    retry: true,
    retryDelay: 500,

  })
  return (
    <div className="bg-white">
      <div className='mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8'>

      </div>
    </div>
  );
};

export default ThankYou;
