import { ReactNode, FC } from "react";

interface Props {
	children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
	return <div>{children}</div>;
};

export default Container;
