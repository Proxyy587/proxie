"use client";

import React, { useEffect, useState } from "react";
import ContactForm from "./forms/contact";
import ContactSocial from "./cards/socials";

const Contact = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")} ${ampm}`;
      setCurrentTime(formattedTime);

      const istHours = now.getHours(); // Use 24-hour format for conditions

      if (istHours >= 1 && istHours < 9) {
        setStatus("sleeping");
      } else if (istHours >= 9 && istHours < 14) {
        setStatus("in school");
      } else if (istHours >= 14 && istHours < 19) {
        setStatus("working");
      } else {
        setStatus("awake");
      }
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col max-w-full p-0!">
      <h1 className="h4-medium">Contacts 💬</h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-6">
        It&apos;s currently{" "}
        <span className="font-semibold text-black/60 dark:text-white/60">
          {currentTime}
        </span>{" "}
        for me, so I&apos;m probably{" "}
        <span className="font-semibold text-black/60 dark:text-white/60">
          {status}
        </span>
        . I&apos;ll get back to you soon.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
        <ContactForm />
        <ContactSocial />
      </div>
    </section>
  );
};

export default Contact;
