import { FormMessage, Message } from "@/components/form/form-message";
import { Button } from "@/components/ui/button";
import React from "react";

const page = async (props: { searchParams: Promise<Message> }) => {
  const searchParams = await props.searchParams;

  const handleResendEmail = async () => {};

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="space-y-10">
        <FormMessage message={searchParams} />

        <Button>Resend</Button>
      </div>
    </div>
  );
};

export default page;
