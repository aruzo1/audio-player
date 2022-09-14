import { useRef } from "react";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { tracksService } from "../service";
import { useTracks } from "../tracks-context";
import validationSchema from "./validation-schema";

const initalValues = {
  title: "",
  track: "",
};

function AddTrackForm() {
  const { addTrack } = useTracks()!;
  const trackInput = useRef<HTMLInputElement>();

  function submitHandler(
    values: typeof initalValues,
    { resetForm }: FormikHelpers<typeof initalValues>
  ) {
    tracksService
      .create({ ...values, track: trackInput.current!.files![0] })
      .then((track) => {
        addTrack(track);
        resetForm();
      });
  }

  return (
    <div>
      <h1>Add Track</h1>
      <Formik
        initialValues={initalValues}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <Form>
          <div>
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" />
          </div>

          <div>
            <label htmlFor="track">Track</label>
            <Field
              id="track"
              name="track"
              type="file"
              accept="audio/mpeg"
              innerRef={trackInput}
            />
          </div>

          <button type="submit">Add Track</button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddTrackForm;
