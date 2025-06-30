import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { SendEmail } from "./SendEmail";

const ContactForm = () => {
  return (
    <Card className="w-full max-w-md max-sm:max-w-sm mx-auto">
      <form
        action={async (FormData) => {
          "use server";
          await SendEmail(FormData);
        }}
      >
        <CardHeader className="max-sm:px-4 max-sm:py-4">
          <CardTitle className="icon_underline max-sm:text-lg">
            Send me a mail.
          </CardTitle>
          <CardDescription className="max-sm:text-sm">
            Once form is submit you will be redirect to home page.
          </CardDescription>
        </CardHeader>
        <CardContent className="max-sm:px-4">
          <div className="grid w-full items-center gap-1.5 mt-2">
            <Label htmlFor="name" className="max-sm:text-sm">
              Name
            </Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="max-sm:h-10"
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-2">
            <Label htmlFor="email" className="max-sm:text-sm">
              Email
            </Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder="Enter your email"
              className="max-sm:h-10"
            />
          </div>
          <div className="grid w-full items-center gap-1.5 mt-2">
            <Label htmlFor="message" className="max-sm:text-sm">
              Your Message
            </Label>
            <textarea
              placeholder="Your message here..."
              name="message"
              required
              className="resize-none flex min-h-[80px] max-sm:min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter className="max-sm:px-4 max-sm:py-4">
          <Button type="submit" className="w-full max-sm:h-10">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ContactForm;
