import { ObjectSchema } from "yup";
import { ComponentProps, ReactNode, RefObject } from "react";
import { Formik, Form as FormikForm } from "formik";
import VStack from "components/v-stack";
import Typography from "components/typography";
import Button from "components/button";
import Input from "./input";
import HStack from "./h-stack";

interface IFormInput extends ComponentProps<"input"> {
  label: string;
  type?: "text" | "file";
  required?: boolean;
  ref?: RefObject<HTMLInputElement>;
}

export interface IFormInputs {
  [key: string]: IFormInput;
}

interface Props {
  title: string;
  initialValues: { [key: string]: any };
  validationSchema: ObjectSchema<any>;
  onSubmit: (values: any) => void;
  inputs: IFormInputs;
  buttonText: string;
  extraButton?: ReactNode;
}

function Form(props: Props) {
  const {
    title,
    initialValues,
    validationSchema,
    onSubmit,
    inputs,
    buttonText,
    extraButton,
  } = props;

  return (
    <VStack gap="1rem">
      <Typography as="h1" variant="h1">
        {title}
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <FormikForm>
          <VStack gap="1rem">
            {Object.entries(inputs).map(
              ([name, { type = "text", ...input }], i) => (
                <Input key={i} {...input} name={name} type={type} />
              )
            )}

            {extraButton ? (
              <HStack gap="1rem">
                <Button type="submit" variant="brand" size="lg">
                  {buttonText}
                </Button>
                {extraButton}
              </HStack>
            ) : (
              <Button type="submit" variant="brand" size="lg">
                {buttonText}
              </Button>
            )}
          </VStack>
        </FormikForm>
      </Formik>
    </VStack>
  );
}

export default Form;
