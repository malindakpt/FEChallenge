import { FC } from 'react';
import MinusIcon from '../../../icons/minus.svg';
import PlusIcon from '../../../icons/plus.svg';
import classes from './Select.module.scss';
import { Node } from '../../../entities/Node';

interface Props {
    node: Node;
    onLabelClick: () => void;
    onSelectionChange: (isSelected: boolean, node: Node) => void;
}
export const Select: FC<Props> = ({
    node,
    onLabelClick,
    onSelectionChange,
}: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelectionChange(event.target.checked, node);
    };

    return (
        <div className={classes.container}>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={node.isSelected} onChange={handleChange}></input>
            <div id="label" className={classes.label} onClick={() => onLabelClick()}>
                <span id="name">{node.label}</span>
                <span id="count" className={classes.count}>
                    ({node.children?.length})
                </span>
                {node.children?.length > 0 && (
                    <>{node.isExpanded ? <img width={12} src={MinusIcon} /> : <img width={12} src={PlusIcon} />}</>
                )}
            </div>
        </div>
    );
};
