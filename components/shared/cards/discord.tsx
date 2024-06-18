import React from "react";
import useSWR from "swr";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { LanyardResponse } from "@/app/api/dc-status/route";
import fetcher from "@/lib/utils";

const DiscordCard = () => {
  const { data, error } = useSWR<LanyardResponse>("/api/dc-status", fetcher);

  if (error) {
    return (
      <div className="w-32 h-36 text-white rounded-lg items-center flex justify-center overflow-hidden">
        <div className="items-center gap-[0.35rem] flex justify-center -rotate-12 relative">
          <DiscordLogoIcon className="absolute text-white/35 -z-50 w-40 h-40 -bottom-6 -rotate-45 brightness-50" />
          <p className="text-xl font-semibold text-black dark:text-white">
            Error
          </p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="w-32 h-36 text-white rounded-lg items-center flex justify-center overflow-hidden">
        <div className="items-center gap-[0.35rem] flex justify-center -rotate-12 relative">
          <DiscordLogoIcon className="absolute text-white/35 -z-50 w-40 h-40 -bottom-6 -rotate-45 brightness-50" />
          <p className="text-xl font-semibold text-black dark:text-white">
            Loading...
          </p>
        </div>
      </div>
    );
  }

  console.log("Discord Status:", data.data.discord_status);

  let statusMessage = "";
  if (data.data.discord_status === "online") {
    statusMessage = "online";
  } else if (data.data.discord_status === "idle") {
    statusMessage = "idle";
  } else if (data.data.discord_status === "dnd") {
    statusMessage = "Do not disturb";
  } else {
    statusMessage = "offline";
  }

  return (
    <div className="w-32 h-36 text-white rounded-lg items-center flex justify-center overflow-hidden">
      <div className="items-center gap-[0.35rem] flex justify-center -rotate-12 relative">
        <DiscordLogoIcon className="absolute text-white/35 -z-50 w-40 h-40 -bottom-6 -rotate-45 brightness-50" />
        <div className="text-xl font-semibold text-black dark:text-white">
          {statusMessage}
          <p className="text-sm">(@proxiess)</p>
        </div>
      </div>
    </div>
  );
};

export default DiscordCard;
