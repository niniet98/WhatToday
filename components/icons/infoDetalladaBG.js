import * as React from "react"
import { Dimensions } from "react-native";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function InfoDetalladaBG(props) {
    const screenHeight = Dimensions.get("window").height;
    const screenWidth = Dimensions.get("window").width;

  return (
    <Svg
      width={screenWidth}
      height={578}
      viewBox="0 0 375 578"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#prefix__filter0_d)">
        <Path
          d="M-68.157 331.373l52.331 247.116L402.543 595c48.926-206.778 101.994-512.243 62.904-505.94-197.76 31.895-364.419-23.765-442.646-67.268C-97.651-45.194-83.134 216.976-68.157 331.373z"
          fill="url(#prefix__paint0_linear)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={56.031}
          y1={86.634}
          x2={469.304}
          y2={451.767}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FCB13A" />
          <Stop offset={0.707} stopColor="#FC633A" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default InfoDetalladaBG
