import { Linking } from 'react-native';
import {SnackbarError} from './SnackBar';
export async function OpenUrl(props: any) {
  const supported = await Linking.canOpenURL(props);
  if (supported) {
    try {
      await Linking.openURL(props);
    } catch {
      SnackbarError(`URL is not Valid: ${props}`);
    }
  } else {
    SnackbarError(`URL is not Valid: ${props}`);
  }
}
