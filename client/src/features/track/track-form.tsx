import { Formik, Form } from "formik";
import { ObjectSchema } from "yup";
import VStack from "components/v-stack";
import TextInput from "components/text-input";
import FileInput from "components/file-input";
import Typography from "components/typography";
import Button from "components/button";
import { ITrackFormInitialValues } from "./types";

interface Props {
  title: string;
  onSubmit: (values: any) => void;
  initialValues: ITrackFormInitialValues;
  validationSchema: ObjectSchema<any>;
}

function TrackForm(props: Props) {
  const { title, onSubmit, initialValues, validationSchema } = props;

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

            <Button type="submit" variant="brand" size="lg">
              Submit
            </Button>
          </VStack>
        </Form>
      </Formik>
    </VStack>
  );
}

export default TrackForm;
