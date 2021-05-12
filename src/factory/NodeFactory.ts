import { Node } from '../entities/Node';
import { ICategory } from '../interfaces/ICategory';

export class NodeFactory {
    private nodeById: Record<string, Node> = {};
    private data: ICategory[] = [];

    public constructor(data: ICategory[]) {
        this.data = data;
    }

    private getOrCreateNode(item: ICategory): Node {
        if (!this.nodeById[item.id]) {
            this.nodeById[item.id] = new Node(item.id, item.parent, item.name, item.count, {});
        }
        // Override props with new values
        this.nodeById[item.id].name = item.name;
        this.nodeById[item.id].count = item.count;

        return this.nodeById[item.id];
    }

    public generateNodeTree(): Node {
        // RootNode is used to store the referance for nodeTree
        const rootNode = new Node('Tree ref.', '', 'Tree ref.', 0, {});
        this.nodeById = {};

        this.data.forEach((item) => {
            const newNode = this.getOrCreateNode(item);

            if (this.nodeById[item.parent]) {
                this.nodeById[item.parent].children[item.id] = newNode;
            } else {
                // Add Gender as the name of the root
                rootNode.children[item.parent] = this.getOrCreateNode({
                    id: item.parent,
                    name: `Gender ${item.parent}`,
                    parent: rootNode.id,
                    count: 0,
                });
                rootNode.children[item.parent].children[item.id] = newNode;
            }
            // Remove the newNode from rootNode since it might be already added as a rootNode
            delete rootNode.children[item.id];
        });

        return rootNode;
    }
}
