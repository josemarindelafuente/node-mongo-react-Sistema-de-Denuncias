import MenuWeb  from '../components/common/MenuWeb/MenuWeb.jsx';
import FooterWeb from '../components/common/footerWeb/FooterWeb.jsx';

export const PublicLayout = ( { children } ) => {
  return (
        <>
            <MenuWeb />
         
            { children }
            
            <FooterWeb/>
        </>
  )
}
