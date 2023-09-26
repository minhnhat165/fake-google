import { MenuIcon } from '../ui/icons/menu-icon';

export interface HeaderProps {}

export const Header = (props: HeaderProps) => {
	console.log(props);

	return (
		<div className="h-14 border-b w-full flex justify-end px-4">
			<div className="flex gap-3 items-center">
				<div className="space-x-2">
					<a href="#">Gmail</a>
					<a href="#">Images</a>
				</div>
				<button className="w-10 h-10 rounded-full p-2 hover:bg-slate-400/10">
					<MenuIcon />
				</button>
				<div className="p-1 hover:bg-slate-400/10 rounded-full">
					<div className="w-8 h-8 bg-blue-500 rounded-full"></div>
				</div>
			</div>
		</div>
	);
};
