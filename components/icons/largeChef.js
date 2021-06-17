import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import { primaryColor } from "../../styles/styles"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function LargeChef(props) {
    return (
        <Svg
            width={37}
            height={36}
            viewBox="0 0 37 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#prefix__clip0)" filter="url(#prefix__filter0_d)">
                <Path
                    d="M30.529 14.195c-.274.292-.556.602-.848.93-.292.328-.66.766-1.107 1.313a8.9 8.9 0 00-1.08 1.64c-.274.547-.41 1.02-.41 1.422 0 .492-.853.907-2.557 1.244-1.705.337-3.77.506-6.194.506s-4.488-.169-6.193-.506c-1.704-.337-2.557-.752-2.557-1.244 0-.529-.246-1.19-.738-1.982-.492-.793-.952-1.431-1.38-1.915a31.032 31.032 0 00-1.272-1.353c-1.24-1.203-1.86-2.662-1.86-4.375 0-1.695.597-3.14 1.791-4.334 1.194-1.194 2.64-1.791 4.334-1.791.42 0 .857.046 1.313.137-.292.747-.438 1.577-.438 2.488 0 1.95.602 3.573 1.805 4.867a84.296 84.296 0 01-.055-3.117c0-1.695.51-3.14 1.532-4.334C15.635 2.597 16.875 2 18.333 2c1.459 0 2.698.597 3.72 1.791 1.02 1.194 1.53 2.639 1.53 4.334 0 1.112-.018 2.151-.054 3.117 1.203-1.294 1.804-2.916 1.804-4.867 0-.911-.145-1.74-.437-2.488a6.692 6.692 0 011.312-.137c1.696 0 3.14.597 4.334 1.791 1.194 1.194 1.791 2.639 1.791 4.334 0 1.695-.601 3.135-1.804 4.32zM18.319 23c2.416 0 4.48-.173 6.194-.52 1.714-.346 2.57-.756 2.57-1.23v7c0 .474-.856.884-2.57 1.23-1.713.347-3.778.52-6.193.52-2.416 0-4.476-.173-6.18-.52-1.704-.346-2.557-.756-2.557-1.23v-7c0 .492.853.907 2.557 1.244 1.704.337 3.764.506 6.18.506z"
                    fill={primaryColor}
                />
            </G>
            <Defs>
                <ClipPath id="prefix__clip0">
                    <Path fill="#fff" transform="translate(4.333 2)" d="M0 0h28v28H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default LargeChef
