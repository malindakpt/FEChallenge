import { Select } from '../Select';
import { shallow } from 'enzyme';

describe('Select Component', () => {
    it('renders elements without crashing', () => {
        const onSelectionChange = jest.fn();
        const onLabelClick = jest.fn();
        const wrapper = shallow(
            <Select
                name="label1"
                count={10}
                isExpandable
                isExpanded
                isSelected
                onSelectionChange={onSelectionChange}
                onLabelClick={onLabelClick}
            />,
        );

        const checkbox = wrapper.find('#checkbox');
        const label = wrapper.find('#label');
        const name = wrapper.find('#name');
        const count = wrapper.find('#count');
        const upArrow = wrapper.find('#upArrow');
        const rightArrow = wrapper.find('#rightArrow');

        expect(checkbox).toHaveLength(1);
        expect(label).toHaveLength(1);
        expect(name).toHaveLength(1);
        expect(count).toHaveLength(1);

        expect(upArrow).toHaveLength(1);
        expect(rightArrow).toHaveLength(0);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders name span with the correct name', () => {
        const onSelectionChange = jest.fn();
        const onLabelClick = jest.fn();
        const wrapper = shallow(
            <Select
                name="label1"
                count={10}
                isExpandable
                isExpanded={false}
                isSelected
                onSelectionChange={onSelectionChange}
                onLabelClick={onLabelClick}
            />,
        );
        const name = wrapper.find('#name');

        expect(name.text()).toEqual('label1');
        expect(wrapper).toMatchSnapshot();
    });

    it('renders count span with the brackets', () => {
        const onSelectionChange = jest.fn();
        const onLabelClick = jest.fn();
        const wrapper = shallow(
            <Select
                name="label1"
                count={10}
                isExpandable
                isExpanded={false}
                isSelected
                onSelectionChange={onSelectionChange}
                onLabelClick={onLabelClick}
            />,
        );
        const count = wrapper.find('#count');

        expect(count.text()).toEqual('(10)');
        expect(wrapper).toMatchSnapshot();
    });

    it('renders rightArrow when not expanded', () => {
        const onSelectionChange = jest.fn();
        const onLabelClick = jest.fn();
        const wrapper = shallow(
            <Select
                name="label1"
                count={10}
                isExpandable
                isExpanded={false}
                isSelected
                onSelectionChange={onSelectionChange}
                onLabelClick={onLabelClick}
            />,
        );
        const rightArrow = wrapper.find('#rightArrow');
        const upArrow = wrapper.find('#upArrow');

        expect(rightArrow).toHaveLength(1);
        expect(upArrow).toHaveLength(0);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders non of the arrows when Select is not expandable', () => {
        const onSelectionChange = jest.fn();
        const onLabelClick = jest.fn();
        const wrapper = shallow(
            <Select
                name="label1"
                count={10}
                isExpandable={false}
                isExpanded
                isSelected
                onSelectionChange={onSelectionChange}
                onLabelClick={onLabelClick}
            />,
        );
        const rightArrow = wrapper.find('#rightArrow');
        const upArrow = wrapper.find('#upArrow');

        expect(rightArrow).toHaveLength(0);
        expect(upArrow).toHaveLength(0);

        expect(wrapper).toMatchSnapshot();
    });

    it('onLabelClick callback on label click', () => {
        const onSelectionChange = jest.fn();
        const onLabelClick = jest.fn();
        const wrapper = shallow(
            <Select
                name="label1"
                count={10}
                isExpandable
                isExpanded
                isSelected
                onSelectionChange={onSelectionChange}
                onLabelClick={onLabelClick}
            />,
        );

        const label = wrapper.find('#label');
        label.simulate('click');
        expect(onLabelClick).toHaveBeenCalled();

        expect(wrapper).toMatchSnapshot();
    });

    it('onSelectionChange callback on checkbox change', () => {
        const onSelectionChange = jest.fn();
        const onLabelClick = jest.fn();
        const wrapper = shallow(
            <Select
                name="label1"
                count={10}
                isExpandable
                isExpanded
                isSelected
                onSelectionChange={onSelectionChange}
                onLabelClick={onLabelClick}
            />,
        );

        const checkbox = wrapper.find('#checkbox');

        checkbox.simulate('change', { target: { checked: true } });
        expect(onSelectionChange).toHaveBeenCalledWith(true);

        checkbox.simulate('change', { target: { checked: false } });
        expect(onSelectionChange).toHaveBeenCalledWith(false);

        expect(wrapper).toMatchSnapshot();
    });
});
