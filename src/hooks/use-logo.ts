import { useTheme } from './use-theme';
import logolight from '../../public/images/ZEROLIGHT.png';
import logodark from '../../public/images/ZERODARK.png';

export function useLogo() {
  const { theme } = useTheme();

  return theme === 'dark' ? logodark : logolight;
}
