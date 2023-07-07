import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import GraphAPI from "@/services/connection";
import Home from "./home/home";

const Index = ({ Component, pageProps, headerSettings, footerSettings }) => {

  return (
    <>
      <Header logo={headerSettings} />
      <Home />
      <Footer footerSettings={footerSettings} />
    </>
  );
};

export default Index;

Index.getInitialProps = async () => {
  const themeOptions = await GraphAPI.themeOptions();
  
  return {
        headerSettings: themeOptions.data.data?.themeOptions?.themeSettings?.headerLogo,
        footerSettings: themeOptions.data.data?.themeOptions?.themeSettings, 
       }
}
