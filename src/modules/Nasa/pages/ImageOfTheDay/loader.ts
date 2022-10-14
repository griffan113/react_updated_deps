import { fetchImageOfTheDay } from "@src/hooks/NasaImageOfTheDay";
import { IImageOfTheDay } from "@src/interfaces/IImageOfTheDay";
import { queryClient } from "@src/lib/queryClient";

export async function imageOfTheDayLoader() {
  const queryKey = "image_of_the_day";

  !queryClient.getQueryData<IImageOfTheDay>([queryKey]) &&
    (await queryClient.fetchQuery<IImageOfTheDay>(
      [queryKey],
      fetchImageOfTheDay
    ));
}
