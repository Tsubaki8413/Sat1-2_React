/** @jsxImportSource @emotion/react **/
import { css } from '@emotion/react';
import { Button } from '@mui/material';

export default function MaterialBasic(){
    const font = css`
        text-transform: none;
    `;

    return(
        <>
        <Button variant="text" color="secondary" css={font}>Text</Button>
        <Button variant="contained" color="secondary" css={font}>Contained</Button>
        <Button variant="outlined" color="secondary" css={font}>Outlined</Button>
        </>
    );
};