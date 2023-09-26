import { ArrowsPointingInIcon } from '../ui/icons/ArrowsPointingInIcon';
import { CameraIcon } from '../ui/icons/CameraIcon';
import { MagnifyingGlassIcon } from '../ui/icons/MagnifyingGlassIcon';
import { MicrophoneIcon } from '../ui/icons/MicrophoneIcon';

export interface MainProps {}

export const Main = () => {
	return (
		<div className="flex flex-1 flex-col items-center justify-center gap-4">
			<div className="w-[272px] h-[92px] bg-black">
				<img
					src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
					alt="google logo"
				/>
			</div>
			<div className="w-1/2 h-12  border rounded-full flex items-center px-2">
				<ButtonIcon>
					<MagnifyingGlassIcon className="w-5 h-5" />
				</ButtonIcon>
				<textarea
					style={{
						resize: 'none',
					}}
					className="w-full h-full focus:right-0 focus:border-0 p-2"
				></textarea>
				<div className="flex gap-1">
					<ButtonIcon>
						<ArrowsPointingInIcon />
					</ButtonIcon>
					<ButtonIcon>
						<MicrophoneIcon />
					</ButtonIcon>
					<ButtonIcon>
						<CameraIcon />
					</ButtonIcon>
				</div>
			</div>
			<div>
				<Button>Find on Google</Button>
				<Button>Find on Google</Button>
			</div>
		</div>
	);
};

const ButtonIcon = ({ children }: { children: React.ReactNode }) => {
	return <button className="p-2 w-8 h-8">{children}</button>;
};

const Button = ({ children }: { children: React.ReactNode }) => {
	return <button className="p-2">{children}</button>;
};
