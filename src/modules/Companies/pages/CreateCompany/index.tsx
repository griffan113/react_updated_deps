import React from "react";
import { Link, useActionData, useNavigation } from "react-router-dom";

import CreateCompanyForm from "./components/CreateCompanyForm";

const CreateCompany: React.FC = () => {
  const { state } = useNavigation();
  const userFormErrors = useActionData() as Record<string, string>;

  return (
    <section className="flex flex-col gap-4">
      <Link
        className="self-start text-blue-500 hover:ring-blue-500 hover:ring-1"
        to=".."
      >
        Voltar
      </Link>
      <h1 className="text-1xl sm:text-2xl font-bold">Criar empresa</h1>
      <CreateCompanyForm
        isLoading={state === "loading" || state === "submitting"}
        errors={userFormErrors}
      />
    </section>
  );
};

export default CreateCompany;
