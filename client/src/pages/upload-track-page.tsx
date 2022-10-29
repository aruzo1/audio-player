import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import useQuery from "hooks/use-query";
import Container from "components/container";
import Form from "components/form";
import Input from "components/input";
import { IGenre } from "features/genres/types";
import { ICrateTrack } from "features/tracks/types";
import { tracksService } from "features/tracks/service";

const initialValues = {
  title: "",
  author: "",
  track: null,
  cover: null,
  genreId: "",
};

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  track: yup.mixed().required(),
  cover: yup.mixed().required(),
  genreId: yup.string().required().label("Genre"),
});

function UploadTrackPage() {
  const navigate = useNavigate();
  const [genres] = useQuery<IGenre[]>("genres");

  function submitHandler(values: ICrateTrack) {
    tracksService.create(values).then(() => navigate("/"));
  }

  return (
    <Container>
      <Form
        title="Upload Track"
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        buttonText="Upload"
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

        <Input type="file" name="track" label="Track" accept="audio/mpeg" />

        <Input type="file" name="cover" label="Cover" accept="image/jpeg" />

        <Input
          type="select"
          name="genreId"
          label="Genre"
          options={genres?.map(({ id, name }) => ({ value: id, name }))}
        />
      </Form>
    </Container>
  );
}

export default UploadTrackPage;