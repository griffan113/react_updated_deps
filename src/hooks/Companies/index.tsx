import React, { createContext, useContext } from "react";
import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
  useMutation,
} from "@tanstack/react-query";

import { mockApi } from "@src/lib/axios";
import { ICompany } from "@src/interfaces/ICompany";
import { queryClient } from "@src/lib/queryClient";

interface UseCompaniesParams {
  options?: UseQueryOptions<ICompany[]>;
}

interface ICreateCompanyData {
  name: string;
  suffix: string;
}

interface CompaniesContextData {
  GetCompanies(options?: UseCompaniesParams): UseQueryResult<ICompany[]>;
  CreateCompany(data: ICreateCompanyData): Promise<ICompany>;
}

const CompaniesContext = createContext<CompaniesContextData>(
  {} as CompaniesContextData
);

type CompaniesProviderProps = {
  children: React.ReactNode;
};

const fetchCompanies = async (): Promise<ICompany[]> => {
  const { data } = await mockApi.get<ICompany[]>("companies");

  return data;
};

const postCompany = async (data: ICreateCompanyData): Promise<ICompany> => {
  const { data: company } = await mockApi.post<ICompany>("companies", {
    ...data,
  });

  return company;
};

const CompaniesProvider: React.FC<CompaniesProviderProps> = ({ children }) => {
  const GetCompanies = (
    { options } = {} as any
  ): UseQueryResult<ICompany[]> => {
    return useQuery(["companies"], fetchCompanies, {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      ...options,
    });
  };

  const CreateCompany = useMutation(postCompany, {
    onSuccess: () => {
      queryClient.invalidateQueries(["companies"]);
      alert("Empresa criada");
    },
  }).mutateAsync;

  return (
    <CompaniesContext.Provider value={{ GetCompanies, CreateCompany }}>
      {children}
    </CompaniesContext.Provider>
  );
};

function useCompanies(): CompaniesContextData {
  const context = useContext(CompaniesContext);

  return context;
}

export { CompaniesProvider, useCompanies, fetchCompanies, postCompany };
