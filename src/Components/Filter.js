import React from "react";
import styled from "styled-components";


const FilterWrapper = styled.div`
display:flex;
`
const CheckBox = styled.input``
const Wrapper = styled.div`
  display:flex;
  align-items: center;
  text-align: center;
`
const CheckList = styled.div`
  margin: 10px 10px 0 10px;
`
const Filter = (props ) => {
  const {value1st, value2nd, value3rd, setValue1st, setValue2nd, setValue3rd} = props
  
  const handleSingleCheck = (e) => {
    switch(e.target.id) {
      case '1' : e.target.checked ? setValue1st(true) : setValue1st(false);
      break;
      case '2' : e.target.checked ? setValue2nd(true) : setValue2nd(false);
      break;
      case '3' : e.target.checked ? setValue3rd(true) : setValue3rd(false);
      break;
    }
  };

  return(
    <FilterWrapper>
      <Wrapper>
        <CheckList>0~5</CheckList>
        <CheckBox type="checkbox"  
          id="1"
          checked={value1st} 
          onChange={(e) => handleSingleCheck(e)} 
          />
        <CheckList>6~11</CheckList>
        <CheckBox type="checkbox"
          id="2"  
          checked={value2nd} 
          onChange={(e) => handleSingleCheck(e)} 
          />
        <CheckList>12~</CheckList>
        <CheckBox type="checkbox"
          id="3"
          checked={value3rd} 
          onChange={(e) => handleSingleCheck(e)} 
          />
          
        
        
      </Wrapper>
    </FilterWrapper>
  )
}

export default Filter