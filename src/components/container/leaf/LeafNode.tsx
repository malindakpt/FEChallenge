import { FC, useState } from 'react';
import { Node } from '../../../entities/Node';
import { useForcedRender } from '../../../hooks/useForcedRender';
import { Select } from '../../presentational/select/Select';
import classes from './LeafNode.module.scss';

interface Props {
    node: Node;
    visibility: boolean;
    onChildrenSelectionChange: (isSelected: boolean) => void;
}

export const LeafNode: FC<Props> = ({ node, onChildrenSelectionChange: onSelectionChange }: Props) => {
    const [showChildren, setShowChildren] = useState(false);
    const children = Object.values(node.children);
    const reRender = useForcedRender();

    // Show/Hide the children when click on the label
    const handleOnLabelClick = () => {
        setShowChildren((prev) => !prev);
    };

    // Select all the children nodes when a parent node is selected
    const handleSelectionChange = (isSelected: boolean) => {
        node.setSelectedStatusOfAllChildren(isSelected);
        onSelectionChange(isSelected);
        reRender();
    };

    // When a children's selected state is changed, its notified to parent via this
    const handleChildrenSelectionChange = () => {
        const newSelectedStateForThisNode = node.isAllChildrenSelected();

        // Propagate the event to parent level, only if the selected state of this node is changed
        if (newSelectedStateForThisNode !== node.isSelected) {
            node.isSelected = newSelectedStateForThisNode;
            onSelectionChange(newSelectedStateForThisNode);
        }
        reRender();
    };

    return (
        <div className={classes.container}>
            <Select
                name={node.name}
                count={node.count}
                isSelected={node.isSelected}
                isExpanded={showChildren}
                isExpandable={Object.keys(node.children).length > 0}
                onSelectionChange={handleSelectionChange}
                onLabelClick={handleOnLabelClick}
            />
            <div className={showChildren ? classes.show : classes.hide}>
                {children.map((child) => (
                    <div key={child.id}>
                        <LeafNode
                            node={child}
                            visibility={showChildren}
                            onChildrenSelectionChange={handleChildrenSelectionChange}
                        ></LeafNode>
                    </div>
                ))}
            </div>
        </div>
    );
};
