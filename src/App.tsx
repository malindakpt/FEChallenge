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
        },
        {
            value: 'q1',
            label: 'q1',
            children: [],
            isSelected: false,
            isExpanded: false,
        }
    ],
    isSelected: false,
    isExpanded: false,
},
{
    value: 'ch2',
    label: 'ch2',
    children: [
        {
            value: 'root1',
            label: 'root2',
            children: [
                {
                    value: 'root1',
                    label: 'root2',
                    children: [],
                    isSelected: false,
                    isExpanded: false,
                },
                {
                    value: 'q1',
                    label: 'q1',
                    children: [],
                    isSelected: false,
                    isExpanded: false,
                }],
            isSelected: false,
            isExpanded: true,
        },
        {
            value: 'q1',
            label: 'q1',
            children: [],
            isSelected: false,
            isExpanded: false,
        }
    ],
    isSelected: true,
    isExpanded: false,
}];

export const App: FC = () => {

    const nodeArr = nodes.map(n => new Node(n.label, n.value, n.isSelected, n.isExpanded, undefined, n.children))
    const handleSelectionChange = () => {
        // Do nothing
    };

    return  <>{nodeArr.map( n => <LeafNode node={n} visibility onChildrenSelectionChange={handleSelectionChange} />)}</>;
};

export default App;
