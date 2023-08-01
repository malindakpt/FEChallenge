import { LeafNode } from './components/container/leaf/LeafNode';
import { FC } from 'react';
import { Node } from './entities/Node';
import { INode } from './interfaces/INode';

const nodes: INode[] = [{
    value: 'root',
    label: 'root',
    children: [
        {
            value: 'root1',
            label: 'root2',
            children: [],
            isSelected: false,
            isExpanded: false,
        }
    ],
    isSelected: true,
    isExpanded: false,
}];

export const App: FC = () => {

    const node = new Node('Parts', 'adasd', false, false, undefined, nodes);
    const handleSelectionChange = () => {
        // Do nothing
    };

    return (
        <div>
            <LeafNode node={node} visibility onChildrenSelectionChange={handleSelectionChange} />
            {/* {nodes.map((node) => (
                <LeafNode key={node.value} node={node} visibility onChildrenSelectionChange={handleSelectionChange} />
            ))} */}
        </div>
    );
};

export default App;



