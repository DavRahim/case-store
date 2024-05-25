import React, { Suspense } from "react";
import ThankYou from "./ThankYou";

type Props = {};

const page = (props: Props) => {
    return (
        <Suspense>
            <ThankYou />
        </Suspense>

    );
};

export default page;
