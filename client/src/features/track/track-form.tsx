import { ObjectSchema } from "yup";
import { ReactNode } from "react";
import { Formik, Form } from "formik";
import VStack from "components/v-stack";
import TextInput from "components/text-input";
import FileInput from "components/file-input";
import Typography from "components/typography";
import Button from "components/button";
import { ITrackFormInitialValues } from "./types";
import HStack from "components/h-stack";

interface Props {
  title: string;
  onSubmit: (values: any) => void;
  initialValues: ITrackFormInitialValues;
  validationSchema: ObjectSchema<any>;
  buttonText: string;
  extraButton?: ReactNode;
}

function TrackForm(props: Props) {
  const {
    title,
    onSubmit,
    initialValues,
    validationSchema,
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
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <VStack gap="1rem">
            <TextInput
              name="title"
              label="Title"
              placeholder="Starboy, As It Was, Rockstar..."
            />

            <TextInput
              name="author"
              label="Author"
              placeholder="Imagine Dragons, Post Malone..."
            />

            <FileInput name="track" label="Track" accept="audio/mpeg" />

            <FileInput name="cover" label="Cover" accept="image/jpeg" />

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
        </Form>
      </Formik>
    </VStack>
  );
}

export default TrackForm;
