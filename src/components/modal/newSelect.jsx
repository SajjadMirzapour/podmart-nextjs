import Select from "react-select";
const colourStyles = {
    control: styles => ({ ...styles, backgroundColor: '#f7f9fc' }),
    input: provided => ({ ...provided }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isDisabled ? 'red' : 'white',
            color: 'black',
            cursor: isDisabled ? 'not-allowed' : 'default',
        };
    },
    indicatorSeparator: provided => ({ ...provided, display: 'none' })
};
const cities = [
    { label: "تهران", value: 1 },
    { label: "مشهد", value: 2 },
    { label: "اصفهان", value: 3 },
    { label: "شیراز", value: 4 },
    { label: "فریمان", value: 5 },
    { label: "بجنورد", value: 6 },
];

export default function NewSelect() {
    return (
        <div className="mb-3">
            <Select options={cities} styles={colourStyles} placeholder="انتخاب شهر" />
        </div>
    )
}

