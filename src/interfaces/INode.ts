export interface INode {
    label: string;
    value: string;
    isSelected: boolean;
    isExpanded: boolean;
    children: INode[];
}
