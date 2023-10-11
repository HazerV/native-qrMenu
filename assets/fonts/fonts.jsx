import * as Font from "expo-font"

const useFonts = async () => {
    await (Font.loadAsync({
        'Gilroy-Medium': require('../fonts/Gilroy-Medium.ttf'),
        'Gilroy-Thin': require('../fonts/Gilroy-Thin.ttf'),
        'Gilroy-Regular': require('../fonts/Gilroy-Regular.ttf')
    }))
}

export default useFonts;    