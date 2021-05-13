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
                // Create a new node for the parent with temp values
                const newParentNode = this.getOrCreateNode({
                    id: item.parent,
                    name: `Tree Root Node ${item.parent}`,
                    parent: rootNode.id,
                    count: 0,
                });
                newParentNode.children[item.id] = newNode;
                rootNode.children[item.parent] = newParentNode;
            }
            // Remove the newNode from rootNode if it is added as a Tree Root Node
            if (rootNode.children[item.id]) {
                delete rootNode.children[item.id];
            }
        });

        console.log('Node tree generated');
        return rootNode;
    }
}
