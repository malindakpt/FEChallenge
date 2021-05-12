import { data } from './data/data';
import { ICategory } from './interfaces/ICategory';
import { LeafNode } from './components/container/leaf/LeafNode';
import { FC } from 'react';
import { NodeFactory } from './factory/NodeFactory';

export const App: FC = () => {
    const categories: ICategory[] = data.categories;
    const nodeFactory = new NodeFactory(categories);
    const rootNode = nodeFactory.generateNodeTree();

    const handleSelectionChange = () => {
        // Do nothing
    };

    return (
        <div>
            {Object.values(rootNode.children).map((child) => (
                <LeafNode key={child.id} node={child} visibility onChildrenSelectionChange={handleSelectionChange} />
            ))}
        </div>
    );
};

export default App;
