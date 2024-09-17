
import { FC } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navigation from "@/components/Navigation";
interface layoutProps {
	children: React.ReactNode;
}

const layout: FC<layoutProps> = ({ children }) => {
	return (
		<ClerkProvider appearance={{ baseTheme: dark }}>
			<div className=" min-h-screen w-full flex items-center justify-center flex-col mt-96">
				<Navigation />
				{children}
			</div>
		</ClerkProvider>
	);
};

export default layout;
