import React from "react";
import styled from "styled-components";

const FilterWrapper = styled.div`
display:flex;
`
const CheckBox = styled.input``
const Wrapper = styled.div`
  text-align: center;
`
const CheckList = styled.div`
  margin: 10px 10px 0 10px;
`
const Filter = () => {

  return(
    <FilterWrapper>
      <Wrapper>
        <CheckList>0~5</CheckList>
        <CheckBox type="checkbox" id="1"/>
      </Wrapper>
      <Wrapper>
        <CheckList>6~11</CheckList>
        <CheckBox type="checkbox" id="2"/>
      </Wrapper>
      <Wrapper>
        <CheckList>12~</CheckList>
        <CheckBox type="checkbox" id="3"/>
      </Wrapper>
    </FilterWrapper>
  )
}

export default Filter