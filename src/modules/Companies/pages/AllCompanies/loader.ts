import { fetchCompanies } from "@src/hooks/Companies";
import { ICompany } from "@src/interfaces/ICompany";
import { queryClient } from "@src/lib/queryClient";

export async function companiesLoader() {
  const queryKey = "companies";

  !queryClient.getQueryData<ICompany[]>([queryKey]) &&
    (await queryClient.fetchQuery<ICompany[]>([queryKey], fetchCompanies));
}
