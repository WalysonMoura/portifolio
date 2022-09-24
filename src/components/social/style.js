import styled from "styled-components";

export const List = styled.ul`
position: fixed;
z-index: 3;
bottom: 0;
left: 1rem;

display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;

::after{
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #a8b2d1;

}
`