export class Node {
    private _id: string;
    private _parentId: string;
    private _name: string;
    private _count: number;
    private _children: Record<string, Node>;
    private _isSelected: boolean;

    constructor(id: string, parentId: string, name: string, count: number, children: Record<string, Node>) {
        this._id = id;
        this._parentId = parentId;
        this._name = name;
        this._count = count;
        this._children = children;
        this._isSelected = false;
    }

    public setSelectedStatusOfAllChildren(isSelected: boolean): void {
        this.isSelected = isSelected;
        Object.values(this.children).forEach((child) => {
            child.setSelectedStatusOfAllChildren(isSelected);
        });
    }

    public isAllChildrenSelected(): boolean {
        return Object.values(this.children).find((child) => !child.isAllParentAndChildrenSelected()) === undefined;
    }
    public isAllParentAndChildrenSelected(): boolean {
        return this.isSelected && this.isAllChildrenSelected();
    }

    public set isSelected(isSelected: boolean) {
        this._isSelected = isSelected;
    }
    public get isSelected(): boolean {
        return this._isSelected;
    }

    public set id(id: string) {
        this._id = id;
    }
    public get id(): string {
        return this._id;
    }

    public set parentId(parentId: string) {
        this._parentId = parentId;
    }
    public get parentId(): string {
        return this._parentId;
    }

    public set name(name: string) {
        this._name = name;
    }
    public get name(): string {
        return this._name;
    }

    public set count(count: number) {
        this._count = count;
    }
    public get count(): number {
        return this._count;
    }

    public set children(children: Record<string, Node>) {
        this._children = children;
    }
    public get children(): Record<string, Node> {
        return this._children;
    }
}
