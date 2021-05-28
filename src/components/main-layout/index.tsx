import MainNavigation from "../main-navigation";

function MainLayout({ children }) {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}

export default MainLayout;
