
import { FC } from "react";

interface layoutProps {
	children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
	return <div className=" min-h-screen w-full flex items-center justify-center flex-col">

	
		{children}
	</div>;
};

export default layout;
