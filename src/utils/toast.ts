import Toast from 'react-native-toast-message';

interface IToast {
  type?: string;
  title?: string;
  subTitle?: string;
}

export function showToast(props: IToast) {
  const {type, title, subTitle} = props;
  Toast.show({
    type,
    text1: title,
    text2: subTitle,
    position: 'bottom',
  });
}
