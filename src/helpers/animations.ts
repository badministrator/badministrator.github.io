import { keyframes } from "@emotion/core";

export const slideTop = keyframes`
  0% {
	transform: translateY(100px);
  }
  100% {
	transform: translateY(0);
  }
`;

export const fadeIn = keyframes`
  0% {
 	opacity:0;
  }
  100% {
	 opacity:1;
  }
`;
