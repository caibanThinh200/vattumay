import { createContext, useContext, useState } from "react";

interface ISettingProps {
  breadcrump: Array<{ href?: string; name?: string; active?: boolean }>;
  updateBreadcrump?: (
    breadcrumpPath: Array<{ href?: string; name?: string; active?: boolean }>
  ) => void;
}

const defaultProps: ISettingProps = {
  breadcrump: [{ href: "", name: "", active: false }],
};

export const SettingContext = createContext(defaultProps);

const Setting: React.FC<{ children: React.ReactNode }> = (props) => {
  const [breadcrump, setBreadcrump] = useState<
    Array<{ href?: string; name?: string; active?: boolean }>
  >(defaultProps.breadcrump);

  const updateBreadcrump = (
    breadcrumpPath: Array<{ href?: string; name?: string; active?: boolean }>
  ) => {
    setBreadcrump([...breadcrumpPath]);
  };

  const state = {
    breadcrump,
    updateBreadcrump,
  };

  return (
    <SettingContext.Provider value={state}>
      {props.children}
    </SettingContext.Provider>
  );
};

export const useSettingContext = () => {
  const context = useContext(SettingContext);
  return context;
};

export default Setting;
