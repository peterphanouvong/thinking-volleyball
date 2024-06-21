"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { sendTestEmail } from "./actions/emails";
import { createHubspotContact } from "./actions/hubspot";

const formSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export function FreeStatSheetForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const email = values.email;
    await createHubspotContact({ email, resource: "FREE STAT SHEET PDF" });
    const { message, status } = await sendTestEmail({ email });
    if (status === "success") {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  {...field}
                  className="md:h-12 text-base"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="md:h-12 md:px-6 md:text-base"
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          {form.formState.isSubmitting ? (
            <>
              <LoaderCircle className="w-4 h-4 animate-spin mr-2" /> Sending...
            </>
          ) : (
            "Get it now"
          )}
        </Button>
      </form>
    </Form>
  );
}
