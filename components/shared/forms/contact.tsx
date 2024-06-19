import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import React from "react";

const ContactForm = () => {
  return (
    <div className="md:col-span-2 h-auto min-h-[21.5rem] row-span-3 bg-opacity-50 bg-white dark:bg-white/5 rounded-md p-4 border border-zinc-800/20">
      <div className="opacity-1">
        <h1 className="font-medium text-sm dark:text-slate-200/90 mb-1">
          Email
        </h1>
        <Input
          type="text"
          placeholder="example@gmail.com"
          className="w-full p-2 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
        />
        <h1 className="font-medium text-sm dark:text-slate-200/90 mb-1">
          MESSAGE
        </h1>
        <Textarea
          placeholder="Say hello to Proxy 👋"
          className="w-full min-h-[9rem] p-2 h-36 mb-4 rounded-md bg-slate-300/50 dark:bg-slate-200/5 text-sm placeholder:text-gray-600 dark:placeholder:text-slate-200/20"
        />
        <div className="w-full flex flex-row justify-between items-center">
          <p className="text-gray-900 dark:text-gray-300 text-sm"></p>
          <Button
            className="group rounded-full text-base dark:text-white font-medium transition-colors duration-75"
            size={"default"}
          >
            <span className="group-hover:translate-x-1 transition-all">
              Send
            </span>
            <Send className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-all" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
