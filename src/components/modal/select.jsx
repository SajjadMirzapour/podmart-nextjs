import * as React from 'react';
import { Select, MenuItem } from '@mui/material'
import { styled } from '@mui/system';

const StyledSelect = styled(Select)({
  color: 'darkslategray',
  backgroundColor: '#f7f9fc',
  fontFamily: "Iran Yekan",
  fontSize: '14px',
  width: '100%',
  borderRadius: 4,
  '& .MuiSelect-select': {
    paddingTop: '8px',
    paddingBottom: '8px',
  }
});

export default function MySelect() {
  return (
    <StyledSelect defaultValue={'انتخاب موضوع'}>
      <MenuItem value={'انتخاب موضوع'}>موضوع خود را انتخاب نمایید</MenuItem>
      <MenuItem value={'درخواست شغل'}>درخواست شغل</MenuItem>
      <MenuItem value={'درخواست کمک هزینه'}>درخواست کمک هزینه</MenuItem>
      <MenuItem value={'استخدام'}>استخدام</MenuItem>
      <MenuItem value={'انتقالی'}>انتقالی</MenuItem>
      <MenuItem value={'انصراف از پا'}>انصراف از پاد</MenuItem>
    </StyledSelect>
  );
}
