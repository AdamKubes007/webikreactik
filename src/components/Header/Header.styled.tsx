import styled from "styled-components"

export const HeaderStyle = styled.header`
display: flex;
flex-wrap: wrap;
align-items: center;
background-color: lightgray;
padding: 0 6%;
height: 20vh;
`

export const HeaderLogo = styled.div`
font-size: 40px;
font-weight: 700;
margin-right: auto;
`

export const MenuLinks = styled.ul`
display: flex;
` 
export const MenuLinksLi = styled.li`
font-size: 28px;
font-weight: 500;
list-style: none;
&:first-child{
    margin-right: 50px;
}

a {
    text-decoration: none;
    color: black;
}

a:hover {
    text-decoration: underline;
}
`