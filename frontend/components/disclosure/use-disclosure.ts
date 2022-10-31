import { useState } from "react";

function useDisclosure() {
  const [visible, setVisible] = useState(false);

  function close() {
    setVisible(false);
  }

  function toggle() {
    setVisible((prev) => !prev);
  }

  return { visible, toggle, close };
}

export default useDisclosure;
