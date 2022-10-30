import { ObjectSchema } from "yup";
import { ReactNode } from "react";
import { Formik, Form as FormikForm } from "formik";
import VStack from "components/v-stack";
import Typography from "components/typography";
import Button from "components/button";
import HStack from "./h-stack";

interface Props {
  title: string;
  initialValues: { [key: string]: any };
  validationSchema: ObjectSchema<any>;
  onSubmit: (values: any) => void;
  children: ReactNode;
  buttonText: string;
  extraButton?: ReactNode;
}

function Form(props: Props) {
  const {
    title,
    initialValues,
    validationSchema,
    onSubmit,
    children,
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
        {({ isSubmitting }) => (
          <FormikForm style={{ maxWidth: "100%" }}>
            <VStack gap="1rem">
              {children}

              {extraButton ? (
                <HStack gap="1rem">
                  <Button
                    type="submit"
                    variant="brand"
                    size="lg"
                    loading={isSubmitting}
                  >
                    {buttonText}
                  </Button>
                  {extraButton}
                </HStack>
              ) : (
                <Button
                  type="submit"
                  variant="brand"
                  size="lg"
                  loading={isSubmitting}
                >
                  {buttonText}
                </Button>
              )}
            </VStack>
          </FormikForm>
        )}
      </Formik>
    </VStack>
  );
}

export default Form;
