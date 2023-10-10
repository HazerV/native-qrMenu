import * as Font from "expo-font"

const useFonts = async () => {
    await (Font.loadAsync({
        'Gilroy-Medium': require('../fonts/Gilroy-Medium.ttf'),
        'Gilroy-Thin': require('../fonts/Gilroy-Thin.ttf')
    }))
}

export default useFonts;    