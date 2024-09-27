import { createStackNavigator } from "@react-navigation/stack";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import FeedScreen from "../screens/FeedScreen";

import routes from "../config/routes";

const Stack = createStackNavigator();


const AppNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        component={FeedScreen}
        name={routes.APP_ROUTES.FEED}
      />
      <Stack.Screen
        name={routes.APP_ROUTES.LISTING_DETAILS}
        component={ListingDetailScreen}
      />
    </Stack.Navigator>
  )

}

export default AppNavigator