import { Provider } from 'react-redux';

export default function ReduxProvider({
  children,
  store,
}: {
  children: React.ReactNode;
  store: any;
}) {
  return <Provider store={store}>{children}</Provider>;
}
