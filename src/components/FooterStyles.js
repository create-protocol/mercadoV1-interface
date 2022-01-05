import styled from 'styled-components';


export const Containertop= styled.div`
padding-top:3rem;
width:100%;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background:  #1a1a1ac;
padding-bottom:3rem;
opacity:0.6;
`

export const ContainerInner= styled.div`
width:55%;
display:flex;
align-items:space-between;
justify-content:space-between;
color:white;
padding-bottom:1rem;

@media (max-width: 1000px) {
flex-direction:column;
}


`

export const Row=styled.div`
display:flex;
flex-direction:column;
text-align:start;
`

export const FooterLink = styled.a`
color: #FFFFFF;
margin-bottom: 10px;
font-size: 15px;
text-decoration: none;

&:hover {
	color: grey;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #FFFFFF;
margin-bottom: 2rem;
font-weight: bold;
`;
