import { useRef } from "react";
import { Formik, Form, Field } from "formik";
import { Button } from "components/button";
import { tracksService } from "../service";
import validationSchema from "./validation-schema";

const initalValues = {
  title: "",
  author: "",
  track: "",
  cover: "",
};

function AddTrackForm() {
  const trackInput = useRef<HTMLInputElement>();
  const coverInput = useRef<HTMLInputElement>();

  function submitHandler(values: typeof initalValues) {
    tracksService.create({
      ...values,
      track: trackInput.current!.files![0],
      cover: coverInput.current!.files![0],
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
            <label htmlFor="author">Author</label>
            <Field id="author" name="author" />
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

          <div>
            <label htmlFor="cover">Cover</label>
            <Field
              id="cover"
              name="cover"
              type="file"
              accept="image/jpeg"
              innerRef={coverInput}
            />
          </div>

          <Button type="submit" variant="brand">
            Add Track
          </Button>
        </Form>
      </Formik>
    </div>
  );
}

export default AddTrackForm;
