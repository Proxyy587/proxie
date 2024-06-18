import React from "react";

import { LanyardResponse } from "@/app/api/dc-status/route";
import fetcher from "@/lib/utils";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import useSWR from "swr";

const DiscordCard = () => {
  const { data, isLoading, error } = useSWR<LanyardResponse>(
    "/api/dc-status",
    fetcher
  );
  return (
    <div className="w-32 h-36  text-white rounded-lg items-center flex justify-center overflow-hidden">
      <div className="items-center gap-[0.35rem] flex justify-center -rotate-12 relative">
        <DiscordLogoIcon className="absolute text-white/35 -z-50 w-40 h-40 -bottom-6 -rotate-45 brightness-50" />

        {error || isLoading ? (
          <p className="text-xl font-semibold text-black dark:text-white">
            asdasd
          </p>
        ) : (
          <div className="text-xl font-semibold text-black dark:text-white">
            {data?.data.discord_status}
            <p className="text-sm">(@proxiess)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DiscordCard;
