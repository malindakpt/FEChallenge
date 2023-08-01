import { INode } from "../interfaces/INode";

export class Node {
    // private _id: string;
    // private _parentId: string;
    // private _name: string;
    // private _count: number;
    // private _children: Record<string, Node>;
    // private _isSelected: boolean;

    public label: string;
    public value: string;
    public parent?: Node;
    public children: Node[];
    public isSelected: boolean;
    public isExpanded: boolean;

    // constructor(id: string, parentId: string, name: string, count: number, children: Record<string, Node>) {
    constructor(label: string, value: string, isSelected: boolean, isExpanded: boolean, parent: Node | undefined, children: INode[]) {
        this.label = label;
        this.value = value;
        this.isSelected = isSelected;
        this.isExpanded = isExpanded;
        this.parent = parent;

        this.children = [];

        if(children?.length > 0) {
            children.forEach(c => {
                const child = new Node(c.label, c.value, c.isSelected, c.isExpanded, this, c.children);
                this.children.push(child);
            })
        }

        // this._parentId = parentId;
        // this._name = name;
        // this._count = count;
        // this._children = children;
        // this._isSelected = false;
    }

    public setSelectedStatusOfAllChildren(isSelected: boolean): void {
        this.isSelected = isSelected;
        this.children?.forEach((child) => {
            child.setSelectedStatusOfAllChildren(isSelected);
        });
    }

    public isAllChildrenSelected(): boolean {
        return this.children.find((child) => !child.isAllChildrenSelectedIncludingItself()) === undefined;
    }

    public isAllChildrenSelectedIncludingItself(): boolean {
        return this.isSelected && this.isAllChildrenSelected();
    }



    // public set isSelected(isSelected: boolean) {
    //     this._isSelected = isSelected;
    // }
    // public get isSelected(): boolean {
    //     return this._isSelected;
    // }

    // public set id(id: string) {
    //     this._id = id;
    // }
    // public get id(): string {
    //     return this._id;
    // }

    // public set parentId(parentId: string) {
    //     this._parentId = parentId;
    // }
    // public get parentId(): string {
    //     return this._parentId;
    // }

    // public set name(name: string) {
    //     this._name = name;
    // }
    // public get name(): string {
    //     return this._name;
    // }

    // public set count(count: number) {
    //     this._count = count;
    // }
    // public get count(): number {
    //     return this._count;
    // }

    // public set children(children: Record<string, Node>) {
    //     this._children = children;
    // }
    // public get children(): Record<string, Node> {
    //     return this._children;
    // }
}
