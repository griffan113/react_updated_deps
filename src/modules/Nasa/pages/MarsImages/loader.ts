import { fetchImageOfTheDay } from "@src/hooks/NasaImageOfTheDay";
import { IImageOfTheDay } from "@src/interfaces/IImageOfTheDay";
import { queryClient } from "@src/lib/queryClient";

export async function marsImagesLoader() {
  const queryKey = "mars_images";

  !queryClient.getQueryData<IImageOfTheDay>([queryKey]) &&
    (await queryClient.fetchQuery<IImageOfTheDay>(
      [queryKey],
      fetchImageOfTheDay
    ));
}
