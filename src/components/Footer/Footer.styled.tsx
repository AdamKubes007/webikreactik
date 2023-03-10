import styled from "styled-components"

export const FooterStyle = styled.footer`
width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 6%;
    height: 10vh;
    background-color: lightgray;
    font-size: 20px;
    font-weight: 300;
`
export const FooterContactLinks = styled.div`
display: flex;
align-items: center;
`
export const FooterMainLink = styled.a`
margin-right: 40px;
text-decoration: none;
color: black;
`
export const FooterSocialImg = styled.img`
width: auto;
height: 26px;
`
export const FooterSocialLink = styled.a`
&:first-child{
margin-right: 16px;}
`