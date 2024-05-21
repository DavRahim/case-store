'use client'

import { useToast } from "@/components/ui/use-toast";
import { Configuration } from "@prisma/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Confetti from 'react-dom-confetti'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'



const DesignPreview = ({ configuration }: { configuration: Configuration }) => {

    const router = useRouter()
    const { toast } = useToast()
    const { id } = configuration
    const { user } = useKindeBrowserClient()
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)
    const [showConfetti, setShowConfetti] = useState<boolean>(false)
    useEffect(() => setShowConfetti(true))
    const { color, model, finish, material } = configuration;
    
    return (
        <>
            <div
                aria-hidden='true'
                className='pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center'>
                <Confetti
                    active={showConfetti}
                    config={{ elementCount: 200, spread: 90 }}
                />
            </div>

        </>

    );
};

export default DesignPreview;
