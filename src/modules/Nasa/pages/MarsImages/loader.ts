import { fetchMarsImages } from "@src/hooks/NasaMarsImages";
import { IMarsImage } from "@src/interfaces";
import { queryClient } from "@src/lib/queryClient";

export async function marsImagesLoader() {
  const queryKey = "mars_images";

  !queryClient.getQueryData<IMarsImage[]>([queryKey]) &&
    (await queryClient.fetchQuery<IMarsImage[]>([queryKey], fetchMarsImages));
}
