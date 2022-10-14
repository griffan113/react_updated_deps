import { Route } from "react-router-dom";

import { imageOfTheDayLoader } from "@src/modules/Nasa/pages/ImageOfTheDay/loader";
import { marsImagesLoader } from "@src/modules/Nasa/pages/MarsImages/loader";
import ImageOfTheDay from "@src/modules/Nasa/pages/ImageOfTheDay";
import MarsImages from "@src/modules/Nasa/pages/MarsImages";

const NasaRoutes = (
  <Route path="nasa">
    <Route index element={<ImageOfTheDay />} loader={imageOfTheDayLoader} />
    <Route path="mars">
      <Route index element={<MarsImages />} loader={marsImagesLoader} />
    </Route>
  </Route>
);

export default NasaRoutes;
