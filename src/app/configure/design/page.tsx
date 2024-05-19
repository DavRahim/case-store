import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
    searchParams: {
        [key: string]: string | string[] | undefined
    }
}

const Page = async ({ searchParams }: PageProps) => {
    const { id } = searchParams

    if (!id || typeof id !== 'string') {
        return notFound()
    }
  return <div>Page</div>;
};

export default Page;
