import { FC } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import classes from './Select.module.scss';

interface Props {
    name: string;
    count: number;
    isSelected: boolean;
    isExpanded: boolean;
    isExpandable: boolean;
    onLabelClick: () => void;
    onSelectionChange: (isSelected: boolean) => void;
}
export const Select: FC<Props> = ({
    name,
    count,
    isSelected,
    isExpanded,
    isExpandable,
    onLabelClick,
    onSelectionChange,
}: Props) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelectionChange(event.target.checked);
    };

    return (
        <div className={classes.container}>
            <Checkbox id="checkbox" checked={isSelected} onChange={handleChange} color="primary" />

            <div id="label" className={classes.label} onClick={() => onLabelClick()}>
                <span id="name">{name}</span>
                <span id="count" className={classes.count}>
                    ({count})
                </span>
                {isExpandable && (
                    <>{isExpanded ? <ArrowDropUpIcon id="upArrow" /> : <ArrowRightIcon id="rightArrow" />}</>
                )}
            </div>
        </div>
    );
};
