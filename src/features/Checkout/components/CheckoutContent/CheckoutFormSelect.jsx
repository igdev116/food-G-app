import countriesList from "utils/countriesList";
import PRIMARY_RED_COLOR, { PRIMARY_WHITE_COLOR } from "constants/colors";

// styled component
import styled from "styled-components";

// react select
import Select from "react-select";

const customStyles = {
  container: (base) => ({
    ...base,
    flex: 1,
  }),
  control: (base) => ({
    ...base,
    fontSize: "1.3rem",
    borderColor: "rgba(0, 0, 0, 0.15)",
    boxShadow: "none",

    cursor: "pointer",

    "&:hover": {
      border: "1px solid inherite",
    },
  }),
  menu: (base) => ({
    ...base,
    zIndex: 100,

    paddingTop: "5px",
    paddingBottom: "5px",

    "-ms-overflow-style": "none",
    "scrollbar-width": "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  }),
  option: (base, state) => ({
    ...base,
    padding: "15px 10px",
    fontSize: "1.3rem",

    color: state.isSelected ? PRIMARY_WHITE_COLOR : "#333",
    backgroundColor: state.isSelected ? PRIMARY_RED_COLOR : PRIMARY_WHITE_COLOR,

    cursor: "pointer",

    "&:active": {
      backgroundColor: state.isSelected && PRIMARY_RED_COLOR,
    },

    "&:hover": {
      backgroundColor: !state.isSelected && "rgba(0, 0, 0, 0.03)",
    },
  }),
  noOptionsMessage: (base) => ({
    ...base,
    fontSize: "1.3rem",
  }),
  menuList: (base) => ({
    ...base,
    scrollbarWidth: "none",

    "::-webkit-scrollbar": {
      display: "none",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "rgba(0, 0, 0, 0.55)",
  }),
};

const CheckoutFormSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 5px;
`;

function CheckoutFormSelect(props) {
  const { errors, field } = props;

  return (
    <CheckoutFormSelectWrapper>
      <Select
        {...field}
        placeholder="Select a country"
        styles={customStyles}
        options={countriesList}
      />
      <span className="checkout-form-field__error">
        {errors.country?.message}
      </span>
    </CheckoutFormSelectWrapper>
  );
}

export default CheckoutFormSelect;
