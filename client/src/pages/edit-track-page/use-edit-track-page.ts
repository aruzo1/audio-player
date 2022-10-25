import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import useQuery from "hooks/use-query";
import { IGenre } from "features/genres/types";
import { ITrack, IUpdateTrack } from "features/tracks/types";
import { tracksService } from "features/tracks/service";

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  author: yup.string().required(),
  genreId: yup.string().required().label("Genre"),
});

function useEditTrackPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [genres] = useQuery<IGenre[]>("genres");
  const [track] = useQuery<ITrack>(`tracks/${id}`);

  function submitHandler(values: IUpdateTrack) {
    tracksService.update(id!, values).then(() => navigate("/"));
  }
  function deleteHandler() {
    tracksService.delete(id!).then(() => navigate("/"));
  }

  return {
    genres,
    initalValues: track && {
      title: track.title,
      author: track.author,
      genreId: track.genreId,
    },
    submitHandler,
    deleteHandler,
    validationSchema,
  };
}

export default useEditTrackPage;
