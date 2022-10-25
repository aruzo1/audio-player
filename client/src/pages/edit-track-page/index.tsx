import { Navigate } from "react-router-dom";
import Container from "components/container";
import Form from "components/form";
import Button from "components/button";
import Input from "components/input";
import useEditTrackPage from "./use-edit-track-page";

function EditTrackPage() {
  const {
    initalValues,
    validationSchema,
    submitHandler,
    deleteHandler,
    genres,
  } = useEditTrackPage();

  if (initalValues === null || genres === null) return <Navigate to="/" />;
  if (!initalValues || !genres) return null;

  return (
    <Container>
      <Form
        title="Edit Track"
        initialValues={initalValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        buttonText="Edit"
        extraButton={
          <Button type="button" size="lg" onClick={deleteHandler}>
            Delete
          </Button>
        }
      >
        <Input
          type="text"
          name="title"
          label="Title"
          placeholder="Rockstar, As It Was, Sharks..."
        />

        <Input
          type="text"
          name="author"
          label="Author"
          placeholder="Imagine Dragons, Post Malone..."
        />

        <Input
          type="file"
          name="track"
          label="Track"
          accept="audio/mpeg"
          required={false}
        />

        <Input
          type="file"
          name="cover"
          label="Cover"
          accept="image/jpeg"
          required={false}
        />

        <Input
          type="select"
          name="genreId"
          label="Genre"
          options={genres.map(({ id, name }) => ({ value: id, name }))}
        />
      </Form>
    </Container>
  );
}

export default EditTrackPage;
