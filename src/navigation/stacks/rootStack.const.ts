import Login from '../../screens/auth/login/Login';
import SignUp from '../../screens/auth/signUp/SignUp';
import Splash from '../../screens/auth/splash/Splash';
import SplashScreen from '../../screens/auth/splashScreen/SplashScreen';
import Comapign from '../../screens/home/myAds/MyAds';
import Dashboard from '../../screens/home/dashBord/Dashboard';
import SupportScreen from '../../screens/home/supportScreen/SupportScreen';
import HomeBottomTabs from '../bottomTabs/homeBottomTabs/HomeBottomTabs';
import Profile from '../../screens/home/profile/Profile';
import PostAds from '../../screens/home/postAds/PostAds';
import CreateEstablishment from '../../screens/home/createEstablishment/CreateEstablishment';
import EstablishmentList from '../../screens/home/establishmentList/EstablishmentList';

export const stackScreens = [
  {name: 'SplashScreen', component: SplashScreen},
  {name: 'SignUp', component: SignUp},
  {name: 'Login', component: Login},
  {name: 'Dashboard', component: Dashboard},
  {name: 'Splash', component: Splash},  
  {name: 'HomeBottomTabs', component: HomeBottomTabs},
  {name: 'SupportScreen', component: SupportScreen},
  {name: 'Comapign', component: Comapign},
  {name: 'Profile', component: Profile},
  {name: 'PostAds', component: PostAds},
  {name: 'CreateEstablishment', component: CreateEstablishment},
  {name: 'EstablishmentList', component: EstablishmentList},
];
