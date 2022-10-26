import { Route } from "react-router-dom";

import AllCompanies from "@src/modules/Companies/pages/AllCompanies";
import { companiesLoader } from "@src/modules/Companies/pages/AllCompanies/loader";
import CreateCompany from "@src/modules/Companies/pages/CreateCompany";
import { createCompanyAction } from "@src/modules/Companies/pages/CreateCompany/action";

const CompaniesRoutes = (
  <Route path="companies">
    <Route index element={<AllCompanies />} loader={companiesLoader} />
    <Route
      path="new"
      element={<CreateCompany />}
      action={createCompanyAction}
    />
  </Route>
);

export default CompaniesRoutes;
