import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

function Spinner({ display, border, size }) {
  const override = css`
    display: ${display};
    margin: 0 auto;
    border-color: ${border};
    border-width: 3px;
    border-bottom-color: transparent;
  `;
  return <ClipLoader color="#3c91e6" css={override} size={size} />;
}
export default Spinner;
