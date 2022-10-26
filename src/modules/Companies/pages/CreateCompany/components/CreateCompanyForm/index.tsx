import React from "react";
import { Form } from "react-router-dom";

import { Input } from "@src/components/Input";

type CreateCompanyFormProps = {
  isLoading: boolean;
  errors?: Record<string, string>;
};

const CreateCompanyForm: React.FC<CreateCompanyFormProps> = ({
  isLoading,
  errors,
}) => {
  return (
    <Form method="put">
      <div className="flex flex-col gap-4">
        <Input
          label="Nome*"
          name="name"
          placeholder="Digite o número da empresa"
          error={errors?.name}
          disabled={isLoading}
        />
        <Input
          label="Sufixo*"
          name="suffix"
          placeholder="Digite o sufixo da empresa"
          error={errors?.suffix}
          disabled={isLoading}
        />
        <button
          type="submit"
          className="sm:self-start outline-none bg-teal-500 hover:bg-teal-600 p-2 focus:ring-1 focus:ring-white text-center"
        >
          Criar
        </button>
      </div>
    </Form>
  );
};

export default CreateCompanyForm;
