import * as React from "react"
import Svg, { Path } from "react-native-svg"

function IngredientsIcon(props) {
  return (
    <Svg
      width={18}
      height={17}
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.47 7.609a.5.5 0 00.142-.99c-1.076-.155-2.354.722-2.354 2.163a.5.5 0 101 0c0-.8.707-1.246 1.211-1.173z"
        fill="#FC633A"
      />
      <Path
        d="M2.993 5.134c-2.417 1.908-2.48 5.142-1.347 7.32.761 1.464 2.225 2.767 4.421 2.767.545 0 .938-.015 1.248-.026.937-.036 1.107-.042 2.412.48 1.736.694 3.582.488 5.124-.476 1.388-.868 2.185-2.882 2.05-4.517-.081-.982-.008-1.366.086-1.862a9.94 9.94 0 00.178-1.344c.107-1.595-.645-3.092-1.054-3.806-.41-.714-1.1-1.83-2.724-2.855C12.054-.027 9.529-.43 7.531.669c-1.464.805-2.196 1.537-3.074 3-.333.555-.652.823-1.464 1.465zM13.9 8.465a4.497 4.497 0 01-4.495 4.495A4.495 4.495 0 1113.9 8.465z"
        fill="#FC633A"
      />
    </Svg>
  )
}

export default IngredientsIcon