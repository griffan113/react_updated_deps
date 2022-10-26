import { ActionFunctionArgs, redirect } from "react-router-dom";

import { postCompany } from "@src/hooks/Companies";
import { queryClient } from "@src/lib/queryClient";

export async function createCompanyAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const queryKey = "companies";

  await postCompany(data as any);

  await queryClient.invalidateQueries([queryKey]);

  return redirect("/companies");
}
