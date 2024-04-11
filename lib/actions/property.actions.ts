"use server";

import { handleError } from "@/lib/utils";

// ADD IMAGE
export async function getAllProperties() {
    try {
    const url = `${process.env.NEXT_PUBLIC_RapidAPI_Url!}`;
    const options: RequestInit = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": process.env.NEXT_PUBLIC_X_RapidAPI_Key!,
            "X-RapidAPI-Host": process.env.NEXT_PUBLIC_X_RapidAPI_Host!,
        },
    };

      const response = await fetch(url, options);
      const result = await response.json();

      if (response.ok) {
        return {
          data: JSON.parse(JSON.stringify(result)) as string,
        };
      }

      // ?.homes?.data?.listings?.regular
    } catch (error) {
        handleError(error);
    }
}