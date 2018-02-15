import { TabNavigator } from 'react-navigation';
import Feed from '../screens/Feed'
import Me from '../screens/Me'
import MyShaadi from '../screens/MyShaadi'
import Chat from '../screens/Chat'

const Tabs = TabNavigator (
{
    Feed: {
        screen: Feed
    },
    Me : {
        screen: Me
    } ,
    Chat : {
        screen: Chat
    }, 
    MyShaadi : {
        screen: MyShaadi
    }
}
)

export default Tabs
  