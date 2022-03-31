/// <reference types="react" />
import { ToolbarHead } from './ToolbarHead';
import { ToolbarTail } from './ToolbarTail';
import { ToolbarItem } from './ToolbarItem';
import './Toolbar.style.scss';
export declare type ToolbarProps = {
    children: JSX.Element | JSX.Element[];
    className?: string;
};
declare function Toolbar({ children, className, ...props }: ToolbarProps): JSX.Element;
declare namespace Toolbar {
    var Head: typeof ToolbarHead;
    var Tail: typeof ToolbarTail;
    var Item: typeof ToolbarItem;
}
export { Toolbar };
//# sourceMappingURL=Toolbar.d.ts.map