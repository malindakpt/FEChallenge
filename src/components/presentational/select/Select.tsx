import { FC } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
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
            <Checkbox id="checkbox" checked={node.isSelected} onChange={handleChange} color="primary" />

            <div id="label" className={classes.label} onClick={() => onLabelClick()}>
                <span id="name">{node.label}</span>
                <span id="count" className={classes.count}>
                    ({node.children?.length})
                </span>
                {node.children?.length > 0 && (
                    <>{node.isExpanded ? <ArrowDropUpIcon id="upArrow" /> : <ArrowRightIcon id="rightArrow" />}</>
                )}
            </div>
        </div>
    );
};
