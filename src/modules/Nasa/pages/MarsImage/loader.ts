import { fetchMarsImageByCamera } from "@src/hooks/NasaMarsImages";
import { IMarsImage } from "@src/interfaces";
import { queryClient } from "@src/lib/queryClient";
import { LoaderFunctionArgs } from "react-router-dom";

export async function marsImageLoader({ params }: LoaderFunctionArgs) {
  const queryKey = "mars_images";

  !queryClient.getQueryData<IMarsImage[]>([
    queryKey,
    "image",
    params.camera_name,
  ]) &&
    (await queryClient.fetchQuery<IMarsImage[]>(
      [queryKey, "image", params.camera_name],
      () => fetchMarsImageByCamera(params.camera_name)
    ));
}
