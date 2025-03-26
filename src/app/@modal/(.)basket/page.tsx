"use client";

import Basket from "@/components/Basket";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

const BasketInerception = () => {
    const router = useRouter();

    const onDismiss = () => {
        router.back();
    };

    return (
        <Dialog
            onOpenChange={(isOpen) => {
                if (!isOpen) onDismiss();
            }}
            open
        >
            <DialogContent className="h-4/5 w-full overflow-scroll max-w-3xl">
                <DialogHeader>
                    <DialogTitle>Basket</DialogTitle>
                    <DialogDescription>
                        <p>Contents of your basket</p>
                    </DialogDescription>
                </DialogHeader>
                <Basket />
            </DialogContent>
        </Dialog>
    );
};

export default BasketInerception;
