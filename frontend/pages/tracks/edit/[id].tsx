import * as yup from "yup";
import Container from "components/container";
import Form from "components/form";
import Button from "components/button";
import Input from "components/input";
import { GetServerSideProps, NextPage } from "next";
import { tracksService } from "features/tracks/service";
import { IUpdateTrack } from "features/tracks/types";
import { useRouter } from "next/router";
import pagesPropsService from "services/pages-props-service";

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  genreId: yup.string().required().label("Genre"),
});

type Props = Awaited<ReturnType<typeof pagesPropsService["getTrackEditProps"]>>;

const EditTrackPage: NextPage<Props> = (props) => {
  const { id, initialValues, genres } = props!;
  const router = useRouter();

  async function submitHandler(values: IUpdateTrack) {
    await tracksService.update(id, values).then(() => router.push("/"));
  }
  function deleteHandler() {
    tracksService.delete(id).then(() => router.push("/"));
  }

  return (
    <Container>
      <Form
        title="Edit Track"
        initialValues={initialValues}
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
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params!.id as string;

  const props = await pagesPropsService.getTrackEditProps(id);
  if (!props) return { redirect: { destination: "/", permanent: false } };

  return { props };
};

export default EditTrackPage;
