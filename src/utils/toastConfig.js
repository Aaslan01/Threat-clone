import React from 'react';
import {FailureToast, SuccessToast} from '../components/CustomSnackBar';

export const toastConfig = {
  failure: ({text1, props}) => <FailureToast title={text1} />,
  success: ({text1, props}) => <SuccessToast title={text1} />,
};
