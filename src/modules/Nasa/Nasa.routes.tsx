import { Route } from "react-router-dom";

import { imageOfTheDayLoader } from "@src/modules/Nasa/pages/ImageOfTheDay/loader";
import { marsImagesLoader } from "@src/modules/Nasa/pages/MarsImages/loader";
import { marsImageLoader } from "@src/modules/Nasa/pages/MarsImage/loader";
import ImageOfTheDay from "@src/modules/Nasa/pages/ImageOfTheDay";
import MarsImages from "@src/modules/Nasa/pages/MarsImages";
import MarsImage from "@src/modules/Nasa/pages/MarsImage";
import Error from "@src/components/Error";

const NasaRoutes = (
  <Route path="nasa">
    <Route index element={<ImageOfTheDay />} loader={imageOfTheDayLoader} />
    <Route path="mars">
      <Route index element={<MarsImages />} loader={marsImagesLoader} />
      <Route
        errorElement={<Error />}
        path=":camera_name"
        element={<MarsImage />}
        loader={marsImageLoader}
      />
    </Route>
  </Route>
);

export default NasaRoutes;
