import { FC } from 'react';
import { Node } from '../../../entities/Node';
import { useForcedRender } from '../../../hooks/useForcedRender';
import { Select } from '../../presentational/select/Select';
import classes from './LeafNode.module.scss';

interface Props {
    node: Node;
    visibility: boolean;
    onChildrenSelectionChange: (isSelected: boolean) => void;
}

export const LeafNode: FC<Props> = ({ node, onChildrenSelectionChange }: Props) => {

    const reRender = useForcedRender();

    // Show/Hide the children when click on the label
    const handleOnLabelClick = () => {
        // setShowChildren((prev) => !prev);
        node.isExpanded = !node.isExpanded;
        reRender();
    };

    // Select all the children nodes when a parent node is selected
    const handleSelectionChange = (isSelected: boolean) => {
        node.setSelectedStatusOfAllChildren(isSelected);
        onChildrenSelectionChange(isSelected);
        reRender();
    };

    // When a children's selected state is changed, its notified to parent via this
    const handleChildrenSelectionChange = () => {
        const newSelectedStateForThisNode = node.isAllChildrenSelected();

        // Propagate the event to parent level, only if the selected state of this node is changed
        if (newSelectedStateForThisNode !== node.isSelected) {
            node.isSelected = newSelectedStateForThisNode;
            onChildrenSelectionChange(newSelectedStateForThisNode);
            reRender();
        }
    };

    return (
        <div className={classes.container}>
            <Select node={node} onSelectionChange={handleSelectionChange} onLabelClick={handleOnLabelClick} />
            <div className={node.isExpanded  ? classes.show : classes.hide}>
                {node.children.map((child) => (
                    <div key={child.value}>
                        <LeafNode
                            node={child}
                            visibility={node.isExpanded}
                            onChildrenSelectionChange={handleChildrenSelectionChange}
                        ></LeafNode>
                    </div>
                ))}
            </div>
        </div>
    );
};
