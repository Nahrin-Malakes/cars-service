import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ license_plate: z.string() }))
    .query(async ({ input }) => {
      const a = await fetch(
        "https://data.gov.il/api/3/action/datastore_search",
        {
          headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua":
              '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"Windows"',
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            cookie:
              "rbzid=Gc3yaBipfZ6uPFJqfKhoPZmYLZcEOWHFxSHXen3TulFqhS1h4P/rltr5rxmhgzDIQfx4sueH5MLnWOvejNUUKu3iMgq+ummpmL33hbPJjlDnlRhIhoDYRTxSQ7pKtiyZ48tfnNuyJp43kJipDWz0ye41SKBTUoul7c0FfIiD0mAEvHfM+7PAQFDKQXM3ho0STALFtSZhcVv2q1vkK40nWWWQ0PtqQuNWElUyZXACmVpgQ8mBGlIGia024vMC5HxC; rbzsessionid=f85783c16d5d1148342f459081447f91; _gid=GA1.3.1484241117.1675280938; _gat_UA-73172242-1=1; _gat=1; _ga_HNM3Z0EMD9=GS1.1.1675280937.1.1.1675281066.0.0.0; _ga=GA1.3.152729171.1675280938",
            Referer:
              "https://data.gov.il/dataset/private-and-commercial-vehicles/resource/053cea08-09bc-40ec-8f7a-156f0677aff3/view/529616fc-df81-4e6b-8314-f7f6e6fde433",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
          body: `%7B%22resource_id%22%3A%22053cea08-09bc-40ec-8f7a-156f0677aff3%22%2C%22q%22%3A%22${input.license_plate}%22%2C%22filters%22%3A%7B%7D%2C%22limit%22%3A100%2C%22offset%22%3A0%2C%22total_estimation_threshold%22%3A1000%7D`,
          method: "POST",
        }
      );
      console.log(await a.json());
      return {
        greeting: `Hello asd`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
