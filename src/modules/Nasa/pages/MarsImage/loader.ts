import { fetchImageOfTheDay } from "@src/hooks/NasaImageOfTheDay";
import { IImageOfTheDay } from "@src/interfaces/IImageOfTheDay";
import { queryClient } from "@src/lib/queryClient";
import { LoaderFunctionArgs } from "react-router-dom";

export async function marsImageLoader({ params }: LoaderFunctionArgs) {
  const queryKey = "mars_images";

  !queryClient.getQueryData<IImageOfTheDay>([
    queryKey,
    "image",
    params.camera_name,
  ]) &&
    (await queryClient.fetchQuery<IImageOfTheDay>(
      [queryKey],
      fetchImageOfTheDay
    ));
}
