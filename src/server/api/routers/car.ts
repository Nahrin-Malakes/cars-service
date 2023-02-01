import { z } from "zod";
import { Res } from "../../../types/Car";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const carRouter = createTRPCRouter({
  get: publicProcedure
    .input(z.object({ license_plate: z.string() }))
    .mutation(async ({ input }) => {
      const res = await fetch(
        `https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=${input.license_plate}`
      );

      const data: Res = await res.json();

      console.log(data.result.records[0]);

      return {
        data: data.result.records[0],
      };
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
