import { useState, useEffect, useRef, useCallback } from 'react';
import styled, { css } from "styled-components"
import { COLORS } from "../../constant";
import useOutsideClick from '../../hooks/useOutsideClick';

const SelectWrapper = styled.div`
  position: relative;
`;

type InputWrapperProps = {
  withLabel: boolean;
}

const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;

  ${({ withLabel }) => withLabel && css`
    margin-top: 2px;
  `}
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid ${COLORS.gray};
  font-size: 1.6rem;
  line-height: 2.8rem;
  color: currentColor;
  cursor: pointer;
  height: 40px;
  padding: 30px 0 30px 16px;
  width: 100%;
  background-color: transparent;

  ::placeholder {
    color: ${COLORS.gray};
  }

  &:focus {
    outline: none;
  }
`;

type CollapeIconProps = {
  isOpen: boolean;
}

const CollapeIcon = styled.img<CollapeIconProps>`
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: calc(50% - 5px) ;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(0)' : 'rotate(180deg)')} translateY(50%);
  transform-origin: center 75%;
  transition: transform .3s;
`;

const ClickableInput = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  cursor: pointer;
  background-color: transparent;
`;

const List = styled.ul`
  background: #ffffff;
  padding: 0 32px 8px 32px;
  list-style-type: none;
  border: 1px solid ${COLORS.gray};
  border-radius: 4px;
  margin-top: 4px;
  max-height: 300px;
  overflow-y: scroll;
  position: absolute;
  width: 100%;
  z-index: 10;

  &::-webkit-scrollbar {
    width: 4px;
  };

  div {
    cursor: pointer;
    padding: .8em 1em;
    position: relative;
    text-align: center;
    font-size: 1.6rem;
    
    &:hover {
      background: #f9f9f9;
    }
  }

  & > li:not(:last-child) {
    border-bottom: 1px solid ${COLORS.gray};
  }
`;

type Options = {
  key: string;
  value: string;
}

type SelectProps = {
  selected: string;
  options: Options[];
  onChange: (value: string) => void;
  label?: string;
}

function Select({
  selected,
  options,
  onChange,
  label,
  ...attributes

}: SelectProps):JSX.Element {
  const [selectedOption, setSelectedOption] = useState({ key: '', value: ''});
  const [isListVisible, setListVisible] = useState(false);
  const ListRef = useRef(null);

  useEffect(() => {
    const selectedOptionInOptions = options.find(({ value }) => value === selected);
    if(selectedOptionInOptions) {
      setSelectedOption(selectedOptionInOptions)
    }
  }, [options, selected])

  const onOutsideClick = useCallback(() => {
    if(isListVisible) {
      setListVisible(false)
    }
  }, [isListVisible])

  useOutsideClick(ListRef, onOutsideClick)

  async function handleSelect(value: string, key: string) {
    await setListVisible(false)
    setSelectedOption({ key, value });
    onChange(value)
  }

  return (
    <SelectWrapper>
      {label}
      <InputWrapper withLabel={Boolean(label)}>
        <StyledInput 
          placeholder={selectedOption.key} 
          disabled
          {...attributes}
        />
        <CollapeIcon 
          isOpen={isListVisible}
          src="assets/sign-up/icon-arrow-down.svg"
          alt="Toggle"
        />
      </InputWrapper>
      <ClickableInput onClick={() => (options.length > 0 ? setListVisible(true) : null)}/>
      {isListVisible && options.length > 0 ? (
        <List ref={ListRef}>
          {options.map(({ value, key }) => (
            <li key={`${value}${key}`}>
              <div onClick={() => handleSelect(value, key)}>
                {key}
              </div>
            </li>
          ))}
        </List>
      ) : null }
    </SelectWrapper>
  )
}

export default Select
