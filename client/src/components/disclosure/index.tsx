import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
} from "react";
import useDisclosure from "./use-disclosure";

type IDisclosureContext = ReturnType<typeof useDisclosure> | null;

const DisclosureContext = createContext<IDisclosureContext>(null);

interface IDisclosureProvider {
  children: ReactNode;
  disclosure?: ReturnType<typeof useDisclosure>;
}

function DisclosureProvider({ children, disclosure }: IDisclosureProvider) {
  const defaultDisclosure = useDisclosure();

  return (
    <DisclosureContext.Provider value={disclosure || defaultDisclosure}>
      {children}
    </DisclosureContext.Provider>
  );
}

function Button({ children }: { children: ReactElement }) {
  const { toggle } = useContext(DisclosureContext)!;

  return cloneElement(children, { onClick: toggle });
}

function Content({ children }: { children: ReactElement }) {
  const { visible } = useContext(DisclosureContext)!;

  if (!visible) return null;

  return children;
}

export const Disclosure = Object.assign(DisclosureProvider, {
  Button,
  Content,
});
