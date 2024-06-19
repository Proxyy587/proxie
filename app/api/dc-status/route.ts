// api/dc-status/route.ts

import { NextResponse } from "next/server";

export type LanyardResponse = {
  data: {
    discord_user: {
      id: string;
      username: string;
      discriminator: string;
      avatar: string;
    };
    discord_status: string;
    active_on_discord_web: boolean;
    active_on_discord_desktop: boolean;
    active_on_discord_mobile: boolean;
    listening_to_spotify: boolean;
    activities: {
      id: string;
      name: string;
      type: number;
      state: string;
      timestamps: {
        end: number;
      };
      emoji: {
        name: string;
      };
      created_at: number;
    }[];
  };
  success: boolean;
};

export const dynamic = "force-dynamic";

export const GET = async () => {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/726293592376606770",
    {
      headers: {
        "Content-Type": "application/json",
        "cache-control": "public, s-maxage=60, stale-while-revalidate=30",
      },
    }
  );
  const data = await res.json();
  return NextResponse.json<LanyardResponse>(data);
};
