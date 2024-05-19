import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React, { ReactNode } from "react";

type Props = {};

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <MaxWidthWrapper className='flex-1 flex flex-col'>
            {/* <Steps /> */}
            {children}
        </MaxWidthWrapper>
    );
};

export default Layout;
